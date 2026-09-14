/**
 * Homepage copy. Keep this page focused on evidence: a short proposition,
 * selected proof, experience and project case-study teasers.
 */
export type HeroSegment = { text: string; highlight?: true };

const home = {
  statusPill: "SYSTEM STATUS: BACKEND + RAG",
  whoamiPrompt: "$ whoami",

  tagline: {
    prefix: "//",
    role: "Java Backend & RAG Developer",
    location: "Warsaw, PL",
  },

  heroParagraph: [
    { text: "I build " },
    { text: "backend systems", highlight: true },
    { text: " and " },
    { text: "RAG products", highlight: true },
    { text: ", shipping production work with Java and Spring Boot." },
  ] as readonly HeroSegment[],

  heroCtas: {
    projects: "View projects",
    contact: "Get in touch",
    about: "About me",
  },

  highlights: {
    heading: "Selected proof",
    lead: "Three concrete signals from products and work already in the repo.",
    items: {
      todrawn: {
        label: "01 // LIVE PRODUCT",
        title: "todrawn.com",
        body: "todrawn.com combines Scribe for hand-drawn video creation with collaborative boards; the board mode runs on a Java 21 / Spring Boot backend and a Next.js frontend.",
      },
      rag: {
        label: "02 // RAG PIPELINES",
        title: "Document ingestion",
        body: "Built LangChain ingestion pipelines and RAG systems during a 2025 backend internship, including containerisation and deployment of LLM-driven processing.",
      },
      llama: {
        label: "03 // LOCAL LLM",
        title: "LlamaTalks",
        body: "A Spring Boot and LangChain4j chatbot using Ollama, document-based RAG, persistent chat history and SSE response streaming.",
      },
    },
  },

  chrome: {
    evidence: "/ evidence",
    openChannel: "/ open channel",
    caseStudy: "case study",
  },

  sections: {
    professionalExp: {
      heading: "EXPERIENCE",
      lead: "Backend work across enterprise Java and LLM data pipelines.",
    },
    repositories: {
      heading: "SELECTED PROJECTS",
      lead: "Read the problem, the engineering choices and what each project delivers.",
    },
  },

  caseStudy: {
    problem: "Problem",
    role: "Role",
    decisions: "Decisions",
    result: "Result",
    readCaseStudy: "Read case study",
    viewProject: "View project",
    openDemo: "Open demo",
    viewCode: "View code",
    moreProjects: "More projects on GitHub",
  },

  contact: {
    heading: "CONTACT",
    lead: "Have a backend, AI or infrastructure problem worth solving? Send me a note.",
  },

  checkGithubForMore: "See github.com/Brbn-jpg for more",
};

export type HomeDict = typeof home;
export default home;
