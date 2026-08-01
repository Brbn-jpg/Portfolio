import type { AboutDict } from "../en/about";

/**
 * Typed against English: a missing key is a build error, never a silent fallback.
 *
 * Left untranslated on purpose: technology/company names (Netcompany, Paweł
 * Weselak — Pragmatyczne Programowanie, Java, Spring Boot, LangChain4j, RAG,
 * DevOps, Full-Stack, Redis, LangChain, WebSockets, Stripe …), hardware model
 * names, `brbn-jpg`, and `Jakub Kuźnicki`. ` ` (non-breaking space) is used
 * after single-letter Polish words (w, i, z, o, a) in headings/short lines.
 */
const about: AboutDict = {
  backToHome: "Powrót do strony głównej",

  header: {
    title: "O mnie",
    subtitle: "Kilka słów o mojej drodze zawodowej, zainteresowaniach i sprzęcie, którego używam.",
  },

  whoIAm: {
    heading: "Kim jestem",
    paragraphs: [
      "Nazywam się Jakub Kuźnicki, jestem inżynierem informatyki i zajmuję się backendem oraz architekturą systemów. Od czerwca 2026 pracuję jako Junior Java Developer w Netcompany, gdzie buduję systemy klasy enterprise w Javie i Spring Boot.",
      "Wcześniej, od marca do czerwca 2025, odbyłem staż jako Backend Developer w Paweł Weselak — Pragmatyczne Programowanie. Budowałem tam pipeline'y do ingestii dokumentów na LangChain i systemy RAG w LangChain4j i Spring Boot, zajmowałem się też konteneryzacją i wdrożeniami rozwiązań opartych na LLM.",
      "Teraz rozwijam się w stronę DevOpsu i infrastruktury. Postawiłem w domu serwer bare-metal i uczę się na nim sieci oraz wirtualizacji w praktyce.",
    ] as readonly [string, string, string],
  },

  interests: {
    heading: "Moje zainteresowania",
    bikeAlt: "Mój rower Romet Mustang",
    cards: {
      techHardware: {
        title: "Technologia i sprzęt",
        body: "Uwielbiam składać komputery i pasjonuję się specyfikacjami sprzętowymi, zwłaszcza kartami graficznymi (GPU). Zawsze śledzę najnowsze wiadomości i innowacje technologiczne.",
      },
      ragLlm: {
        title: "RAG & LLM",
        body: "Lubię budować systemy ekstrakcji danych oparte na modelach AI. Pracowałem głównie z LangChain4j i LangChain, gdzie zbudowałem kompletny potok wczytywania danych.",
      },
      cycling: {
        title: "Kolarstwo",
        body: 'Mój rower: Romet Mustang M1 CS 19" 29". Lubię jeździć zarówno w terenie, jak i po asfalcie.',
      },
      gym: {
        title: "Siłownia",
        body: "Niedawno zacząłem swoją przygodę z treningiem siłowym. Uważam, że dyscyplina wymagana na siłowni świetnie uzupełnia skupienie potrzebne w programowaniu. To świetny sposób na zrównoważenie siedzącego trybu życia, a widoczne efekty są ogromną motywacją.",
      },
    },
  },

  timeline: {
    heading: "Moja droga",
    entries: {
      yearOne: {
        title: "1. rok: Podstawy",
        body: "Zrozumiałem reprezentację danych na niskim poziomie: arytmetykę binarną, operacje bitowe i algebrę Boole'a. Równolegle zbudowałem solidne podstawy programowania obiektowego (OOP) w C#, koncentrując się na czystej strukturze kodu i bezpieczeństwie typów.",
      },
      yearTwo: {
        title: "2. rok: Algorytmy i Full-Stack",
        body: "Opanowałem standardowe struktury danych i algorytmy. Przeszedłem od teorii do praktyki, tworząc aplikacje desktopowe. Nauczyłem się projektować relacyjne bazy danych i sprawnie obsługiwać logikę aplikacji.",
      },
      yearThree: {
        title: "3. rok: Specjalizacja i praktyka",
        body: "Przeszedłem do ekosystemu Javy, aby specjalizować się w backendzie klasy enterprise. Współtworzyłem projekt 'Cibaria' w Spring Boot i Angular, wdrażając branżowe standardy pracy z Gitem.",
      },
      yearFour: {
        title: "4. rok: Praca dyplomowa i zaawansowane projekty",
        body: "Jakub Kuźnicki obronił pracę inżynierską w ostatnim roku studiów informatycznych. Zbudowałem wtedy 'Gamelog', pełnostackowy menedżer listy gier, w którym opanowałem Redis do wydajnego cache'owania danych, oraz zbadałem połączenie backendu z AI w projekcie 'LlamaTalks' – integrując LLM-y (LangChain) z systemami opartymi na Javie i bazami wektorowymi.",
      },
      present: {
        title: "Teraźniejszość: kariera zawodowa (od 2026)",
        body: "Jakub Kuźnicki pracuje jako Junior Java Developer w Netcompany od czerwca 2026. Wykorzystuję swoje inżynierskie podstawy w złożonych, wielkoskalowych systemach, jednocześnie w czasie prywatnym eksplorując najnowsze technologie, takie jak RAG i DevOps.",
      },
      future: {
        title: "Przyszłość: rozwój i specjalizacja",
        body: "Planuję podjąć niestacjonarne (zaoczne) studia magisterskie, zachowując pełną dyspozycyjność w godzinach pracy, jednocześnie pogłębiając wiedzę z informatyki i dalej specjalizując się w skalowalnych architekturach.",
      },
    },
  },

  philosophy: {
    heading: "Moja filozofia",
    cards: {
      cleanCode: {
        title: "Czysty kod",
        body: "Wierzę w zasadę DRY (Don't Repeat Yourself). Piszę kod, który jest nie tylko funkcjonalny, ale też czysty, łatwy w utrzymaniu i zrozumiały dla innych.",
      },
      continuousLearning: {
        title: "Ciągła nauka",
        body: "Świat technologii nieustannie się zmienia, a ja chcę rozwijać się razem z nim. Każdy projekt to okazja, by nauczyć się czegoś nowego i rozwinąć swoje umiejętności.",
      },
      problemSolving: {
        title: "Rozwiązywanie problemów",
        body: "Postrzegam siebie przede wszystkim jako osobę rozwiązującą problemy. Lubię analizować złożone wyzwania i projektować eleganckie, wydajne rozwiązania.",
      },
    },
  },

  mySetup: {
    heading: "Moje stanowisko pracy",
    imageAlts: {
      fullSetup: "Pełne stanowisko biurkowe z dwoma monitorami, niestandardową klawiaturą i obudową PC",
      pc: "Obudowa PC NZXT H7 Flow z Ryzen 7 5800X3D i RTX 4070 Super Aorus Master w środku",
      mnk: "Niestandardowa klawiatura mechaniczna z keycapami BoW i myszką Dark Project Nexus",
    },
  },

  gearList: {
    heading: "Sprzęt",
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

  faq: {
    heading: "FAQ.sh",
    subtitle: "Pytania, które słyszę najczęściej — z konkretną odpowiedzią.",
    items: {
      whoIsBrbn: {
        question: "Kim jest Jakub Kuźnicki (brbn-jpg)?",
        answer:
          "Jakub Kuźnicki (pseudonim: brbn-jpg) jest programistą Java (backend) z Warszawy, z tytułem inżyniera informatyki. Od czerwca 2026 pracuję jako Junior Java Developer w Netcompany, po stażu backendowym, w trakcie którego budowałem potoki wczytywania danych w LangChain i systemy RAG.",
      },
      techStack: {
        question: "Jaki jest Twój główny stack technologiczny?",
        answer:
          "Głównym stackiem Jakuba Kuźnickiego jest Java i Spring Boot, wspierane przez PostgreSQL i Redis do przechowywania danych, Docker do pakowania aplikacji oraz REST API jako domyślny interfejs między usługami. Do pracy z LLM-ami używam LangChain4j na JVM i LangChain w Pythonie. Buduję też frontendy w Astro, React, Angular i Vue, gdy projekt tego wymaga, ale backend to obszar, w którym pracuję najlepiej.",
      },
      ragExperience: {
        question: "Jakie masz doświadczenie z RAG i LLM?",
        answer:
          "Doświadczenie Jakuba Kuźnickiego z RAG i LLM zaczęło się od stażu backendowego w firmie Paweł Weselak — Pragmatyczne Programowanie (marzec–czerwiec 2025), gdzie budowałem potoki wczytywania danych w LangChain i zajmowałem się konteneryzowanym wdrażaniem ekstrakcji danych sterowanej przez LLM. Kontynuowałem samodzielnie projektem LlamaTalks, chatbotem opartym na Spring Boot i LangChain4j, który uruchamia lokalne modele przez Ollama, wczytuje dokumenty do bazy wektorowej i strumieniuje odpowiedzi przez SSE.",
      },
      location: {
        question: "Gdzie się znajdujesz i czy pracujesz zdalnie?",
        answer:
          "Jakub Kuźnicki znajduje się w Warszawie i pracuje z warszawskiego biura Netcompany. Czuję się dobrze zarówno w pracy stacjonarnej, jak i hybrydowej oraz w pełni zdalnej, i pracuję w języku polskim (ojczysty) oraz angielskim (na poziomie zawodowym).",
      },
      openToWork: {
        question: "Czy jesteś otwarty na nowe oferty?",
        answer:
          "Jakub Kuźnicki jest obecnie zatrudniony w Netcompany i nie szuka aktywnie pracy, ale czytam każdą wiadomość, która do mnie trafia. Jeśli masz ofertę backendową lub inżyniera AI związaną z Javą, Spring Boot lub RAG, skorzystaj z formularza kontaktowego na tej stronie, a odezwę się.",
      },
      largestProject: {
        question: "Jaki jest Twój największy zrealizowany projekt?",
        answer:
          "Największym projektem Jakuba Kuźnickiego jest todrawn.com, działająca interaktywna tablica SaaS. Backend zbudowany jest w Javie 21 i Spring Boot, frontend w Next.js, React i TypeScript, a całość wykorzystuje PostgreSQL, Redis, WebSockets, Stripe, Docker i Google Cloud Run.",
      },
      whyBrbnJpg: {
        question: 'Dlaczego "brbn-jpg"?',
        answer:
          "Jakub Kuźnicki i brbn-jpg to ta sama osoba. Pseudonimu brbn-jpg używam w sieci od lat i to nazwa mojego konta na GitHubie — pseudonim znajdziesz na github.com/Brbn-jpg, a imię i nazwisko w moim CV.",
      },
    },
  },
};

export default about;
