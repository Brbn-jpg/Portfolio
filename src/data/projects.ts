import type { Locale } from "../i18n/config";

type Localized<T> = Record<Locale, T>;

export interface CaseStudy {
  problem: Localized<string>;
  role: Localized<string>;
  decisions: Localized<string>;
  result: Localized<string>;
}

export interface ProjectVerification {
  url: string;
  label: Localized<string>;
}

export interface ProjectScreenshot {
  src: string;
  alt: Localized<string>;
  /** Optional modern formats generated from the same screenshot. */
  webp?: string;
  avif?: string;
  width?: number;
  height?: number;
}

export type ProjectVisual = "rag-flow";

export interface Project {
  /** Stable id: URL slug in both locales, and the key into the detail-component registry. */
  slug: string;
  /** Brand name — never translated. */
  name: string;
  /** e.g. "Java, TypeScript" — technology names, never translated. */
  lang: string;
  /**
   * Explicit per project, not inferred from `links.github` — that heuristic
   * is unreviewable and gets `sosniak-portfolio` wrong (it has a public repo
   * but is a marketing/portfolio site, not source code someone would reuse).
   * Live products with no public repo -> WebApplication; everything else,
   * where the point is the code itself -> SoftwareSourceCode.
   */
  schemaType: "WebApplication" | "SoftwareSourceCode";
  links: {
    demo?: string;
    github?: string;
    /**
     * A key into `t.projects.demoLabels`, not a raw display string — the
     * visible label is UI chrome and belongs in the dictionary, same as
     * everything else that isn't project content.
     */
    demoLabel?: "live" | "demo";
    noFreeHostingWarning?: boolean;
  };
  /** Proper nouns — never translated. */
  technologies: readonly string[];
  /** Card copy. */
  description: Localized<string>;
  /** Fallback prose, shown when a project has no dedicated detail component. */
  longDescription: Localized<string>;
  /** Structured teaser copy for the strongest projects on the homepage. */
  caseStudy?: CaseStudy;
  /** Search-friendly editorial summary shown before the detailed architecture. */
  summary?: Localized<string>;
  /** Claims checked against the project README/repository or live product. */
  verifiedFacts: readonly Localized<string>[];
  /** Explicitly stated limit of the available evidence or implementation. */
  limitation: Localized<string>;
  verification: ProjectVerification;
  datePublished: string;
  dateModified: string;
  ogImage: {
    src: string;
    alt: Localized<string>;
  };
  /** Optional product screenshot shown on cards and detail pages. */
  screenshot?: ProjectScreenshot;
  /** Optional code-native visual used when a project has no product screenshot. */
  visual?: ProjectVisual;
  seo: Localized<{ title: string; description: string }>;
}

export const allProjects: readonly Project[] = [
  {
    slug: "todrawn",
    name: "todrawn.com",
    schemaType: "WebApplication",
    lang: "Java, TypeScript",
    links: {
      demo: "https://todrawn.com",
      demoLabel: "live",
      noFreeHostingWarning: true,
    },
    technologies: [
      "Java 21",
      "Spring Boot",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Stripe",
      "Docker",
      "Google Cloud Run",
    ],
    description: {
      en: "A creative product with Scribe for turning text, code and sketches into hand-drawn videos, plus collaborative boards. The board mode uses Java 21 and Spring Boot on the backend, and Next.js, React and TypeScript on the frontend.",
      pl: "Produkt kreatywny z trybem Scribe, który zamienia tekst, kod i szkice w odręcznie rysowane wideo, oraz ze współdzielonymi tablicami. Tryb tablic wykorzystuje Java 21 i Spring Boot na backendzie oraz Next.js, React i TypeScript na frontendzie.",
    },
    longDescription: {
      en: "todrawn.com is a full-stack product with two modes: Scribe turns text, code and freehand sketches into hand-drawn videos, while collaborative boards support shared drawing. This case study focuses on the board architecture: Java 21, Spring Boot, Spring Security, PostgreSQL, Redis and WebSockets with a Next.js, React, TypeScript, Tailwind CSS and Konva frontend. Stripe handles payments, while Docker, GitHub Actions and Google Cloud Run support deployment.",
      pl: "todrawn.com to produkt full-stack z dwoma trybami: Scribe zamienia tekst, kod i odręczne szkice w rysowane wideo, a współdzielone tablice obsługują wspólne rysowanie. To case study skupia się na architekturze tablic: Java 21, Spring Boot, Spring Security, PostgreSQL, Redis i WebSockets z frontendem w Next.js, React, TypeScript, Tailwind CSS i Konva. Stripe obsługuje płatności, a Docker, GitHub Actions i Google Cloud Run wspierają wdrażanie.",
    },
    screenshot: {
      src: "/projects/todrawn.jpg",
      webp: "/projects/optimized/todrawn.webp",
      avif: "/projects/optimized/todrawn.avif",
      alt: {
        en: "todrawn.com landing page for Scribe, showing the hand-drawn video workflow and controls for trying Scribe or opening a board.",
        pl: "Strona główna todrawn.com dla trybu Scribe, pokazująca tworzenie odręcznie rysowanego wideo oraz przyciski wypróbowania Scribe i otwarcia tablicy.",
      },
    },
    summary: {
      en: "todrawn.com is a full-stack visual creation product built around Scribe, which turns text, code and freehand sketches into stroke-by-stroke videos in the browser. Collaborative whiteboards are the supporting workspace for drawing, diagramming, images and shared refinement. I built the product end to end and this case study focuses on the board mode: a Java 21 and Spring Boot API, a Next.js, React and TypeScript canvas client, PostgreSQL for durable data, Redis for short-lived coordination, WebSockets for live updates and Stripe for billing. The product is deployed at todrawn.com. Its free tier is enforced transactionally with limits of three owned boards, five images per board, four people per board and two Scribe exports per UTC day. The available evidence describes the architecture and product limits, but does not include traffic, latency or revenue results.",
      pl: "todrawn.com to produkt full-stack do tworzenia treści, którego centrum stanowi Scribe zamieniający tekst, kod i odręczne szkice w filmy rysowane klatka po klatce w przeglądarce. Współdzielone tablice są przestrzenią do rysowania, diagramów, obrazów i wspólnego dopracowywania. Zbudowałem produkt end to end, a to case study skupia się na trybie tablic: API w Java 21 i Spring Boot, klient kanwy w Next.js, React i TypeScript, PostgreSQL dla trwałych danych, Redis dla krótkotrwałej koordynacji, WebSockets dla aktualizacji na żywo oraz Stripe dla płatności. Produkt działa pod adresem todrawn.com. Darmowy plan transakcyjnie egzekwuje limity: trzy posiadane tablice, pięć obrazów na tablicę, cztery osoby na tablicę i dwa eksporty Scribe dziennie według UTC. Dostępne dowody opisują architekturę i limity, ale nie zawierają ruchu, opóźnień ani wyników przychodowych.",
    },
    verifiedFacts: [
      { en: "421 commits are recorded for the private whiteboard repository.", pl: "Prywatne repozytorium whiteboard ma zapisane 421 commitów." },
      { en: "The product combines Scribe with collaborative whiteboards at todrawn.com.", pl: "Produkt łączy Scribe ze współdzielonymi tablicami pod adresem todrawn.com." },
      { en: "The board stack includes Java 21, Spring Boot, Next.js, React, PostgreSQL, Redis, WebSockets and Stripe.", pl: "Stack trybu tablic obejmuje Java 21, Spring Boot, Next.js, React, PostgreSQL, Redis, WebSockets i Stripe." },
      { en: "FREE limits are enforced transactionally: 3 owned boards, 5 images, 4 people and 2 Scribe exports per UTC day.", pl: "Limity FREE są egzekwowane transakcyjnie: 3 posiadane tablice, 5 obrazów, 4 osoby i 2 eksporty Scribe dziennie według UTC." },
    ],
    limitation: {
      en: "The private repository and available product documentation provide no independently verifiable traffic, latency, uptime or revenue metrics.",
      pl: "Prywatne repozytorium i dostępna dokumentacja produktu nie udostępniają niezależnie weryfikowalnych metryk ruchu, opóźnień, dostępności ani przychodów.",
    },
    verification: {
      url: "https://todrawn.com",
      label: { en: "Open the live product", pl: "Otwórz działający produkt" },
    },
    datePublished: "2026-07-17",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/todrawn.png",
      alt: {
        en: "todrawn.com project case study: Scribe hand-drawn video creation and collaborative boards.",
        pl: "Case study todrawn.com: tworzenie odręcznie rysowanych wideo w Scribe i współdzielone tablice.",
      },
    },
    caseStudy: {
      problem: {
        en: "For the board mode, keep drawing and board state in sync across connected clients while the wider product also supports Scribe, accounts and subscriptions.",
        pl: "W trybie tablic utrzymać synchronizację rysowania i stanu między podłączonymi klientami, gdy cały produkt obejmuje też Scribe, konta i subskrypcje.",
      },
      role: {
        en: "Built todrawn.com end to end; this case study focuses on the Spring Boot API, Next.js canvas experience, real-time layer, billing and deployment behind the board mode.",
        pl: "Zbudowałem todrawn.com end to end; to case study skupia się na API w Spring Boot, kanwie Next.js, warstwie czasu rzeczywistego, płatnościach i wdrożeniu trybu tablic.",
      },
      decisions: {
        en: "WebSockets carry board updates; PostgreSQL stores durable data; Redis handles fast, short-lived state; Docker, GitHub Actions and Cloud Run handle delivery.",
        pl: "WebSockets przenoszą aktualizacje tablicy, PostgreSQL przechowuje trwałe dane, Redis obsługuje szybki stan krótkotrwały, a Docker, GitHub Actions i Cloud Run wspierają dostarczanie.",
      },
      result: {
        en: "A live todrawn.com product combining Scribe with collaborative boards, including a production board mode with Stripe subscriptions.",
        pl: "Działający produkt todrawn.com łączący Scribe ze współdzielonymi tablicami, w tym produkcyjny tryb tablic z subskrypcjami Stripe.",
      },
    },
    seo: {
      en: {
        title: "todrawn.com — Scribe + collaborative boards",
        description:
          "todrawn.com combines Scribe hand-drawn videos with collaborative boards. Board mode runs on Java 21, Spring Boot, PostgreSQL, Redis and Next.js.",
      },
      pl: {
        title: "todrawn.com — Scribe i współdzielone tablice",
        description:
          "todrawn.com łączy odręcznie rysowane wideo Scribe ze współdzielonymi tablicami. Tryb tablic używa Java 21, Spring Boot, PostgreSQL, Redis i Next.js.",
      },
    },
  },
  {
    slug: "llama-talks",
    name: "LlamaTalks",
    schemaType: "SoftwareSourceCode",
    lang: "Java",
    visual: "rag-flow",
    links: {
      github: "https://github.com/Brbn-jpg/llama-talks",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "LangChain4j",
      "Ollama",
      "RAG",
      "SSE",
      "PostgreSQL",
    ],
    description: {
      en: "A Spring Boot-based chatbot application leveraging LangChain4j and Ollama for advanced conversational AI with Retrieval-Augmented Generation (RAG) capabilities. It supports streaming responses, conversation management, document ingestion, and persistent chat history.",
      pl: "Aplikacja chatbota oparta na Spring Boot, wykorzystująca LangChain4j i Ollama do zaawansowanej konwersacyjnej AI z możliwościami Retrieval-Augmented Generation (RAG). Obsługuje strumieniowanie odpowiedzi, zarządzanie konwersacjami, wczytywanie dokumentów i trwałą historię czatu.",
    },
    longDescription: {
      en: "This project explores local LLMs in a Java ecosystem. The Spring Boot server uses Ollama for a RESTful API to the Llama2 model, featuring real-time streaming via SSE, persistent chat history, and a RAG pipeline for document-based Q&A. The modular design allows easy expansion.",
      pl: "Ten projekt eksploruje lokalne modele LLM w ekosystemie Java. Serwer Spring Boot wykorzystuje Ollamę do udostępnienia RESTful API dla modelu Llama2, oferując strumieniowanie w czasie rzeczywistym przez SSE, trwałą historię czatu i potok RAG do odpowiadania na pytania na podstawie dokumentów. Modułowa konstrukcja pozwala na łatwą rozbudowę.",
    },
    caseStudy: {
      problem: {
        en: "Answer questions from a user's documents while keeping the language model local to the application.",
        pl: "Odpowiadać na pytania z dokumentów użytkownika, utrzymując model językowy lokalnie w aplikacji.",
      },
      role: {
        en: "Built a Spring Boot chatbot around LangChain4j, Ollama, document ingestion and persistent conversations.",
        pl: "Zbudowałem chatbota w Spring Boot wokół LangChain4j, Ollamy, ingestii dokumentów i trwałych konwersacji.",
      },
      decisions: {
        en: "The ingestion endpoint sends files through Apache Tika parsing and chunking, then embeddings and semantic retrieval provide context alongside conversation history. LangChain4j connects that context to Ollama, while Reactor/Flux and SSE stream the response; changing embedding dimensions requires re-ingestion.",
        pl: "Endpoint ingestii prowadzi pliki przez parsowanie i dzielenie w Apache Tika, a następnie embeddingi i wyszukiwanie semantyczne dostarczają kontekst obok historii rozmowy. LangChain4j łączy ten kontekst z Ollamą, a Reactor/Flux i SSE strumieniują odpowiedź; zmiana wymiarów embeddingów wymaga ponownej ingestii.",
      },
      result: {
        en: "An open-source chatbot project with local-model conversations, document Q&A and streamed responses.",
        pl: "Otwartoźródłowy chatbot z rozmowami na lokalnym modelu, pytaniami do dokumentów i strumieniowanymi odpowiedziami.",
      },
    },
    summary: {
      en: "LlamaTalks is an open-source Spring Boot chatbot that keeps the language model local through Ollama while adding document-grounded answers with Retrieval-Augmented Generation. A user can ingest documents, let Apache Tika extract and split their text, generate embeddings and store them for semantic retrieval, then ask questions in a conversation that keeps persistent history. LangChain4j connects the retrieved context and conversation memory to Ollama. Reactor/Flux and Server-Sent Events stream the answer to the client instead of waiting for one completed response. The project exposes a RESTful API and supports conversation management, document listing and flexible chat or embedding model selection. The repository records 21 public commits. The README documents the architecture and setup, but it also warns that not every listed document type was tested and that changing embedding dimensions requires clearing the store and ingesting documents again.",
      pl: "LlamaTalks to otwartoźródłowy chatbot w Spring Boot, który utrzymuje model językowy lokalnie przez Ollamę i dodaje odpowiedzi oparte na dokumentach dzięki Retrieval-Augmented Generation. Użytkownik może wczytać dokumenty, pozwolić Apache Tika wydobyć i podzielić ich tekst, wygenerować embeddingi oraz zapisać je do wyszukiwania semantycznego, a potem zadawać pytania w rozmowie z trwałą historią. LangChain4j łączy pobrany kontekst i pamięć konwersacji z Ollamą. Reactor/Flux oraz Server-Sent Events strumieniują odpowiedź do klienta zamiast czekać na jeden ukończony rezultat. Projekt udostępnia REST API, zarządzanie rozmowami, listę dokumentów oraz wybór modeli czatu i embeddingów. Repozytorium ma 21 publicznych commitów. README opisuje architekturę i konfigurację, ale zaznacza, że nie każdy wymieniony format dokumentu był testowany, a zmiana wymiaru embeddingów wymaga wyczyszczenia magazynu i ponownej ingestii.",
    },
    verifiedFacts: [
      { en: "The public repository records 21 commits.", pl: "Publiczne repozytorium ma zapisane 21 commitów." },
      { en: "The README identifies Spring Boot, LangChain4j, Ollama, SSE, persistent history and RAG document ingestion.", pl: "README wymienia Spring Boot, LangChain4j, Ollamę, SSE, trwałą historię i ingestję dokumentów RAG." },
      { en: "Apache Tika parses documents before chunking, embeddings and semantic retrieval.", pl: "Apache Tika parsuje dokumenty przed dzieleniem, tworzeniem embeddingów i wyszukiwaniem semantycznym." },
    ],
    limitation: {
      en: "The README says that not every supported file format was tested and provides no measured response-time or retrieval-quality results.",
      pl: "README zaznacza, że nie każdy obsługiwany format był testowany, i nie podaje zmierzonych czasów odpowiedzi ani jakości retrievalu.",
    },
    verification: {
      url: "https://github.com/Brbn-jpg/llama-talks",
      label: { en: "Read the public repository", pl: "Zobacz publiczne repozytorium" },
    },
    datePublished: "2025-11-20",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/llama-talks.png",
      alt: {
        en: "LlamaTalks project case study: local Ollama model connected to a Spring Boot RAG pipeline.",
        pl: "Case study LlamaTalks: lokalny model Ollama połączony z potokiem RAG w Spring Boot.",
      },
    },
    seo: {
      en: {
        title: "LlamaTalks — Java RAG chatbot with LangChain4j",
        description:
          "LlamaTalks is an open-source Spring Boot chatbot by Jakub Kuźnicki: LangChain4j and Ollama power document-grounded RAG answers streamed over SSE.",
      },
      pl: {
        title: "LlamaTalks — chatbot RAG w Spring Boot i LangChain4j",
        description:
          "LlamaTalks to otwartoźródłowy chatbot w Spring Boot: LangChain4j, Ollama i lokalna baza wektorowa — odpowiedzi RAG z dokumentów, streaming przez SSE.",
      },
    },
  },
  {
    slug: "gamelog",
    name: "Gamelog",
    schemaType: "SoftwareSourceCode",
    lang: "Java, React",
    links: {
      github: "https://github.com/Brbn-jpg/GameBacklogTracker",
      demo: "https://gameloggd.vercel.app/",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    description: {
      en: "A full-stack game backlog management system. Organize your video game library using a Kanban-style dashboard, track playtime, rate games, and connect with other users.",
      pl: "System full-stack do zarządzania biblioteką gier. Organizuj swoją kolekcję gier wideo za pomocą panelu w stylu Kanban, śledź czas gry, oceniaj tytuły i łącz się z innymi użytkownikami.",
    },
    longDescription: {
      en: "Gamelog is a full-stack web application that helps users organize their video game libraries. It features a Kanban-style dashboard for managing progress, advanced search capabilities, social features like friend requests, and secure user accounts.",
      pl: "Gamelog to aplikacja webowa full-stack, która pomaga użytkownikom organizować biblioteki gier wideo. Oferuje panel w stylu Kanban do zarządzania postępem, zaawansowane możliwości wyszukiwania, funkcje społecznościowe jak zaproszenia do znajomych oraz bezpieczne konta użytkowników.",
    },
    screenshot: {
      src: "/projects/gamelog.jpg",
      webp: "/projects/optimized/gamelog.webp",
      avif: "/projects/optimized/gamelog.avif",
      alt: {
        en: "Gamelog landing page with a backlog headline, navigation, and a collage of game artwork.",
        pl: "Strona główna Gamelog z hasłem o backlogu, nawigacją i kolażem grafik z gier.",
      },
    },
    caseStudy: {
      problem: {
        en: "Give players one place to organize a game library, track progress and keep social features beside the backlog.",
        pl: "Dać graczom jedno miejsce do organizowania biblioteki, śledzenia postępów i obsługi funkcji społecznościowych obok backlogu.",
      },
      role: {
        en: "Built a full-stack game backlog manager with a Spring Boot API and React interface.",
        pl: "Zbudowałem pełnostackowego menedżera backlogu gier z API w Spring Boot i interfejsem w React.",
      },
      decisions: {
        en: "A Kanban dashboard models progress; PostgreSQL persists accounts and library data; Redis provides caching; Docker packages the application.",
        pl: "Panel Kanban modeluje postęp, PostgreSQL przechowuje konta i dane biblioteki, Redis zapewnia cache, a Docker pakuje aplikację.",
      },
      result: {
        en: "A working full-stack tracker with search, playtime, ratings, friend requests and a live demo.",
        pl: "Działający tracker full-stack z wyszukiwaniem, czasem gry, ocenami, zaproszeniami do znajomych i wersją demo.",
      },
    },
    verifiedFacts: [
      { en: "The public monorepo records 37 commits.", pl: "Publiczne repozytorium monorepo ma zapisane 37 commitów." },
      { en: "The repository contains a Java/Spring Boot API and a React frontend.", pl: "Repozytorium zawiera API w Java/Spring Boot i frontend w React." },
      { en: "The live demo is available at gameloggd.vercel.app.", pl: "Działające demo jest dostępne pod adresem gameloggd.vercel.app." },
    ],
    limitation: {
      en: "The repository and demo establish the implemented feature set, but no public usage, latency or retention metrics are available.",
      pl: "Repozytorium i demo potwierdzają zakres funkcji, ale nie ma publicznych metryk użycia, opóźnień ani retencji.",
    },
    verification: {
      url: "https://gameloggd.vercel.app/",
      label: { en: "Open the final live demo", pl: "Otwórz finalne demo na żywo" },
    },
    datePublished: "2026-01-15",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/gamelog.png",
      alt: {
        en: "Gamelog project case study: Kanban game backlog tracker built with Spring Boot and React.",
        pl: "Case study Gamelog: tracker backlogu gier z tablicą Kanban w Spring Boot i React.",
      },
    },
    seo: {
      en: {
        title: "Gamelog — Java/React Kanban game backlog tracker",
        description:
          "Gamelog is a full-stack game backlog tracker by Jakub Kuźnicki: Spring Boot, React, PostgreSQL, and Redis power Kanban boards, playtime, and ratings.",
      },
      pl: {
        title: "Gamelog — tracker biblioteki gier w Java i React",
        description:
          "Gamelog to aplikacja full-stack do zarządzania biblioteką gier w Spring Boot, React, PostgreSQL i Redis: tablica Kanban, czas gry, oceny i znajomi.",
      },
    },
  },
  {
    slug: "map-generator",
    name: "MapGenerator",
    schemaType: "SoftwareSourceCode",
    lang: "Java, Vue, TypeScript",
    links: {
      github: "https://github.com/Brbn-jpg/mapGenerator",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "FastNoiseLite",
      "Vue 3",
      "TypeScript",
      "Vite",
      "HTML5 Canvas",
      "Docker",
    ],
    description: {
      en: "A full-stack procedural world generator that turns a single seed into a fully-realized fantasy map. Combines a Spring Boot backend with a Vue 3 + TypeScript frontend rendering on HTML5 Canvas, with real-time streaming, stylized water animation, and dynamic terrain shading.",
      pl: "Generator proceduralnych światów full-stack, który zamienia pojedyncze ziarno w gotową mapę fantasy. Łączy backend Spring Boot z frontendem Vue 3 + TypeScript renderującym na HTML5 Canvas, ze strumieniowaniem w czasie rzeczywistym, stylizowaną animacją wody i dynamicznym cieniowaniem terenu.",
    },
    longDescription: {
      en: "MapGenerator is a procedural world-building tool that produces interactive fantasy maps from a single seed. The backend, built on Spring Boot with FastNoiseLite, generates terrain data and streams it to the client. The Vue 3 + TypeScript frontend renders the world on an HTML5 Canvas with a Google Maps-style pan/zoom viewport, stylized procedural water animation, dynamic height-gradient shading for 3D depth, and procedurally-generated cities and buildings. A virtual canvas hybrid approach with pre-rendered static terrain keeps rendering performant.",
      pl: "MapGenerator to narzędzie do proceduralnego budowania światów, które tworzy interaktywne mapy fantasy z pojedynczego ziarna. Backend, zbudowany na Spring Boot z FastNoiseLite, generuje dane terenu i strumieniuje je do klienta. Frontend Vue 3 + TypeScript renderuje świat na HTML5 Canvas z widokiem pan/zoom w stylu Map Google, stylizowaną proceduralną animacją wody, dynamicznym cieniowaniem gradientu wysokości dla efektu 3D oraz proceduralnie generowanymi miastami i budynkami. Hybrydowe podejście z wirtualnym canvasem i wstępnie wyrenderowanym statycznym terenem utrzymuje wydajność renderowania.",
    },
    screenshot: {
      src: "/projects/mapgenerator.png",
      webp: "/projects/optimized/map-generator.webp",
      avif: "/projects/optimized/map-generator.avif",
      width: 1296,
      height: 1292,
      alt: {
        en: "Generated MapGenerator fantasy map with blue ocean, multiple landmasses, biome textures, mountains and cities.",
        pl: "Wygenerowana mapa fantasy z MapGeneratora z niebieskim oceanem, lądami, teksturami biomów, górami i miastami.",
      },
    },
    caseStudy: {
      problem: {
        en: "Turn one seed and a map size into an explorable fantasy world while keeping large maps responsive in the browser.",
        pl: "Zamienić jedno ziarno i rozmiar mapy w eksplorowalny świat fantasy, zachowując responsywność dużych map w przeglądarce.",
      },
      role: {
        en: "Built the Spring Boot generation backend and Vue/TypeScript Canvas client, including the streaming path, viewport and renderer.",
        pl: "Zbudowałem backend generacji w Spring Boot oraz klienta Vue/TypeScript z Canvasem, w tym streaming, widok mapy i renderer.",
      },
      decisions: {
        en: "Multiple noise layers model height, moisture, temperature and the continent mask. The client uses a hybrid virtual/offscreen canvas: static land is pre-rendered and only waves are calculated per frame.",
        pl: "Wiele warstw szumu modeluje wysokość, wilgotność, temperaturę i maskę kontynentów. Klient używa hybrydowej wirtualnej kanwy i warstw offscreen: statyczny ląd jest renderowany wcześniej, a w każdej klatce liczone są tylko fale.",
      },
      result: {
        en: "A working procedural map generator with streamed terrain, pan/zoom navigation, topology shading, procedural textures and cities.",
        pl: "Działający generator proceduralnych map ze strumieniowanym terenem, nawigacją pan/zoom, cieniowaniem topografii, teksturami i miastami generowanymi proceduralnie.",
      },
    },
    summary: {
      en: "MapGenerator turns a seed and map size into an explorable procedural fantasy world. The public project separates a Spring Boot backend from a Vue 3, TypeScript and Vite client that renders directly to HTML5 Canvas. The backend generates terrain with noise and streams the result to the browser. The client presents that terrain in a fixed 800×600 viewport with Google Maps-style pan and zoom controls. Its renderer uses a hybrid virtual/offscreen canvas: static land is rendered into buffers, while animated water is calculated per frame. Additional layers model height, moisture, temperature and the continent mask, with topology shading, procedural textures and generated cities completing the map. The repository records 23 public commits. The architecture gives the project a clear performance story for large maps, while the available evidence remains a code and README description rather than a benchmark report.",
      pl: "MapGenerator zamienia ziarno i rozmiar mapy w eksplorowalny proceduralny świat fantasy. Publiczny projekt rozdziela backend Spring Boot od klienta Vue 3, TypeScript i Vite, który renderuje bezpośrednio na HTML5 Canvas. Backend generuje teren z użyciem szumu i strumieniuje wynik do przeglądarki. Klient pokazuje teren w stałym widoku 800×600 z nawigacją pan i zoom w stylu Google Maps. Renderer korzysta z hybrydowej kanwy wirtualnej i offscreen: statyczny ląd trafia do buforów, a animowana woda jest liczona w każdej klatce. Dodatkowe warstwy modelują wysokość, wilgotność, temperaturę i maskę kontynentów, a cieniowanie topografii, proceduralne tekstury i generowane miasta uzupełniają mapę. Repozytorium ma 23 publiczne commity. Architektura daje czytelną historię wydajności dla dużych map, lecz dostępne dowody są opisem kodu i README, a nie raportem benchmarkowym.",
    },
    verifiedFacts: [
      { en: "The public repository records 23 commits.", pl: "Publiczne repozytorium ma zapisane 23 commity." },
      { en: "The project uses Spring Boot, FastNoiseLite, Vue 3, TypeScript and an HTML5 Canvas renderer.", pl: "Projekt używa Spring Boot, FastNoiseLite, Vue 3, TypeScript i renderera HTML5 Canvas." },
      { en: "The client uses a fixed 800×600 viewport and a hybrid pre-rendered terrain/live water path.", pl: "Klient używa stałego widoku 800×600 oraz hybrydowej ścieżki z wcześniej renderowanym terenem i wodą na żywo." },
    ],
    limitation: {
      en: "The public material does not report frame rates, map-size limits or benchmark results on specific devices.",
      pl: "Materiały publiczne nie podają liczby klatek, limitów rozmiaru mapy ani wyników benchmarków dla konkretnych urządzeń.",
    },
    verification: {
      url: "https://github.com/Brbn-jpg/mapGenerator",
      label: { en: "Read the public repository", pl: "Zobacz publiczne repozytorium" },
    },
    datePublished: "2026-05-01",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/map-generator.png",
      alt: {
        en: "MapGenerator project case study: procedural terrain streamed from Spring Boot to a Vue Canvas renderer.",
        pl: "Case study MapGenerator: proceduralny teren strumieniowany z Spring Boot do renderera Vue Canvas.",
      },
    },
    seo: {
      en: {
        title: "MapGenerator — Spring Boot + Vue procedural maps",
        description:
          "MapGenerator is a procedural fantasy map generator by Jakub Kuźnicki: Spring Boot streams seed-based terrain to a Vue 3 + TypeScript Canvas renderer.",
      },
      pl: {
        title: "MapGenerator — proceduralne mapy w Spring Boot i Vue",
        description:
          "MapGenerator to generator proceduralnych map fantasy: Spring Boot strumieniuje teren z ziarna do frontendu Vue 3 + TypeScript renderującego na Canvas.",
      },
    },
  },
  {
    slug: "cibaria",
    name: "Cibaria",
    schemaType: "WebApplication",
    lang: "Java, Angular",
    links: {
      demo: "https://cibaria.vercel.app/",
    },
    technologies: ["Java", "Spring Boot 3.4.1", "Angular 18.2.7", "PostgreSQL", "REST API"],
    description: {
      en: "A full-stack web application for recipe management. The backend is powered by Spring Boot, providing robust RESTful APIs, while the frontend is built with Angular for a dynamic user experience.",
      pl: "Aplikacja webowa full-stack do zarządzania przepisami kulinarnymi. Backend oparty na Spring Boot dostarcza solidne REST API, a frontend zbudowany w Angularze zapewnia dynamiczne doświadczenie użytkownika.",
    },
    longDescription: {
      en: "Cibaria is a full-stack solution for recipe enthusiasts. It allows users to create, store, and search for recipes. The backend, built with Spring Boot, exposes a secure and efficient REST API for all data operations. The frontend, developed using Angular, offers a modern and responsive user interface for a seamless experience across devices.",
      pl: "Cibaria to rozwiązanie full-stack dla entuzjastów gotowania. Pozwala użytkownikom tworzyć, przechowywać i wyszukiwać przepisy. Backend, zbudowany w Spring Boot, udostępnia bezpieczne i wydajne REST API dla wszystkich operacji na danych. Frontend, stworzony w Angularze, oferuje nowoczesny i responsywny interfejs użytkownika zapewniający płynne doświadczenie na wszystkich urządzeniach.",
    },
    screenshot: {
      src: "/projects/cibaria.png",
      webp: "/projects/optimized/cibaria.webp",
      avif: "/projects/optimized/cibaria.avif",
      alt: {
        en: "Cibaria recipe manager interface showing a food recipe browsing and management view.",
        pl: "Interfejs menedżera przepisów Cibaria z widokiem przeglądania i zarządzania przepisami.",
      },
    },
    caseStudy: {
      problem: {
        en: "Give recipe enthusiasts one place to create, store, search and share recipes with a bilingual interface.",
        pl: "Dać pasjonatom gotowania jedno miejsce do tworzenia, przechowywania, wyszukiwania i udostępniania przepisów z dwujęzycznym interfejsem.",
      },
      role: {
        en: "Built the full-stack application across its Angular frontend and Spring Boot REST API, connecting the product to PostgreSQL.",
        pl: "Zbudowałem aplikację full-stack, obejmując frontend Angular i REST API w Spring Boot połączone z PostgreSQL.",
      },
      decisions: {
        en: "Angular 18.2.7 provides the responsive client, Spring Boot 3.4.1 exposes the API, PostgreSQL persists recipe and user data, and the product keeps English and Polish content paths together.",
        pl: "Angular 18.2.7 dostarcza responsywnego klienta, Spring Boot 3.4.1 udostępnia API, PostgreSQL przechowuje dane przepisów i użytkowników, a produkt łączy ścieżki treści po angielsku i polsku.",
      },
      result: {
        en: "A live recipe manager with recipe creation, search, filtering, profiles, favorites, ratings and English/Polish support.",
        pl: "Działający menedżer przepisów z tworzeniem, wyszukiwaniem, filtrowaniem, profilami, ulubionymi, ocenami i obsługą języka angielskiego oraz polskiego.",
      },
    },
    verifiedFacts: [
      { en: "The private repository records 174 commits.", pl: "Prywatne repozytorium ma zapisane 174 commity." },
      { en: "The project uses Angular 18.2.7, Spring Boot 3.4.1 and PostgreSQL.", pl: "Projekt używa Angular 18.2.7, Spring Boot 3.4.1 i PostgreSQL." },
      { en: "The application supports English and Polish content and is available at cibaria.vercel.app.", pl: "Aplikacja obsługuje treści po angielsku i polsku oraz działa pod adresem cibaria.vercel.app." },
    ],
    limitation: {
      en: "The repository is private, so implementation details are verified from the live application and the maintained project evidence rather than public source code.",
      pl: "Repozytorium jest prywatne, dlatego szczegóły implementacji są weryfikowane przez działającą aplikację i utrzymywane dowody projektu, a nie publiczny kod źródłowy.",
    },
    verification: {
      url: "https://cibaria.vercel.app/",
      label: { en: "Open the live application", pl: "Otwórz działającą aplikację" },
    },
    datePublished: "2025-11-20",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/cibaria.png",
      alt: {
        en: "Cibaria project case study: bilingual recipe manager built with Angular and Spring Boot.",
        pl: "Case study Cibaria: dwujęzyczny menedżer przepisów zbudowany w Angularze i Spring Boot.",
      },
    },
    seo: {
      en: {
        title: "Cibaria — Spring Boot + Angular recipe manager",
        description:
          "Cibaria is a full-stack recipe manager by Jakub Kuźnicki, built with Spring Boot and Angular: create, store, and search recipes through a secure REST API.",
      },
      pl: {
        title: "Cibaria — menedżer przepisów w Spring Boot i Angular",
        description:
          "Cibaria to aplikacja full-stack do zarządzania przepisami w Spring Boot i Angularze — tworzenie, przechowywanie i wyszukiwanie przez bezpieczne REST API.",
      },
    },
  },
  {
    slug: "sosniak-portfolio",
    name: "SosniakPortfolio",
    schemaType: "SoftwareSourceCode",
    lang: "Astro, TypeScript",
    links: {
      github: "https://github.com/Brbn-jpg/sosniak-portfolio",
      demo: "https://metricmind.pl",
      demoLabel: "live",
      noFreeHostingWarning: true,
    },
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    description: {
      en: "A personal portfolio website built for Sebastian Sośniak with Astro, TypeScript and Tailwind CSS. Focused on fast, content-first delivery with a clean, modern presentation of projects and experience.",
      pl: "Osobista strona portfolio stworzona dla Sebastiana Sośniaka w Astro, TypeScript i Tailwind CSS. Skupiona na szybkim, zorientowanym na treść działaniu, z przejrzystą, nowoczesną prezentacją projektów i doświadczenia.",
    },
    longDescription: {
      en: "A bespoke portfolio site designed and built for Sebastian Sośniak. The project uses Astro's island architecture for an extremely fast, mostly-static site, with TypeScript for type-safe components and Tailwind CSS for styling. It is deployed on Vercel with continuous delivery from GitHub, and emphasizes a content-first layout that highlights projects, skills, and contact information.",
      pl: "Autorska strona portfolio zaprojektowana i zbudowana dla Sebastiana Sośniaka. Projekt wykorzystuje architekturę wysp Astro, dzięki czemu strona jest niezwykle szybka i w większości statyczna, z TypeScript zapewniającym bezpieczeństwo typów komponentów i Tailwind CSS do stylowania. Jest wdrożona na Vercel z ciągłą dostawą z GitHuba i kładzie nacisk na układ zorientowany na treść, eksponujący projekty, umiejętności i dane kontaktowe.",
    },
    screenshot: {
      src: "/projects/sosniak-portfolio.png",
      webp: "/projects/optimized/sosniak-portfolio.webp",
      avif: "/projects/optimized/sosniak-portfolio.avif",
      alt: {
        en: "SosniakPortfolio homepage for Sebastian Sośniak showing a content-first portfolio layout.",
        pl: "Strona główna SosniakPortfolio dla Sebastiana Sośniaka z przejrzystym układem portfolio.",
      },
    },
    caseStudy: {
      problem: {
        en: "Present Sebastian Sośniak's projects and experience in a fast portfolio that stays easy to maintain as the content grows.",
        pl: "Zaprezentować projekty i doświadczenie Sebastiana Sośniaka w szybkim portfolio, które pozostanie łatwe w utrzymaniu wraz ze wzrostem treści.",
      },
      role: {
        en: "Designed and built the portfolio with Astro, TypeScript and Tailwind CSS, then deployed it to the live metricmind.pl domain.",
        pl: "Zaprojektowałem i zbudowałem portfolio w Astro, TypeScript i Tailwind CSS, a następnie wdrożyłem je pod działającą domeną metricmind.pl.",
      },
      decisions: {
        en: "Astro's mostly static output keeps the content path light; TypeScript supports type-safe components; Tailwind CSS keeps the visual system consistent; Vercel provides hosting and delivery.",
        pl: "W większości statyczny output Astro upraszcza ścieżkę treści; TypeScript wspiera bezpieczne typy komponentów; Tailwind CSS utrzymuje spójny system wizualny; Vercel zapewnia hosting i dostarczanie.",
      },
      result: {
        en: "A live content-first portfolio for Sebastian Sośniak at metricmind.pl, backed by a public repository with 10 commits.",
        pl: "Działające portfolio zorientowane na treść dla Sebastiana Sośniaka pod metricmind.pl, oparte na publicznym repozytorium z 10 commitami.",
      },
    },
    verifiedFacts: [
      { en: "The public repository records 10 commits.", pl: "Publiczne repozytorium ma zapisane 10 commitów." },
      { en: "The project uses Astro, TypeScript, Tailwind CSS and Vercel.", pl: "Projekt używa Astro, TypeScript, Tailwind CSS i Vercel." },
      { en: "The live product is available at metricmind.pl.", pl: "Działający produkt jest dostępny pod adresem metricmind.pl." },
    ],
    limitation: {
      en: "No public analytics, Lighthouse history or conversion results are available, so the outcome is described through the delivered product and architecture.",
      pl: "Nie ma publicznych danych analitycznych, historii Lighthouse ani wyników konwersji, dlatego rezultat opisuję przez dostarczony produkt i architekturę.",
    },
    verification: {
      url: "https://github.com/Brbn-jpg/sosniak-portfolio",
      label: { en: "Read the public repository", pl: "Zobacz publiczne repozytorium" },
    },
    datePublished: "2026-05-01",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/sosniak-portfolio.png",
      alt: {
        en: "SosniakPortfolio project case study: Astro portfolio built for Sebastian Sośniak.",
        pl: "Case study SosniakPortfolio: portfolio w Astro zbudowane dla Sebastiana Sośniaka.",
      },
    },
    seo: {
      en: {
        title: "SosniakPortfolio — Astro portfolio for Sebastian Sośniak",
        description:
          "SosniakPortfolio is a fast, content-first Astro portfolio by Jakub Kuźnicki for Sebastian Sośniak, styled with Tailwind CSS and deployed on Vercel.",
      },
      pl: {
        title: "SosniakPortfolio — portfolio w Astro dla Sebastiana Sośniaka",
        description:
          "SosniakPortfolio to szybkie, zorientowane na treść portfolio w Astro, TypeScript i Tailwind CSS, stworzone dla Sebastiana Sośniaka i wdrożone na Vercel.",
      },
    },
  },
  {
    slug: "strefa-sa",
    name: "StrefaSA",
    schemaType: "WebApplication",
    lang: "Astro, TypeScript",
    links: {
      demo: "https://www.strefasa.pl",
      demoLabel: "live",
      noFreeHostingWarning: true,
    },
    technologies: ["Astro", "TypeScript", "Vercel", "Stripe Checkout", "Vanilla CSS"],
    description: {
      en: "A modern marketing website and in-game store for a Polish MTA:SA server. As a co-owner and co-creator, I developed a cinematic landing page with live statistics and a Stripe-integrated shop.",
      pl: "Nowoczesna strona marketingowa i sklep w grze dla polskiego serwera MTA:SA. Jako współwłaściciel i współtwórca zaprojektowałem kinową stronę główną z danymi na żywo oraz sklepem zintegrowanym ze Stripe.",
    },
    longDescription: {
      en: "StrefaSA is a comprehensive web presence for an MTA:SA community where I serve as a co-owner and lead developer. It combines a high-performance marketing landing page built with Astro and a custom in-game store. The site emphasizes cinematic visuals and real-time data to build trust with players, while the shop integration provides a seamless path for purchasing in-game assets via Stripe.",
      pl: "StrefaSA to kompleksowa obecność internetowa dla społeczności MTA:SA, w której jestem współwłaścicielem i głównym programistą. Łączy wysokowydajną stronę marketingową zbudowaną w Astro z autorskim sklepem w grze. Strona stawia na kinowe wizualizacje i dane w czasie rzeczywistym, by budować zaufanie graczy, a integracja sklepu zapewnia płynną ścieżkę zakupu przedmiotów w grze przez Stripe.",
    },
    screenshot: {
      src: "/projects/strefa-sa.png",
      webp: "/projects/optimized/strefa-sa.webp",
      avif: "/projects/optimized/strefa-sa.avif",
      alt: {
        en: "StrefaSA marketing homepage for an MTA:SA community with a cinematic game-focused presentation.",
        pl: "Marketingowa strona główna StrefaSA dla społeczności MTA:SA z kinową prezentacją świata gry.",
      },
    },
    caseStudy: {
      problem: {
        en: "Connect an MTA:SA community's game atmosphere with a credible web presence and a shop path that hands checkout to the separate backend.",
        pl: "Połączyć atmosferę społeczności MTA:SA z wiarygodną obecnością w sieci i ścieżką sklepu, która przekazuje checkout do osobnego backendu.",
      },
      role: {
        en: "Worked as co-owner and co-creator of the server, designing and building the Astro frontend, including the marketing site and /sklep handoff.",
        pl: "Pracowałem jako współwłaściciel i współtwórca serwera, projektując i budując frontend Astro, w tym stronę marketingową i przekazanie z /sklep.",
      },
      decisions: {
        en: "Astro keeps the public frontend lightweight; live server data builds trust; /sklep hands payment flow to a separate MTA backend and Stripe Checkout instead of pretending the frontend owns fulfillment.",
        pl: "Astro utrzymuje lekki frontend publiczny; dane serwera na żywo budują zaufanie; /sklep przekazuje płatność do osobnego backendu MTA i Stripe Checkout, zamiast udawać, że frontend obsługuje realizację.",
      },
      result: {
        en: "A live cinematic marketing site and store entry point at strefasa.pl, backed by a private repository with 26 commits.",
        pl: "Działająca kinowa strona marketingowa i punkt wejścia do sklepu pod strefasa.pl, oparta na prywatnym repozytorium z 26 commitami.",
      },
    },
    verifiedFacts: [
      { en: "The private frontend repository records 26 commits.", pl: "Prywatne repozytorium frontendu ma zapisane 26 commitów." },
      { en: "The Astro frontend exposes a /sklep route and hands payment to a separate MTA backend using Stripe Checkout.", pl: "Frontend Astro udostępnia trasę /sklep i przekazuje płatność do osobnego backendu MTA przez Stripe Checkout." },
      { en: "The live site is available at www.strefasa.pl.", pl: "Działająca strona jest dostępna pod adresem www.strefasa.pl." },
    ],
    limitation: {
      en: "The repository and payment backend are private, and no public conversion, revenue or server-activity metrics are available.",
      pl: "Repozytorium i backend płatności są prywatne, a publiczne metryki konwersji, przychodów ani aktywności serwera nie są dostępne.",
    },
    verification: {
      url: "https://www.strefasa.pl",
      label: { en: "Open the live site", pl: "Otwórz działającą stronę" },
    },
    datePublished: "2026-05-19",
    dateModified: "2026-09-14",
    ogImage: {
      src: "/og/projects/strefa-sa.png",
      alt: {
        en: "StrefaSA project case study: Astro marketing site and Stripe Checkout shop entry point for MTA:SA.",
        pl: "Case study StrefaSA: strona marketingowa Astro i punkt wejścia do sklepu Stripe Checkout dla MTA:SA.",
      },
    },
    seo: {
      en: {
        title: "StrefaSA — Astro marketing site + Stripe shop for MTA:SA",
        description:
          "StrefaSA is a cinematic Astro marketing site and Stripe-integrated shop for a Polish MTA:SA server, co-owned and built by Jakub Kuźnicki himself.",
      },
      pl: {
        title: "StrefaSA — strona i sklep Stripe dla serwera MTA:SA",
        description:
          "StrefaSA to kinowa strona marketingowa w Astro i sklep w grze zintegrowany ze Stripe dla polskiego serwera MTA:SA, współtworzony przeze mnie.",
      },
    },
  },
] as const;

/** Flattens a `Project`'s per-locale fields for a given language, so components stay dumb. */
export function localize(project: Project, lang: Locale) {
  return {
    ...project,
    description: project.description[lang],
    longDescription: project.longDescription[lang],
    caseStudy: project.caseStudy
      ? {
          problem: project.caseStudy.problem[lang],
          role: project.caseStudy.role[lang],
          decisions: project.caseStudy.decisions[lang],
          result: project.caseStudy.result[lang],
        }
      : undefined,
    summary: project.summary?.[lang],
    verifiedFacts: project.verifiedFacts.map((fact) => fact[lang]),
    limitation: project.limitation[lang],
    verification: {
      url: project.verification.url,
      label: project.verification.label[lang],
    },
    ogImage: {
      src: project.ogImage.src,
      alt: project.ogImage.alt[lang],
    },
    screenshot: project.screenshot
      ? {
          src: project.screenshot.src,
          webp: project.screenshot.webp,
          avif: project.screenshot.avif,
          alt: project.screenshot.alt[lang],
          width: project.screenshot.width,
          height: project.screenshot.height,
        }
      : undefined,
    seo: project.seo[lang],
  };
}

export type LocalizedProject = ReturnType<typeof localize>;
