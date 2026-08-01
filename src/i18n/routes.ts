import { SITE_URL } from "../consts";
import { allProjects } from "../data/projects";
import { defaultLocale, hreflangOf, locales, type Locale } from "./config";

/**
 * The ONLY place URLs are defined.
 *
 * Canonical tags, hreflang alternates, the language switcher and the sitemap all
 * derive from `pathFor()`, so they cannot disagree with each other. Rename a slug
 * here and every one of them follows.
 *
 * EN stays at the root so already-indexed URLs never change; PL lives under /pl
 * with translated slugs.
 */
const PAGE_PATHS = {
  home: { en: "/", pl: "/pl" },
  about: { en: "/about", pl: "/pl/o-mnie" },
  privacy: { en: "/privacy", pl: "/pl/prywatnosc" },
  notFound: { en: "/404", pl: "/pl/404" },
} as const satisfies Record<string, Record<Locale, string>>;

/**
 * Project slugs are deliberately identical in both locales. Translating one would
 * 404 a URL that may already be indexed, and we committed to zero redirects.
 */
const PROJECT_BASE = { en: "/projects/", pl: "/pl/projekty/" } as const;

export type PageKey = keyof typeof PAGE_PATHS;

/**
 * A discriminated union rather than a string→string translator: reverse-parsing a
 * pathname to find its counterpart degrades silently when it fails to match, while
 * a `Route` is a value the page already knows about itself.
 */
export type Route = { page: PageKey } | { page: "project"; project: { slug: string } };

export function pathFor(route: Route, lang: Locale): string {
  return route.page === "project"
    ? PROJECT_BASE[lang] + route.project.slug
    : PAGE_PATHS[route.page][lang];
}

/** Absolute URL with trailing slashes stripped, matching `trailingSlash: "never"`. */
export const absUrl = (path: string): string =>
  new URL(path.replace(/\/+$/, "") || "/", SITE_URL).href;

/** Self-referencing, reciprocal, absolute — plus one x-default pointing at EN. */
export function alternatesFor(route: Route): { hreflang: string; href: string }[] {
  return [
    ...locales.map((l) => ({ hreflang: hreflangOf[l], href: absUrl(pathFor(route, l)) })),
    { hreflang: "x-default", href: absUrl(pathFor(route, defaultLocale)) },
  ];
}

/**
 * Everything indexable. `notFound` is never included.
 */
export function sitemapRoutes(): Route[] {
  return [
    { page: "home" },
    { page: "about" },
    { page: "privacy" },
    ...allProjects.map((project) => ({ page: "project", project }) as const),
  ];
}
