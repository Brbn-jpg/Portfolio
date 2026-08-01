import type { ProjectsDict } from "../en/projects";

/** Typed against English: a missing key is a build error, never a silent fallback. */
const projects: ProjectsDict = {
  backToProjects: "Wróć do wszystkich projektów",
  languagesLabel: "Języki:",
  technologiesUsed: "Użyte technologie",
  viewOnGithub: "Zobacz na GitHubie",
  demoLabels: {
    live: "Na żywo",
    demo: "Zobacz demo",
  },
  freeHostingWarning: {
    marker: "[UWAGA]",
    text: "Backend tego projektu jest hostowany w usłudze darmowego poziomu. Uruchomienie po pierwszym żądaniu może chwilę potrwać.",
  },
  breadcrumb: {
    home: "Strona główna",
    projects: "Projekty",
  },
};

export default projects;
