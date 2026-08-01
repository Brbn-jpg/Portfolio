/**
 * Dictionary for `/` (`src/components/pages/homePage.astro`).
 *
 * The four SNAKE_CASE section headings (`CORE_LANGS`, `TECH_ARSENAL`,
 * `PROFESSIONAL_EXP`, `REPOSITORIES`) and the `FOCUS` / `REGULAR` / `BASIC`
 * proficiency tokens stay identical in both locales on purpose — they render
 * as terminal-style labels (`[ FOCUS ]`) and are part of the site's visual
 * signature, not prose. Same reasoning for `$ whoami`: a real shell command
 * name has no Polish equivalent, exactly like `find` / `-name` on the 404
 * page — it's code, not a sentence.
 *
 * `heroParagraph` is an ordered list of segments rather than one string so the
 * inline green/bold emphasis (`Java`, `Python`, `RAG / LLM`, the job title)
 * survives translation even though Polish reorders the sentence around them.
 */

export type HeroSegment = { text: string; highlight?: true };

const home = {
  statusPill: "SYSTEM STATUS: WORKING & BUILDING HOBBY PROJECTS",
  whoamiPrompt: "$ whoami",

  tagline: {
    prefix: "// aka",
    role: "Java Backend & RAG Developer",
    location: "Warsaw, PL",
  },

  heroParagraph: [
    {
      text: "Jakub Kuźnicki — Software Engineer, Computer Science graduate (Engineer's degree), based in Warsaw, Poland. I build backend systems in ",
    },
    { text: "Java", highlight: true },
    { text: " and " },
    { text: "Python", highlight: true },
    { text: ", and design " },
    { text: "RAG / LLM", highlight: true },
    { text: " architectures with LangChain4j and LangChain. Currently " },
    { text: "Junior Java Developer at Netcompany", highlight: true },
    { text: ", and running side projects on home-server infrastructure in my own time." },
  ] as readonly HeroSegment[],

  moreAboutMe: "More about me",

  sections: {
    coreLangs: {
      heading: "CORE_LANGS",
      lead: "Jakub Kuźnicki's primary programming language is Java, with regular use of TypeScript/JavaScript and Python, and basic working knowledge of C#.",
    },
    techArsenal: {
      heading: "TECH_ARSENAL",
      lead: "Jakub Kuźnicki's toolset centers on Spring Boot, Docker, PostgreSQL, and Redis for backend systems, and LangChain / LangChain4j for RAG and LLM integration, alongside frontend experience with Angular, React, Vue, and Astro.",
    },
    professionalExp: {
      heading: "PROFESSIONAL_EXP",
      lead: "Jakub Kuźnicki has worked as a Junior Java Developer at Netcompany since June 2026, following a backend internship in 2025 focused on LangChain ingestion pipelines and RAG systems.",
    },
    repositories: {
      heading: "REPOSITORIES",
      lead: "Jakub Kuźnicki has published seven software projects on GitHub, spanning Java/Spring Boot backends, RAG and LLM systems, and full-stack web applications built with React, Vue, Angular, and Astro.",
    },
  },

  recentActivity: "Recent Activity",
  couldNotFetchActivity: "Could not fetch recent activity.",

  /** Values kept English on purpose — rendered as `[ FOCUS ]` terminal tokens. */
  levelLabels: {
    FOCUS: "FOCUS",
    REGULAR: "REGULAR",
    BASIC: "BASIC",
  },

  /** Compact relative-time suffix: `"3d ago"` / `"3d temu"`. Unit letters (s/m/h/d) are never translated. */
  agoSuffix: "ago",

  checkGithubForMore: "Check github.com/Brbn-jpg for more",
};

export type HomeDict = typeof home;
export default home;
