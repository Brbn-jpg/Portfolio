/**
 * Single source of truth for facts about the site and the person.
 *
 * Read by <head> meta tags, JSON-LD, the `cat identity.json` block and llms.txt,
 * so those can never drift apart. If a fact changes, it changes here only.
 */

export const SITE_URL = "https://brbn.pl";
export const SITE_NAME = "brbn.pl";

export const DEFAULT_OG_IMAGE = "/og/brbn-pl.png";
export const DEFAULT_OG_IMAGE_ALT =
  "Terminal-style card: Jakub Kuznicki (brbn-jpg), Java backend and RAG developer, Warsaw";

export const PERSON = {
  name: "Jakub Kuźnicki",
  /** Diacritic-free and handle variants — how people actually search. */
  alternateName: ["Jakub Kuznicki", "brbn-jpg", "Brbn-jpg"],
  handle: "brbn-jpg",
  jobTitle: {
    en: "Java Backend Developer",
    pl: "Programista Java (backend)",
  },
  employer: {
    name: "Netcompany",
    url: "https://www.netcompany.com/",
    since: "2026-06",
  },
  city: { en: "Warsaw", pl: "Warszawa" },
  region: "Masovian Voivodeship",
  country: "PL",
  degree: {
    en: "B.Eng. in Computer Science",
    pl: "inżynier informatyki",
  },
  github: "https://github.com/Brbn-jpg",
  /**
   * Percent-encoded on purpose: a raw `ź` in a URL is invalid per RFC 3986 and
   * some JSON-LD validators reject it. Browsers accept both.
   */
  linkedin: "https://www.linkedin.com/in/jakub-ku%C5%BAnicki-5383972bb",
  contactEmail: "kubon.kuznicki@gmail.com",
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Python",
    "TypeScript",
    "Retrieval-Augmented Generation",
    "LangChain4j",
    "LangChain",
    "Large language model integration",
    "PostgreSQL",
    "Redis",
    "Docker",
    "REST API design",
    "Backend architecture",
  ],
  // TODO: exact institution name + URL, then emit an `alumniOf` node in the
  // JSON-LD graph. Omitted rather than guessed — a wrong claim is worse than none.
  alumniOf: null,
} as const;

/**
 * Rows for the `$ cat identity.json` block on the homepage.
 *
 * A function of the locale, not a constant: the JSON *keys* stay English
 * (they read as field names, like the surrounding shell transcript), but the
 * values that are prose must follow the page language. Names, company names,
 * dates and technology names never translate.
 *
 * Sourced from PERSON so this block and the JSON-LD Person node cannot drift.
 */
export const identityFor = (
  lang: "en" | "pl",
): ReadonlyArray<{ key: string; value: string | readonly string[] }> => [
  { key: "name", value: PERSON.name },
  { key: "handle", value: PERSON.handle },
  { key: "role", value: PERSON.jobTitle[lang] },
  { key: "employer", value: PERSON.employer.name },
  { key: "since", value: PERSON.employer.since },
  { key: "location", value: lang === "pl" ? "Warszawa, Polska" : "Warsaw, Poland" },
  { key: "education", value: PERSON.degree[lang] },
  { key: "core", value: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"] },
  {
    key: "focus",
    value:
      lang === "pl"
        ? ["potoki RAG", "integracja z LLM", "architektura backendu"]
        : ["RAG pipelines", "LLM integration", "backend architecture"],
  },
  { key: "also", value: ["Python", "TypeScript", "Astro", "React"] },
  {
    key: "languages",
    value:
      lang === "pl"
        ? ["polski (ojczysty)", "angielski (zawodowy)"]
        : ["Polish (native)", "English (professional)"],
  },
  {
    key: "open_to",
    value: lang === "pl" ? "role backendowe / AI engineering" : "backend / AI engineering roles",
  },
];
