import type { Locale } from "../i18n/config";

type Localized<T> = Record<Locale, T>;

/**
 * Moved out of `index.astro`'s frontmatter so the home page component stays a
 * view over data, not the place facts about a career live.
 */
export interface ExperienceEntry {
  role: Localized<string>;
  /** Employer name — a proper noun, never translated. */
  company: string;
  period: Localized<string>;
  description: Localized<string>;
}

export const experience: readonly ExperienceEntry[] = [
  {
    role: {
      en: "Junior Java Developer",
      pl: "Junior Programista Java",
    },
    company: "Netcompany",
    period: {
      en: "Jun 2026 — Present",
      pl: "cze 2026 — obecnie",
    },
    description: {
      en: "Developing enterprise-level solutions and delivering high-quality software in a professional consulting environment.",
      pl: "Tworzę rozwiązania klasy enterprise i dostarczam wysokiej jakości oprogramowanie w profesjonalnym środowisku konsultingowym.",
    },
  },
  {
    role: {
      en: "Backend Developer Intern",
      pl: "Praktykant Backend Developer",
    },
    company: "Paweł Weselak Pragmatyczne Programowanie",
    period: {
      en: "Mar 2025 — Jun 2025",
      pl: "mar 2025 — cze 2025",
    },
    description: {
      en: "Built LangChain-based ingestion pipelines and implemented RAG systems using LangChain4j & Spring Boot. Managed containerization and deployed LLM-driven data processing solutions.",
      pl: "Budowałem potoki ingestii oparte na LangChain i wdrażałem systemy RAG przy użyciu LangChain4j i Spring Boot. Zajmowałem się konteneryzacją i wdrażaniem rozwiązań przetwarzania danych opartych na LLM.",
    },
  },
];

/** Resolves `role`/`period`/`description` to plain strings for a given locale. */
export function localizeExperience(
  lang: Locale
): ReadonlyArray<{ role: string; company: string; period: string; description: string }> {
  return experience.map((e) => ({
    role: e.role[lang],
    company: e.company,
    period: e.period[lang],
    description: e.description[lang],
  }));
}

/**
 * Proficiency key, resolved to a display label through the home page's own
 * dictionary (`t.home`, not owned by this file) — kept here only as a typed
 * literal so a missing case is a compile error, not a silent fallback.
 */
export type LanguageLevel = "FOCUS" | "REGULAR" | "BASIC";

export interface LanguageEntry {
  /** Language name — a proper noun, never translated. */
  name: string;
  level: LanguageLevel;
}

export const languages: readonly LanguageEntry[] = [
  { name: "Java", level: "FOCUS" },
  { name: "TypeScript / JS", level: "REGULAR" },
  { name: "Python", level: "REGULAR" },
  { name: "C#", level: "BASIC" },
];

/** Technology names — proper nouns, never translated. */
export const technologies: readonly string[] = [
  "Spring Boot",
  "Docker",
  "Git",
  "PostgreSQL",
  "Redis",
  "LangChain",
  "LangChain4j",
  "RAG Systems",
  "LLM Integration",
  "Angular",
  "React",
  "Vue",
  "Astro",
];
