export const allProjects = [
  {
    slug: "llama-talks",
    name: "LlamaTalks",
    description:
      "A Spring Boot-based chatbot application leveraging LangChain4j and Ollama for advanced conversational AI with Retrieval-Augmented Generation (RAG) capabilities. It supports streaming responses, conversation management, document ingestion, and persistent chat history.",
    lang: "Java",
    link: "https://github.com/Brbn-jpg/llama-talks",
    technologies: [
      "Java",
      "Spring Boot",
      "LangChain4j",
      "Ollama",
      "RAG",
      "SSE",
    ],
    longDescription:
      "This project was developed to explore the capabilities of local Large Language Models (LLMs) within a robust Java ecosystem. The core of the application is a Spring Boot server that provides a RESTful API for interacting with the Llama2 model via Ollama. Key features include real-time streaming of responses using Server-Sent Events (SSE), persistent conversation history, and a Retrieval-Augmented Generation (RAG) pipeline for answering questions based on ingested documents. The architecture is designed to be modular, allowing for easy extension with new models or data sources.",
  },
  {
    slug: "cibaria",
    name: "Cibaria",
    description:
      "A full-stack web application for recipe management. The backend is powered by Spring Boot, providing robust RESTful APIs, while the frontend is built with Angular for a dynamic user experience.",
    lang: "Java, Angular",
    link: "https://github.com/Brbn-jpg/Recipe-management-app",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "REST API"],
    longDescription:
      "Cibaria is a comprehensive solution for recipe enthusiasts. It allows users to create, store, and search for recipes. The backend, built with Spring Boot, exposes a secure and efficient REST API for all data operations. The frontend, developed using Angular, offers a modern and responsive user interface for a seamless experience across devices.",
  },
  {
    slug: "notepad-php",
    name: "Notepad-php",
    description:
      "A server-side rendered notepad application developed with pure PHP. This project demonstrates foundational web development principles, including state management and server-side logic.",
    lang: "PHP",
    link: "https://github.com/Brbn-jpg/Notepad-php",
    technologies: ["PHP", "HTML", "CSS", "Vue"],
    longDescription:
      "This project is a back-to-basics implementation of a simple web-based notepad. It demonstrates foundational web development principles, including state management and server-side logic, using only pure PHP without any frameworks.",
  },
];
