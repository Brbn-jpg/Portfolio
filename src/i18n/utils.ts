import { defaultLocale, isLocale, type Locale } from "./config";
import en, { type Dict } from "./en/index";
import pl from "./pl/index";

/** Annotated so TypeScript keeps `Dict` instead of widening to a union of shapes. */
const dicts: Record<Locale, Dict> = { en, pl };

export function useTranslations(lang: Locale): Dict {
  return dicts[lang];
}

/**
 * Fallback for contexts with no explicit `lang` prop (the 404 page). Prefer passing
 * `lang` down: it works in components that have no `Astro.url`, and it keeps locale
 * literals confined to the thin route files.
 */
export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/")[1];
  return isLocale(seg) ? seg : defaultLocale;
}
