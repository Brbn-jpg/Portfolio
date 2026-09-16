import type { ProjectsDict } from "../en/projects";

/** Typed against English: a missing key is a build error, never a silent fallback. */
const projects: ProjectsDict = {
  index: {
    eyebrow: "Wybrane realizacje",
    title: "Projekty zbudowane wokół realnych problemów",
    intro:
      "Wybór systemów backendowych, eksperymentów z AI i produktów full-stack. Każdy projekt opisuje decyzje, ograniczenia i dowody stojące za implementacją.",
    githubCta: "Zobacz więcej na GitHubie",
    githubDescription: "Przejrzyj publiczne repozytoria i szczegóły implementacji.",
  },
  backToProjects: "Wróć do wszystkich projektów",
  languagesLabel: "Języki:",
  technologiesUsed: "Użyte technologie",
  summary: "Streszczenie",
  verifiedFacts: "Zweryfikowane fakty",
  limitation: "Ograniczenie dowodów",
  verification: "Jak to zweryfikowano",
  published: "Opublikowano",
  updated: "Zaktualizowano",
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
