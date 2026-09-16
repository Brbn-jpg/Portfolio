#!/usr/bin/env node

import { randomUUID } from "node:crypto";

const DEFAULT_BASE_URL = "https://www.brbn.pl";
const REQUEST_TIMEOUT_MS = 20_000;
const MAX_SITEMAP_URLS = 250;
const CONCURRENCY = 6;

function help() {
  console.log(`Production SEO smoke-check\n\nUsage:\n  npm run seo:verify -- [options]\n\nOptions:\n  --base <url>       URL to inspect (default: ${DEFAULT_BASE_URL})\n  --canonical <url>  Expected canonical origin (default: inferred from --base)\n  --help             Show this help\n\nEnvironment overrides: SEO_BASE_URL, SEO_CANONICAL_URL`);
}

function parseArgs(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--help" || argument === "-h") {
      options.help = true;
      continue;
    }
    if (!argument.startsWith("--")) throw new Error(`Unknown argument: ${argument}`);
    const [name, inlineValue] = argument.split("=", 2);
    const key = name.slice(2).replaceAll("-", "_");
    const value = inlineValue ?? argv[index + 1];
    if (inlineValue === undefined) index += 1;
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${name}`);
    options[key] = value;
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
  if (!/^https?:$/.test(url.protocol)) throw new Error(`${label} must use http or https: ${value}`);
  return url.origin;
}

function hrefFrom(value, label) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${label} must be an absolute http(s) URL: ${value}`);
  }
  if (!/^https?:$/.test(url.protocol)) throw new Error(`${label} must use http or https: ${value}`);
  return url.href;
}

function inferredCanonical(base) {
  const url = new URL(base);
  if (url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "[::1]") return base;
  if (url.hostname.startsWith("www.")) return base;
  return `${url.protocol}//www.${url.hostname}`;
}

async function request(url, init = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, {
      redirect: "manual",
      ...init,
      signal: controller.signal,
      headers: {
        "user-agent": "brbn-portfolio-seo-smoke-check/1.0",
        ...(init.headers ?? {}),
      },
    });
  } catch (error) {
    if (error?.name === "AbortError") throw new Error(`Request timed out after ${REQUEST_TIMEOUT_MS} ms`);
    throw new Error(error.message);
  } finally {
    clearTimeout(timeout);
  }
}

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function sitemapLocs(xml) {
  return [...xml.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/gi)]
    .map((match) => decodeXml(match[1].trim()))
    .filter(Boolean)
    .map((url) => hrefFrom(url, "Sitemap <loc>"));
}

function tagAttributes(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>`, "gi");
  return [...html.matchAll(pattern)].map((match) => {
    const attrs = {};
    for (const attribute of match[0].matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)) {
      attrs[attribute[1].toLowerCase()] = attribute[2].trim();
    }
    return attrs;
  });
}

function destinationOf(location, source) {
  try {
    return new URL(location, source).href;
  } catch {
    return location;
  }
}

function canonicalRoot(canonical) {
  return `${canonical}/`;
}

function isCanonicalRoot(value, canonical) {
  try {
    const destination = new URL(value);
    const expected = new URL(canonicalRoot(canonical));
    return destination.href === expected.href;
  } catch {
    return false;
  }
}

function alternateOrigin(canonical) {
  const url = new URL(canonical);
  if (url.hostname.startsWith("www.")) {
    return `${url.protocol}//${url.hostname.slice(4)}`;
  }
  if (!url.hostname.includes(".") || url.hostname === "localhost") return null;
  return `${url.protocol}//www.${url.hostname}`;
}

const checks = [];

function check(status, name, detail) {
  checks.push({ status, name, detail });
  const prefix = status === "PASS" ? "✓" : status === "WARN" ? "!" : "✗";
  console.log(`${prefix} ${name}: ${detail}`);
}

async function checkRootAndRedirect(base, canonical) {
  const baseResponse = await request(`${base}/`);
  const location = baseResponse.headers.get("location");
  const baseIsCanonical = new URL(base).origin === new URL(canonical).origin;

  if (baseIsCanonical && baseResponse.status >= 200 && baseResponse.status < 300) {
    check("PASS", "Canonical host response", `HTTP ${baseResponse.status} ${base}/`);
  } else if (!baseIsCanonical && location) {
    const destination = destinationOf(location, `${base}/`);
    const targetResponse = isCanonicalRoot(destination, canonical)
      ? await request(destination)
      : null;
    if (baseResponse.status === 308 && isCanonicalRoot(destination, canonical) && targetResponse?.status >= 200 && targetResponse.status < 300) {
      check("PASS", "Host redirect", `${base}/ → ${destination} (HTTP 308, one hop)`);
    } else {
      const targetStatus = targetResponse ? `; canonical root returned HTTP ${targetResponse.status}` : "";
      check("FAIL", "Host redirect", `${base}/ must return HTTP 308 directly to ${canonicalRoot(canonical)}${targetStatus}`);
    }
  } else {
    check("FAIL", "Host redirect", `${base}/ returned HTTP ${baseResponse.status}; expected canonical ${canonical}`);
  }

  const alternate = alternateOrigin(canonical);
  if (!alternate || alternate === new URL(base).origin) return;
  const alternateResponse = await request(`${alternate}/`);
  const alternateLocation = alternateResponse.headers.get("location");
  if (alternateLocation) {
    const destination = destinationOf(alternateLocation, `${alternate}/`);
    const targetResponse = isCanonicalRoot(destination, canonical)
      ? await request(destination)
      : null;
    if (alternateResponse.status === 308 && isCanonicalRoot(destination, canonical) && targetResponse?.status >= 200 && targetResponse.status < 300) {
      check("PASS", "Apex/www redirect", `${alternate}/ → ${destination} (HTTP 308, one hop)`);
      return;
    }
  }
  check("FAIL", "Apex/www redirect", `${alternate}/ must return HTTP 308 directly to ${canonicalRoot(canonical)}`);
}

async function checkSitemapAndPages(canonical) {
  const sitemapUrl = `${canonical}/sitemap.xml`;
  const response = await request(sitemapUrl);
  if (!response.ok) {
    check("FAIL", "Sitemap endpoint", `${sitemapUrl} returned HTTP ${response.status}`);
    return;
  }
  const xml = await response.text();
  let urls;
  try {
    urls = sitemapLocs(xml);
  } catch (error) {
    check("FAIL", "Sitemap XML", error.message);
    return;
  }
  if (urls.length === 0) {
    check("FAIL", "Sitemap URLs", "No <loc> entries found");
    return;
  }
  if (urls.length > MAX_SITEMAP_URLS) {
    check("WARN", "Sitemap size", `${urls.length} URLs found; checking the first ${MAX_SITEMAP_URLS}`);
    urls = urls.slice(0, MAX_SITEMAP_URLS);
  } else {
    check("PASS", "Sitemap endpoint", `${sitemapUrl} returned HTTP ${response.status} with ${urls.length} URL(s)`);
  }

  const wrongHost = urls.filter((url) => new URL(url).origin !== new URL(canonical).origin);
  if (wrongHost.length > 0) {
    check("FAIL", "Sitemap canonical host", `${wrongHost.length} URL(s) do not use ${canonical}`);
  } else {
    check("PASS", "Sitemap canonical host", `All ${urls.length} URL(s) use ${canonical}`);
  }

  let nextIndex = 0;
  let pageFailures = 0;
  let metadataFailures = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    while (nextIndex < urls.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      const url = urls[currentIndex];
      try {
        const page = await request(url);
        if (!(page.status >= 200 && page.status < 300)) {
          pageFailures += 1;
          continue;
        }
        const body = await page.text();
        const contentType = page.headers.get("content-type") ?? "";
        if (!contentType.includes("text/html") && !/<html\b/i.test(body)) continue;

        const canonicalTags = tagAttributes(body, "link").filter((attrs) => attrs.rel?.toLowerCase() === "canonical");
        const alternates = tagAttributes(body, "link").filter((attrs) => attrs.rel?.toLowerCase() === "alternate" && attrs.hreflang);
        const badCanonical = canonicalTags.length !== 1 || !canonicalTags[0].href;
        const badCanonicalHost = !badCanonical && new URL(destinationOf(canonicalTags[0].href, url)).origin !== new URL(canonical).origin;
        const badAlternateHost = alternates.some((attrs) => {
          try {
            return new URL(destinationOf(attrs.href, url)).origin !== new URL(canonical).origin;
          } catch {
            return true;
          }
        });
        if (badCanonical || badCanonicalHost || badAlternateHost) metadataFailures += 1;
      } catch {
        pageFailures += 1;
      }
    }
  });
  await Promise.all(workers);

  if (pageFailures === 0) check("PASS", "Sitemap URL status", `All ${urls.length} sitemap URL(s) returned 2xx`);
  else check("FAIL", "Sitemap URL status", `${pageFailures}/${urls.length} sitemap URL(s) failed or returned a non-2xx status`);
  if (metadataFailures > 0) {
    check("FAIL", "Canonical and hreflang hosts", `${metadataFailures}/${urls.length} page(s) have missing, duplicate or off-host metadata`);
  } else if (pageFailures > 0) {
    check("FAIL", "Canonical and hreflang hosts", `Could not inspect metadata because ${pageFailures}/${urls.length} sitemap URL(s) were unavailable`);
  } else {
    check("PASS", "Canonical and hreflang hosts", `Checked HTML metadata on ${urls.length} sitemap URL(s)`);
  }
}

async function checkTextEndpoints(canonical) {
  for (const [name, path] of [["robots.txt", "/robots.txt"], ["llms.txt", "/llms.txt"]]) {
    const url = `${canonical}${path}`;
    try {
      const response = await request(url);
      const body = await response.text();
      if (!response.ok || body.trim().length === 0) {
        check("FAIL", name, `${url} returned HTTP ${response.status} or an empty body`);
      } else if (name === "robots.txt" && !body.toLowerCase().includes(`${canonical}/sitemap.xml`.toLowerCase())) {
        check("FAIL", name, `Sitemap directive does not point to ${canonical}/sitemap.xml`);
      } else {
        check("PASS", name, `${url} returned HTTP ${response.status}`);
      }
    } catch (error) {
      check("FAIL", name, `${url}: ${error.message}`);
    }
  }
}

async function checkCvRobotsHeaders(canonical) {
  for (const path of ["/cv/cv_eng.pdf", "/cv/cv_pl.pdf"]) {
    const url = `${canonical}${path}`;
    try {
      const response = await request(url);
      const robots = response.headers.get("x-robots-tag") ?? "";
      if (!(response.status >= 200 && response.status < 300)) {
        check("FAIL", `X-Robots-Tag ${path}`, `${url} returned HTTP ${response.status}; expected a 2xx response with noindex`);
      } else if (!/\bnoindex\b/i.test(robots)) {
        check("FAIL", `X-Robots-Tag ${path}`, `${url} is missing noindex (received: ${robots || "<none>"})`);
      } else {
        check("PASS", `X-Robots-Tag ${path}`, `HTTP ${response.status}; ${robots}`);
      }
    } catch (error) {
      check("FAIL", `X-Robots-Tag ${path}`, `${url}: ${error.message}`);
    }
  }
}

async function checkMissingPath(canonical) {
  const url = `${canonical}/__seo-smoke-check-${randomUUID()}`;
  try {
    const response = await request(url);
    if (response.status === 404) {
      check("PASS", "Missing path", `${url} returned HTTP 404`);
    } else {
      check("FAIL", "Missing path", `${url} returned HTTP ${response.status}; expected HTTP 404`);
    }
  } catch (error) {
    check("FAIL", "Missing path", `${url}: ${error.message}`);
  }
}

async function checkSecurityHeaders(canonical) {
  const response = await request(`${canonical}/`);
  const headers = [
    ["strict-transport-security", "HSTS"],
    ["x-content-type-options", "X-Content-Type-Options"],
    ["referrer-policy", "Referrer-Policy"],
    ["content-security-policy", "Content-Security-Policy"],
    ["permissions-policy", "Permissions-Policy"],
  ];
  for (const [header, label] of headers) {
    const value = response.headers.get(header);
    if (!value && label !== "HSTS") {
      check("FAIL", label, "Header is missing from the canonical homepage response");
    } else if (!value) {
      check("WARN", label, "Header is missing from the canonical homepage response");
    } else if (label === "Content-Security-Policy" && !/(?:^|;)\s*frame-ancestors\s+'none'(?:\s*;|$)/i.test(value)) {
      check("FAIL", label, "Header must contain frame-ancestors 'none'");
    } else {
      check("PASS", label, value);
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    help();
    return;
  }
  const base = originOf(args.base ?? process.env.SEO_BASE_URL ?? DEFAULT_BASE_URL, "Base URL");
  const canonical = originOf(
    args.canonical ?? process.env.SEO_CANONICAL_URL ?? inferredCanonical(base),
    "Canonical URL",
  );
  console.log(`SEO smoke-check: ${base}`);
  console.log(`Expected canonical origin: ${canonical}`);
  console.log("");

  try {
    await checkRootAndRedirect(base, canonical);
  } catch (error) {
    check("FAIL", "Host redirect", error.message);
  }
  try {
    await checkSitemapAndPages(canonical);
  } catch (error) {
    check("FAIL", "Sitemap and page metadata", error.message);
  }
  await checkTextEndpoints(canonical);
  await checkCvRobotsHeaders(canonical);
  await checkMissingPath(canonical);
  try {
    await checkSecurityHeaders(canonical);
  } catch (error) {
    check("FAIL", "Security headers", error.message);
  }

  const failures = checks.filter((item) => item.status === "FAIL").length;
  const warnings = checks.filter((item) => item.status === "WARN").length;
  console.log(`\nResult: ${failures === 0 ? "PASS" : "FAIL"} (${checks.length - failures - warnings} pass, ${warnings} warning(s), ${failures} failure(s))`);
  if (failures > 0) process.exitCode = 1;
}

try {
  await main();
} catch (error) {
  console.error(`SEO smoke-check error: ${error.message}`);
  process.exitCode = 1;
}
