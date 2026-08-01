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
      text: "Jakub Kuźnicki — inżynier oprogramowania, absolwent informatyki (inżynier), z Warszawy. Buduję systemy backendowe w ",
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
      lead: "Głównym językiem programowania Jakuba Kuźnickiego jest Java, z regularnym wykorzystaniem TypeScript/JavaScript i Pythona oraz podstawową znajomością C#.",
    },
    techArsenal: {
      heading: "TECH_ARSENAL",
      lead: "Zestaw narzędzi Jakuba Kuźnickiego opiera się na Spring Boot, Docker, PostgreSQL i Redis dla systemów backendowych oraz LangChain / LangChain4j dla integracji RAG i LLM, a także doświadczeniu frontendowym w Angular, React, Vue i Astro.",
    },
    professionalExp: {
      heading: "PROFESSIONAL_EXP",
      lead: "Jakub Kuźnicki pracuje jako Junior Programista Java w Netcompany od czerwca 2026, po stażu w backendzie w 2025 skupionym na potokach ingestii LangChain i systemach RAG.",
    },
    repositories: {
      heading: "REPOSITORIES",
      lead: "Jakub Kuźnicki opublikował siedem projektów na GitHubie, obejmujących backendy Java/Spring Boot, systemy RAG i LLM oraz aplikacje full-stack zbudowane w React, Vue, Angular i Astro.",
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
