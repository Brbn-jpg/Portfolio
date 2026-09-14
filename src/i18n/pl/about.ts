import type { AboutDict, AboutCard } from "../en/about";

const about: AboutDict = {
  backToHome: "Powrót do strony głównej",

  header: {
    title: "O mnie",
    subtitle: "Osoba stojąca za backendem.",
  },

  whoIAm: {
    heading: "Kilka słów kontekstu",
    paragraphs: [
      "Nazywam się Jakub Kuźnicki, jestem inżynierem informatyki i zajmuję się backendem oraz architekturą systemów. Od czerwca 2026 pracuję jako Junior Java Developer w Netcompany.",
      "Wcześniej odbyłem staż backendowy w Paweł Weselak — Pragmatyczne Programowanie (marzec–czerwiec 2025), gdzie budowałem pipeline'y ingestii w LangChain i systemy RAG w LangChain4j oraz Spring Boot. Tę samą ciekawość rozwijam po stronie infrastruktury, korzystając z domowego serwera bare-metal.",
    ] as readonly [string, string],
  },

  focus: {
    heading: "Co buduję",
    items: [
      {
        title: "Systemy backendowe",
        body: "Usługi w Javie i Spring Boot, wraz z decyzjami dotyczącymi danych i wdrożeń potrzebnymi produktowi.",
      },
      {
        title: "Pipeline'y RAG",
        body: "Ingestia dokumentów i odpowiedzi oparte na źródłach z użyciem LangChain4j lub LangChain, od eksperymentów po działające aplikacje.",
      },
      {
        title: "Infrastruktura w praktyce",
        body: "Domowy serwer bare-metal daje mi miejsce do praktycznej nauki sieci, wirtualizacji i dostarczania aplikacji.",
      },
    ] as readonly AboutCard[],
  },

  journey: {
    heading: "Krótka droga",
    entries: [
      {
        title: "2025 · Staż backendowy",
        body: "Pipeline'y ingestii w LangChain, systemy RAG, konteneryzacja i przetwarzanie danych oparte na LLM.",
      },
      {
        title: "2026 · Netcompany",
        body: "Junior Java Developer pracujący nad oprogramowaniem Java klasy enterprise.",
      },
      {
        title: "Teraz · Projekty własne",
        body: "todrawn.com, LlamaTalks i eksperymenty infrastrukturalne przekładają te same pomysły na działające projekty.",
      },
    ] as readonly AboutCard[],
  },

  interests: {
    heading: "Poza edytorem",
    bikeAlt: "Mój rower Romet Mustang",
    cards: {
      ragLlm: {
        title: "RAG & LLM",
        body: "Lubię prowadzić pomysł AI przez ingestę, wyszukiwanie i interfejs, z którego da się korzystać.",
      },
      cycling: {
        title: "Kolarstwo",
        body: 'Mój rower to Romet Mustang M1 CS 19" 29". Jeżdżę w terenie i po asfalcie.',
      },
      gym: {
        title: "Trening siłowy",
        body: "Trening jest dobrą przeciwwagą dla długich godzin przed ekranem.",
      },
    },
  },

  mySetup: {
    heading: "Stanowisko pracy",
    lightboxClose: "Zamknij obraz",
    imageAlts: {
      fullSetup: "Stanowisko z dwoma monitorami, klawiaturą mechaniczną i obudową PC",
      pc: "Obudowa PC NZXT H7 Flow z Ryzen 7 5800X3D i RTX 4070 Super Aorus Master w środku",
      mnk: "Niestandardowa klawiatura mechaniczna z keycapami BoW i myszką Dark Project Nexus",
    },
  },

  gearList: {
    heading: "Sprzęt, jeśli ciekawi",
    summary: "Otwórz listę sprzętu",
    pcHeading: "PC",
    peripheralsHeading: "Peryferia",
    laptopHeading: "Laptop",
    labels: {
      cpu: "CPU",
      ram: "RAM",
      mobo: "MOBO",
      gpu: "GPU",
      ssd1: "SSD 1",
      ssd2: "SSD 2",
      case: "Obudowa",
      cooler: "Chłodzenie",
      keyboard: "Klawiatura",
      mouse: "Mysz",
      monitors: "Monitory",
      microphone: "Mikrofon",
      headphones: "Słuchawki",
    },
  },
};

export default about;
