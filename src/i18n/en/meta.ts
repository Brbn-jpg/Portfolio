/**
 * Per-page <title> and <meta description>.
 *
 * Titles stay ≤60 chars and descriptions 140–155 — the ranges that survive SERP
 * truncation. Every page carries its own; the layout deliberately offers no
 * fallback, which is exactly what let all ten pages ship an identical
 * description before.
 */
const meta = {
    home: {
      title: "Jakub Kuźnicki (brbn-jpg) — Java & RAG Backend Developer",
      description:
        "Jakub Kuźnicki (brbn-jpg) is a Java backend developer in Warsaw, Poland, building Spring Boot services and RAG/LLM systems. Projects, CV and contact.",
    },
    projects: {
      title: "Projects by Jakub Kuźnicki — Java & RAG portfolio",
      description:
        "Explore Jakub Kuźnicki's Java backend and RAG portfolio: todrawn.com, LlamaTalks, Gamelog, MapGenerator and other systems built with Spring Boot.",
    },
    about: {
      title: "About Jakub Kuźnicki — CS Engineer, Java & RAG Developer",
      description:
        "How Jakub Kuźnicki works: backend engineering, RAG projects, a short career path and the tools behind the work.",
    },
    privacy: {
      title: "Privacy Policy — brbn.pl",
      description:
        "What data brbn.pl collects (only what you type into the contact form), who processes it, how long it is kept, and your GDPR rights. No cookies, no analytics.",
    },
    notFound: {
      title: "404 — Not Found | brbn.pl",
      description: "That path does not exist on brbn.pl.",
    },
};

export type MetaDict = typeof meta;
export default meta;
