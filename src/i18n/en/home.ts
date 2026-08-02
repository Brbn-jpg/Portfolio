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
      text: "I'm Jakub Kuźnicki, a software engineer based in Warsaw, Poland, with an Engineer's degree in Computer Science. I build backend systems in ",
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
      lead: "Java is my main language. I use TypeScript/JavaScript and Python regularly, and I know enough C# to find my way around.",
    },
    techArsenal: {
      heading: "TECH_ARSENAL",
      lead: "Day to day I work with Spring Boot, Docker, PostgreSQL and Redis on the backend, and LangChain4j or LangChain when a project needs RAG or LLM integration. On the frontend I reach for Angular, React, Vue or Astro.",
    },
    professionalExp: {
      heading: "PROFESSIONAL_EXP",
      lead: "I have been a Junior Java Developer at Netcompany since June 2026, after a 2025 backend internship spent on LangChain ingestion pipelines and RAG systems.",
    },
    repositories: {
      heading: "REPOSITORIES",
      lead: "Seven projects, mostly Java and Spring Boot backends: a collaborative whiteboard SaaS, a RAG chatbot, a game backlog tracker, a procedural map generator, a recipe manager, and two production Astro sites.",
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
