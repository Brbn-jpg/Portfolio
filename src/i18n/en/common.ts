/**
 * Cross-page chrome: shared back-links, the site footer (`siteFooter.astro`,
 * rendered by the layout on every page), and the language-switcher label
 * (`langSwitcher.astro`, a later phase — the key lives here now so that
 * component has nothing left to invent).
 */
const common = {
  /** Used by the bilingual 404 page — each language block links to its own home. */
  backToHome: "Back to home",

  footer: {
    aboutLabel: "About Me",
    privacyLabel: "Privacy",
    employedStatus: "Employed",
  },

  /** `lang:` prefix before the `[ EN ] | [ PL ]` switcher links. */
  langSwitcherLabel: "lang:",
};

export type CommonDict = typeof common;
export default common;
