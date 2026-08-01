/**
 * Chrome around `/projects/[slug]`: labels, the free-hosting notice, and the
 * two breadcrumb rung names used in that page's JSON-LD `BreadcrumbList`.
 * Project content itself (name, description, technologies) lives in
 * `src/data/projects.ts` — this dictionary only owns the surrounding chrome.
 */
const projects = {
  backToProjects: "Back to all projects",
  languagesLabel: "Language(s):",
  technologiesUsed: "Technologies Used",
  viewOnGithub: "View on GitHub",
  /** Resolves `Project.links.demoLabel` (a key, not a raw string) to a display label. */
  demoLabels: {
    live: "Live",
    demo: "Live Demo",
  },
  freeHostingWarning: {
    marker: "[ATTENTION]",
    text: "The backend for this project is hosted on a free-tier service. It may take a moment to wake up after the first request.",
  },
  breadcrumb: {
    home: "Home",
    projects: "Projects",
  },
};

export type ProjectsDict = typeof projects;
export default projects;
