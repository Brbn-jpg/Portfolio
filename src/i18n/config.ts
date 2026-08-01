export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Bare language codes, no region — correct for a site that isn't region-targeted. */
export const hreflangOf: Record<Locale, string> = { en: "en", pl: "pl" };
export const ogLocaleOf: Record<Locale, string> = { en: "en_US", pl: "pl_PL" };
export const labelOf: Record<Locale, string> = { en: "EN", pl: "PL" };

export const isLocale = (v: string | undefined): v is Locale =>
  !!v && (locales as readonly string[]).includes(v);
