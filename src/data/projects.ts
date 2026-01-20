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
    ],
    longDescription:
      "This project explores local LLMs in a Java ecosystem. The Spring Boot server uses Ollama for a RESTful API to the Llama2 model, featuring real-time streaming via SSE, persistent chat history, and a RAG pipeline for document-based Q&A. The modular design allows easy expansion.",
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
    slug: "gamelog",
    name: "Gamelog",
    description:
      "A full-stack game backlog management system. Organize your video game library using a Kanban-style dashboard, track playtime, rate games, and connect with other users.",
    lang: "Java, React",
    links: {
      github: "https://github.com/Brbn-jpg/GameBacklogTracker",
      demo: "https://game-backlog-tracker-omega.vercel.app/",
    },
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Redis"],
    longDescription:
      "Gamelog is a full-stack web application that helps users organize their video game libraries. It features a Kanban-style dashboard for managing progress, advanced search capabilities, social features like friend requests, and secure user accounts.",
  },
];
