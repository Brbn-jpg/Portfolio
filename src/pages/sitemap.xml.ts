import { locales } from "../i18n/config";
import { absUrl, alternatesFor, pathFor, sitemapRoutes } from "../i18n/routes";

/**
 * Hand-written rather than @astrojs/sitemap: that integration pairs locales by
 * stripping the /pl prefix and matching the remaining path, which can never pair
 * /about with /pl/o-mnie. The route table already knows the pairs exactly.
 *
 * Static endpoints are prerendered in `output: "static"`, so this emits
 * dist/sitemap.xml with no adapter.
 */
const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET = () => {
  const urls = sitemapRoutes().flatMap((route) => {
    const alternates = alternatesFor(route)
      .map(
        (a) =>
          `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${escape(a.href)}"/>`,
      )
      .join("\n");

    return locales.map(
      (lang) =>
        `  <url>\n    <loc>${escape(absUrl(pathFor(route, lang)))}</loc>\n${alternates}\n  </url>`,
    );
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
