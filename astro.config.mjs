// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://brbn.pl",
  // Vercel strips trailing slashes; matching that keeps canonical, hreflang, OG
  // and sitemap URLs identical to what is actually served (no redirect hops).
  trailingSlash: "never",
  integrations: [react(), tailwind()],
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "en",
    // EN keeps the root so existing indexed URLs never move.
    routing: { prefixDefaultLocale: false },
    // Deliberately NO `fallback`: it would generate /pl/about next to our
    // translated /pl/o-mnie — duplicate content plus broken hreflang reciprocity.
    // Slug translation lives in src/i18n/routes.ts; Astro cannot do it.
  },
});
