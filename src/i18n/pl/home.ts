import type { HomeDict } from "../en/home";

/**
 * Typed against English: a missing key is a build error, never a silent fallback.
 *
 * Left untranslated on purpose (see `en/home.ts`): the four SNAKE_CASE section
 * headings, the `FOCUS`/`REGULAR`/`BASIC` tokens, `$ whoami`, technology and
 * company proper nouns, and `github.com/Brbn-jpg`. ` ` (non-breaking space)
 * follows single-letter Polish words (w, i, z) in short lines.
 */
const home: HomeDict = {
  statusPill: "STATUS SYSTEMU: PRACUJĘ I BUDUJĘ PROJEKTY HOBBYSTYCZNE",
  whoamiPrompt: "$ whoami",

  tagline: {
    prefix: "// czyli",
    role: "Programista Backend Java i RAG",
    location: "Warszawa, PL",
  },

  heroParagraph: [
    {
      text: "Nazywam się Jakub Kuźnicki, jestem inżynierem oprogramowania z Warszawy. Buduję systemy backendowe w ",
    },
    { text: "Javie", highlight: true },
    { text: " i " },
    { text: "Pythonie", highlight: true },
    { text: ", oraz projektuję architektury " },
    { text: "RAG / LLM", highlight: true },
    { text: " przy użyciu LangChain4j i LangChain. Obecnie pracuję jako " },
    { text: "Junior Programista Java w Netcompany", highlight: true },
    { text: ", a w wolnym czasie rozwijam projekty poboczne na własnym serwerze domowym." },
  ],

  moreAboutMe: "Więcej o mnie",

  sections: {
    coreLangs: {
      heading: "CORE_LANGS",
      lead: "Java to mój główny język. Regularnie używam TypeScriptu/JavaScriptu i Pythona, a w C# radzę sobie na tyle, żeby się odnaleźć.",
    },
    techArsenal: {
      heading: "TECH_ARSENAL",
      lead: "Na co dzień pracuję na Spring Boot, Dockerze, PostgreSQL i Redisie, a gdy projekt potrzebuje RAG-a albo integracji z LLM — na LangChain4j lub LangChain. Po stronie frontendu sięgam po Angulara, Reacta, Vue albo Astro.",
    },
    professionalExp: {
      heading: "PROFESSIONAL_EXP",
      lead: "Od czerwca 2026 pracuję jako Junior Java Developer w Netcompany, po stażu backendowym w 2025 poświęconym pipeline'om ingestii na LangChain i systemom RAG.",
    },
    repositories: {
      heading: "REPOSITORIES",
      lead: "Siedem projektów, w większości backendy w Javie i Spring Boot: współdzielona tablica SaaS, chatbot RAG, tracker backlogu gier, proceduralny generator map, menedżer przepisów i dwie produkcyjne strony w Astro.",
    },
  },

  recentActivity: "Ostatnia aktywność",
  couldNotFetchActivity: "Nie udało się pobrać ostatniej aktywności.",

  levelLabels: {
    FOCUS: "FOCUS",
    REGULAR: "REGULAR",
    BASIC: "BASIC",
  },

  agoSuffix: "temu",

  checkGithubForMore: "Sprawdź github.com/Brbn-jpg, żeby zobaczyć więcej",
};

export default home;
