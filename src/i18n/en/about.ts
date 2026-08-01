/**
 * Dictionary for /about (`src/components/pages/aboutPage.astro`).
 *
 * Fixed-length lists (interest cards, timeline entries, gear labels, FAQ items)
 * are keyed `Record<Id, …>` over a declared id union rather than plain arrays.
 * A `Dict`-typed Polish file enforces element *type* but not array *length* —
 * a keyed record makes a translator silently dropping an entry a compile error
 * instead of a missing card in production.
 *
 * Hardware model names (`Ryzen 7 5800X3D`, `NZXT H7 Flow`, `Romet Mustang M1 CS`,
 * `Dark Project Nexus`, the MacBook spec line, …) are deliberately NOT dictionary
 * keys — they're identical in both locales, so they're hardcoded directly in
 * `aboutPage.astro` as data. A dictionary entry is an invitation to translate.
 */

export type InterestId = "techHardware" | "ragLlm" | "cycling" | "gym";
export type TimelineId = "yearOne" | "yearTwo" | "yearThree" | "yearFour" | "present" | "future";
export type PhilosophyId = "cleanCode" | "continuousLearning" | "problemSolving";
export type SetupImageId = "fullSetup" | "pc" | "mnk";
export type GearLabelId =
  | "cpu"
  | "ram"
  | "mobo"
  | "gpu"
  | "ssd1"
  | "ssd2"
  | "case"
  | "cooler"
  | "keyboard"
  | "mouse"
  | "monitors"
  | "microphone"
  | "headphones";
export type FaqId =
  | "whoIsBrbn"
  | "techStack"
  | "ragExperience"
  | "location"
  | "openToWork"
  | "largestProject"
  | "whyBrbnJpg";

export interface AboutCard {
  title: string;
  body: string;
}

export interface TimelineEntry {
  title: string;
  body: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

const about = {
  backToHome: "Back to Home",

  header: {
    title: "About Me",
    subtitle: "A little more about my journey, interests, and the gear I use.",
  },

  whoIAm: {
    heading: "Who I Am",
    paragraphs: [
      "I'm Jakub Kuźnicki — a Computer Science engineer working on backend development and system architecture. Since June 2026 I've been a Junior Java Developer at Netcompany, building enterprise systems in Java and Spring Boot.",
      "Before that, from March to June 2025, I interned as a Backend Developer at Paweł Weselak — Pragmatyczne Programowanie. I built LangChain document ingestion pipelines and RAG systems on LangChain4j and Spring Boot, and handled containerisation and deployment of LLM-driven processing.",
      "Right now I'm moving toward DevOps and infrastructure. I run a bare-metal server at home and use it to get hands-on with networking and virtualisation.",
    ] as readonly [string, string, string],
  },

  interests: {
    heading: "My Interests",
    bikeAlt: "My Romet Mustang bike",
    cards: {
      techHardware: {
        title: "Tech & Hardware",
        body: "I love building PCs and I'm passionate about hardware specifications, especially GPUs. I'm always keeping up with the latest tech news and innovations.",
      },
      ragLlm: {
        title: "RAG & LLM",
        body: "I enjoy building data extraction systems based on AI models. I've primarily worked with LangChain4j and LangChain, where I've built a complete ingestion pipeline.",
      },
      cycling: {
        title: "Cycling",
        body: 'My bike: Romet Mustang M1 CS 19" 29". I enjoy riding both off-road and road routes.',
      },
      gym: {
        title: "Gym",
        body: "I've recently started my journey with strength training. I find that the discipline required in the gym complements the focus needed for development. It's a great way to balance a sedentary lifestyle, and seeing tangible results is a huge motivator.",
      },
    } satisfies Record<InterestId, AboutCard>,
  },

  timeline: {
    heading: "My Journey",
    entries: {
      yearOne: {
        title: "1st Year: Foundations",
        body: "Grasped the low-level data representation: binary arithmetic, bitwise operations, and boolean algebra. Simultaneously built a strong foundation in Object-Oriented Programming (OOP) using C#, focusing on clean code structures and type safety.",
      },
      yearTwo: {
        title: "2nd Year: Algorithms & Full-Stack",
        body: "Mastered standard Data Structures and Algorithms. Transitioned from theory to practice by developing desktop applications. Learned to design relational databases and handle application logic efficiently.",
      },
      yearThree: {
        title: "3rd Year: Specialization & Practice",
        body: "Pivoted to the Java ecosystem to specialize in Enterprise Backend. Co-developed 'Cibaria' using Spring Boot and Angular, implementing industry-standard Git workflows.",
      },
      yearFour: {
        title: "4th Year: Thesis & Advanced Projects",
        body: "Jakub Kuźnicki defended his Engineering Thesis in the final year of his Computer Science degree. I then built 'Gamelog', a full-stack game backlog manager where I mastered Redis for high-performance data caching, and explored the intersection of backend and AI with 'LlamaTalks' – integrating LLMs (LangChain) with Java-based systems and vector databases.",
      },
      present: {
        title: "Present: Professional Career (Since 2026)",
        body: "Jakub Kuźnicki has worked as a Junior Java Developer at Netcompany since June 2026. I apply my engineering foundations to complex, large-scale systems while continuing to explore cutting-edge technologies like RAG and DevOps in my personal time.",
      },
      future: {
        title: "Future: Growth & Specialization",
        body: "I plan to pursue an extramural (weekend) Master's degree, ensuring full availability during business hours while deepening my CS expertise and specializing further in scalable architectures.",
      },
    } satisfies Record<TimelineId, TimelineEntry>,
  },

  philosophy: {
    heading: "My Philosophy",
    cards: {
      cleanCode: {
        title: "Clean Code",
        body: "I believe in the DRY (Don't Repeat Yourself) principle. I write code that is not only functional but also clean, maintainable, and easy for others to understand.",
      },
      continuousLearning: {
        title: "Continuous Learning",
        body: "The tech world is constantly evolving, and I'm committed to growing with it. Every project is an opportunity to learn something new and improve my skills.",
      },
      problemSolving: {
        title: "Problem-Solving",
        body: "I see myself as a problem-solver first. I enjoy analyzing complex challenges and designing elegant, efficient solutions.",
      },
    } satisfies Record<PhilosophyId, AboutCard>,
  },

  mySetup: {
    heading: "My Setup",
    imageAlts: {
      fullSetup: "Full desk setup with dual monitors, custom keyboard, and PC tower",
      pc: "NZXT H7 Flow PC case with Ryzen 7 5800X3D and RTX 4070 Super Aorus Master inside",
      mnk: "Custom mechanical keyboard with BoW keycaps and Dark Project Nexus mouse",
    } satisfies Record<SetupImageId, string>,
  },

  gearList: {
    heading: "Gear List",
    pcHeading: "PC",
    peripheralsHeading: "Peripherals",
    laptopHeading: "Laptop",
    labels: {
      cpu: "CPU",
      ram: "RAM",
      mobo: "MOBO",
      gpu: "GPU",
      ssd1: "SSD 1",
      ssd2: "SSD 2",
      case: "Case",
      cooler: "Cooler",
      keyboard: "Keyboard",
      mouse: "Mouse",
      monitors: "Monitors",
      microphone: "Microphone",
      headphones: "Headphones",
    } satisfies Record<GearLabelId, string>,
  },

  faq: {
    heading: "FAQ.sh",
    subtitle: "Questions I get asked often, answered directly.",
    items: {
      whoIsBrbn: {
        question: "Who is Jakub Kuźnicki (brbn-jpg)?",
        answer:
          "Jakub Kuźnicki (handle: brbn-jpg) is a Java backend developer based in Warsaw, Poland, with an Engineer's degree in Computer Science. I have worked as a Junior Java Developer at Netcompany since June 2026, after a backend internship where I built LangChain ingestion pipelines and RAG systems.",
      },
      techStack: {
        question: "What is your main technology stack?",
        answer:
          "Jakub Kuźnicki's core stack is Java and Spring Boot, backed by PostgreSQL and Redis for data, Docker for packaging, and REST APIs as the default interface between services. For LLM work I use LangChain4j on the JVM and LangChain in Python. I also build frontends in Astro, React, Angular, and Vue when a project needs one, but backend is where I do my best work.",
      },
      ragExperience: {
        question: "What RAG and LLM experience do you have?",
        answer:
          "Jakub Kuźnicki's RAG and LLM experience started with a backend internship at Paweł Weselak — Pragmatyczne Programowanie (March–June 2025), where I built LangChain ingestion pipelines and handled containerised deployment of LLM-driven extraction. I continued independently with LlamaTalks, a Spring Boot and LangChain4j chatbot that runs local models through Ollama, ingests documents into a vector store, and streams responses over SSE.",
      },
      location: {
        question: "Where are you based, and do you work remotely?",
        answer:
          "Jakub Kuźnicki is based in Warsaw, Poland, and works out of Netcompany's Warsaw office. I'm comfortable with on-site, hybrid, and fully remote setups, and I work in Polish (native) and English (professional).",
      },
      openToWork: {
        question: "Are you open to new opportunities?",
        answer:
          "Jakub Kuźnicki is currently employed at Netcompany and not actively job-hunting, but I read every message that comes in. If you have a backend or AI-engineering role involving Java, Spring Boot, or RAG, use the contact form on this site and I'll get back to you.",
      },
      largestProject: {
        question: "What is the largest project you have built?",
        answer:
          "Jakub Kuźnicki's largest project is todrawn.com, a live interactive whiteboard SaaS. It's built with Java 21 and Spring Boot on the backend, Next.js, React, and TypeScript on the frontend, and uses PostgreSQL, Redis, WebSockets, Stripe, Docker, and Google Cloud Run.",
      },
      whyBrbnJpg: {
        question: 'Why "brbn-jpg"?',
        answer:
          "Jakub Kuźnicki and brbn-jpg are the same person. I've used the handle brbn-jpg online for years, and it's the name of my GitHub account — the handle is on github.com/Brbn-jpg, the name is on my CV.",
      },
    } satisfies Record<FaqId, FaqEntry>,
  },
};

export type AboutDict = typeof about;
export default about;
