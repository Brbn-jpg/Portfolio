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
    slug: "notepad-php",
    name: "Notepad-php",
    description:
      "A server-side rendered notepad application developed with pure PHP. This project demonstrates foundational web development principles, including state management and server-side logic.",
    lang: "PHP",
    links: {
      github: "https://github.com/Brbn-jpg/Notepad-php",
    },
    technologies: ["PHP", "HTML", "CSS", "Vue"],
    longDescription:
      "This project is a back-to-basics implementation of a simple web-based notepad. It demonstrates foundational web development principles, including state management and server-side logic, using only pure PHP without any frameworks. A touch of Vue.js was added for minor client-side reactivity.",
  },
];
