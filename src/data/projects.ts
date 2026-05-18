export const allProjects = [
  {
    slug: "llama-talks",
    name: "LlamaTalks",
    description:
      "A Spring Boot-based chatbot application leveraging LangChain4j and Ollama for advanced conversational AI with Retrieval-Augmented Generation (RAG) capabilities. It supports streaming responses, conversation management, document ingestion, and persistent chat history.",
    lang: "Java",
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
    longDescription:
      "This project explores local LLMs in a Java ecosystem. The Spring Boot server uses Ollama for a RESTful API to the Llama2 model, featuring real-time streaming via SSE, persistent chat history, and a RAG pipeline for document-based Q&A. The modular design allows easy expansion.",
  },
  {
    slug: "gamelog",
    name: "Gamelog",
    description:
      "A full-stack game backlog management system. Organize your video game library using a Kanban-style dashboard, track playtime, rate games, and connect with other users.",
    lang: "Java, React",
    links: {
      github: "https://github.com/Brbn-jpg/GameBacklogTracker",
      demo: "https://game-backlog-tracker-omega.vercel.app/",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    longDescription:
      "Gamelog is a full-stack web application that helps users organize their video game libraries. It features a Kanban-style dashboard for managing progress, advanced search capabilities, social features like friend requests, and secure user accounts.",
  },
  {
    slug: "map-generator",
    name: "MapGenerator",
    description:
      "A full-stack procedural world generator that turns a single seed into a fully-realized fantasy map. Combines a Spring Boot backend with a Vue 3 + TypeScript frontend rendering on HTML5 Canvas, with real-time streaming, stylized water animation, and dynamic terrain shading.",
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
    longDescription:
      "MapGenerator is a procedural world-building tool that produces interactive fantasy maps from a single seed. The backend, built on Spring Boot with FastNoiseLite, generates terrain data and streams it to the client. The Vue 3 + TypeScript frontend renders the world on an HTML5 Canvas with a Google Maps-style pan/zoom viewport, stylized procedural water animation, dynamic height-gradient shading for 3D depth, and procedurally-generated cities and buildings. A virtual canvas hybrid approach with pre-rendered static terrain keeps rendering performant.",
  },
  {
    slug: "cibaria",
    name: "Cibaria",
    description:
      "A full-stack web application for recipe management. The backend is powered by Spring Boot, providing robust RESTful APIs, while the frontend is built with Angular for a dynamic user experience.",
    lang: "Java, Angular",
    links: {
      github: "https://github.com/Brbn-jpg/Cibaria-Recipe-Manager",
      demo: "https://cibaria.vercel.app/",
    },
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "REST API"],
    longDescription:
      "Cibaria is a full-stack solution for recipe enthusiasts. It allows users to create, store, and search for recipes. The backend, built with Spring Boot, exposes a secure and efficient REST API for all data operations. The frontend, developed using Angular, offers a modern and responsive user interface for a seamless experience across devices.",
  },
  {
    slug: "sosniak-portfolio",
    name: "SosniakPortfolio",
    description:
      "A personal portfolio website built for Sebastian Sośniak with Astro, TypeScript and Tailwind CSS. Focused on fast, content-first delivery with a clean, modern presentation of projects and experience.",
    lang: "Astro, TypeScript",
    links: {
      github: "https://github.com/Brbn-jpg/sosniak-portfolio",
      demo: "https://metricmind.pl",
      demoLabel: "Live",
      noFreeHostingWarning: true,
    },
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    longDescription:
      "A bespoke portfolio site designed and built for Sebastian Sośniak. The project uses Astro's island architecture for an extremely fast, mostly-static site, with TypeScript for type-safe components and Tailwind CSS for styling. It is deployed on Vercel with continuous delivery from GitHub, and emphasizes a content-first layout that highlights projects, skills, and contact information.",
  },
  {
    slug: "strefa-sa",
    name: "StrefaSA",
    description:
      "A modern marketing website and in-game store for a Polish MTA:SA server. As a co-owner and co-creator, I developed a cinematic landing page with live statistics and a Stripe-integrated shop.",
    lang: "Astro, TypeScript",
    links: {
      demo: "https://www.strefasa.pl",
      demoLabel: "Live",
      noFreeHostingWarning: true,
    },
    technologies: ["Astro", "TypeScript", "Vercel", "Stripe Checkout", "Vanilla CSS"],
    longDescription:
      "StrefaSA is a comprehensive web presence for an MTA:SA community where I serve as a co-owner and lead developer. It combines a high-performance marketing landing page built with Astro and a custom in-game store. The site emphasizes cinematic visuals and real-time data to build trust with players, while the shop integration provides a seamless path for purchasing in-game assets via Stripe.",
  },
];
