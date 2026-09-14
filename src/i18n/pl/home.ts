import type { HomeDict } from "../en/home";

const home: HomeDict = {
  statusPill: "STATUS SYSTEMU: BACKEND + RAG",
  whoamiPrompt: "$ whoami",

  tagline: {
    prefix: "//",
    role: "Programista backendu Java i RAG",
    location: "Warszawa, PL",
  },

  heroParagraph: [
    { text: "Buduję " },
    { text: "systemy backendowe", highlight: true },
    { text: " i " },
    { text: "produkty RAG", highlight: true },
    { text: ", dostarczając produkcyjne rozwiązania w Javie i Spring Boot." },
  ],

  heroCtas: {
    projects: "Zobacz projekty",
    contact: "Napisz do mnie",
    about: "O mnie",
  },

  highlights: {
    heading: "Konkrety",
    lead: "Trzy dowody z projektów i doświadczenia opisanych w repozytorium.",
    items: {
      todrawn: {
        label: "01 // DZIAŁAJĄCY PRODUKT",
        title: "todrawn.com",
        body: "todrawn.com łączy Scribe do tworzenia odręcznie rysowanych wideo ze współdzielonymi tablicami; tryb tablic działa na backendzie Java 21 / Spring Boot i frontendzie Next.js.",
      },
      rag: {
        label: "02 // PIPELINE'Y RAG",
        title: "Ingestia dokumentów",
        body: "Podczas stażu backendowego w 2025 roku budowałem pipeline'y ingestii w LangChain i systemy RAG, w tym konteneryzację i wdrażanie przetwarzania opartego na LLM.",
      },
      llama: {
        label: "03 // LOKALNY LLM",
        title: "LlamaTalks",
        body: "Chatbot w Spring Boot i LangChain4j wykorzystujący Ollamę, RAG z dokumentów, trwałą historię rozmów i strumieniowanie odpowiedzi przez SSE.",
      },
    },
  },

  chrome: {
    evidence: "/ dowody",
    openChannel: "/ otwarty kanał",
    caseStudy: "opis projektu",
  },

  sections: {
    professionalExp: {
      heading: "DOŚWIADCZENIE",
      lead: "Backend w Javie enterprise i pipeline'y danych dla LLM.",
    },
    repositories: {
      heading: "WYBRANE PROJEKTY",
      lead: "Zobacz problem, decyzje inżynierskie i rezultat każdego projektu.",
    },
  },

  caseStudy: {
    problem: "Problem",
    role: "Rola",
    decisions: "Decyzje",
    result: "Rezultat",
    readCaseStudy: "Przeczytaj case study",
    viewProject: "Zobacz projekt",
    openDemo: "Otwórz demo",
    viewCode: "Zobacz kod",
    moreProjects: "Więcej projektów na GitHubie",
  },

  contact: {
    heading: "KONTAKT",
    lead: "Masz problem backendowy, AI albo infrastrukturalny do rozwiązania? Napisz.",
  },

  checkGithubForMore: "Więcej na github.com/Brbn-jpg",
};

export default home;
