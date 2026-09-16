#!/usr/bin/env node

const DEFAULT_HOST = "https://www.brbn.pl";
const DEFAULT_KEY = "1c1d29804833a3c355430fa89f10d035";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_REQUEST = 10_000;
const REQUEST_TIMEOUT_MS = 20_000;

function printHelp() {
  console.log(`IndexNow batch submitter\n\nUsage:\n  npm run seo:indexnow -- [options]\n\nOptions:\n  --host <url>             Canonical site origin (default: ${DEFAULT_HOST})\n  --sitemap <url>          Sitemap URL (default: <host>/sitemap.xml)\n  --key <value>            IndexNow key (or INDEXNOW_KEY)\n  --key-location <url>     Public key file URL\n  --dry-run                Collect and preview URLs without sending\n  --help                   Show this help\n\nEnvironment overrides:\n  INDEXNOW_HOST, INDEXNOW_SITEMAP_URL, INDEXNOW_KEY,\n  INDEXNOW_KEY_LOCATION, INDEXNOW_DRY_RUN`);
}

function parseArgs(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--help" || argument === "-h") {
      options.help = true;
      continue;
    }
    if (argument === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (argument.startsWith("--")) {
      const [name, inlineValue] = argument.split("=", 2);
      const key = name.slice(2).replaceAll("-", "_");
      const value = inlineValue ?? argv[index + 1];
      if (inlineValue === undefined) index += 1;
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${name}`);
      }
      if (key === "dry_run") {
        options.dryRun = /^(1|true|yes)$/i.test(value);
        continue;
      }
      options[key] = value;
      continue;
    }
    throw new Error(`Unknown argument: ${argument}`);
  }
  return options;
}

function originOf(value, label) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${label} must be an absolute http(s) URL: ${value}`);
  }
  if (!/^https?:$/.test(url.protocol)) {
    throw new Error(`${label} must use http or https: ${value}`);
  }
  return url.origin;
}

function absoluteUrl(value, label) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${label} must be an absolute http(s) URL: ${value}`);
  }
  if (!/^https?:$/.test(url.protocol)) {
    throw new Error(`${label} must use http or https: ${value}`);
  }
  return url.href;
}

async function fetchWithTimeout(url, init = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        "user-agent": "brbn-portfolio-indexnow/1.0",
        ...(init.headers ?? {}),
      },
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`Request timed out after ${REQUEST_TIMEOUT_MS} ms: ${url}`);
    }
    throw new Error(`Request failed for ${url}: ${error.message}`);
  } finally {
    clearTimeout(timeout);
  }
}

function readLocs(xml, sitemapUrl) {
  const locs = [...xml.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/gi)]
    .map((match) => match[1].replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">"))
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => absoluteUrl(value, `Sitemap URL in ${sitemapUrl}`));

  return [...new Set(locs)];
}

function chunks(values, size) {
  const result = [];
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size));
  }
  return result;
}

function validateKey(key) {
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error("IndexNow key must contain 8-128 letters, digits or hyphens and no whitespace");
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const host = originOf(args.host ?? process.env.INDEXNOW_HOST ?? DEFAULT_HOST, "Host");
  const sitemap = absoluteUrl(
    args.sitemap ?? process.env.INDEXNOW_SITEMAP_URL ?? `${host}/sitemap.xml`,
    "Sitemap URL",
  );
  const key = args.key ?? process.env.INDEXNOW_KEY ?? DEFAULT_KEY;
  validateKey(key);
  const keyLocation = absoluteUrl(
    args.key_location ?? process.env.INDEXNOW_KEY_LOCATION ?? `${host}/${key}.txt`,
    "Key location",
  );
  const dryRun = Boolean(args.dryRun) || /^(1|true|yes)$/i.test(process.env.INDEXNOW_DRY_RUN ?? "");

  const sitemapResponse = await fetchWithTimeout(sitemap);
  if (!sitemapResponse.ok) {
    throw new Error(`Sitemap returned HTTP ${sitemapResponse.status} ${sitemapResponse.statusText}: ${sitemap}`);
  }
  const xml = await sitemapResponse.text();
  const urls = readLocs(xml, sitemap);
  if (urls.length === 0) throw new Error(`No <loc> URLs found in sitemap: ${sitemap}`);

  const invalidHosts = urls.filter((url) => new URL(url).origin !== host);
  if (invalidHosts.length > 0) {
    throw new Error(
      `Sitemap contains ${invalidHosts.length} URL(s) outside the configured host ${host}; refusing to submit them`,
    );
  }

  const batches = chunks(urls, MAX_URLS_PER_REQUEST);
  console.log(`IndexNow host: ${host}`);
  console.log(`Sitemap: ${sitemap}`);
  console.log(`Key location: ${keyLocation}`);
  console.log(`Collected ${urls.length} URL(s) in ${batches.length} batch(es)`);
  console.log(`Mode: ${dryRun ? "DRY RUN (no request will be sent)" : "SUBMIT"}`);
  if (dryRun) {
    console.log(`Preview: ${urls.slice(0, 5).join("\n         ")}${urls.length > 5 ? "\n         …" : ""}`);
    return;
  }

  for (const [index, urlList] of batches.entries()) {
    const payload = JSON.stringify({
      host: new URL(host).hostname,
      key,
      keyLocation,
      urlList,
    });
    const response = await fetchWithTimeout(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: payload,
    });
    const responseBody = await response.text();
    if (!response.ok) {
      throw new Error(
        `IndexNow batch ${index + 1}/${batches.length} failed with HTTP ${response.status} ${response.statusText}: ${responseBody.slice(0, 500)}`,
      );
    }
    console.log(`Submitted batch ${index + 1}/${batches.length}: HTTP ${response.status}${responseBody ? ` (${responseBody.slice(0, 200)})` : ""}`);
  }
}

try {
  await main();
} catch (error) {
  console.error(`IndexNow error: ${error.message}`);
  process.exitCode = 1;
}
