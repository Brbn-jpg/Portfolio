/**
 * The About page is deliberately short. It adds context around the work
 * without restating the homepage stack or turning a workstation into a second
 * portfolio.
 */
export interface AboutCard {
  title: string;
  body: string;
}

const about = {
  backToHome: "Back to home",

  header: {
    title: "About",
    subtitle: "The person behind the backend work.",
  },

  whoIAm: {
    heading: "A little context",
    paragraphs: [
      "I'm Jakub Kuźnicki, a Computer Science engineer working on backend development and system architecture. Since June 2026 I've been a Junior Java Developer at Netcompany.",
      "Before that, I spent a backend internship at Paweł Weselak — Pragmatyczne Programowanie (March–June 2025), building LangChain ingestion pipelines and RAG systems with LangChain4j and Spring Boot. I now keep that same curiosity close to the infrastructure layer through a bare-metal home server.",
    ] as readonly [string, string],
  },

  focus: {
    heading: "What I build",
    items: [
      {
        title: "Backend systems",
        body: "Java and Spring Boot services, backed by the data and deployment choices a product needs.",
      },
      {
        title: "RAG workflows",
        body: "Document ingestion and grounded answers with LangChain4j or LangChain, from experiments to working applications.",
      },
      {
        title: "Hands-on infrastructure",
        body: "A home bare-metal server gives me a practical place to learn networking, virtualisation and delivery.",
      },
    ] as readonly AboutCard[],
  },

  journey: {
    heading: "A short path",
    entries: [
      {
        title: "2025 · Backend internship",
        body: "LangChain ingestion pipelines, RAG systems, containerisation and LLM-driven data processing.",
      },
      {
        title: "2026 · Netcompany",
        body: "Junior Java Developer working on enterprise-level Java software.",
      },
      {
        title: "Now · Independent work",
        body: "todrawn.com, LlamaTalks and infrastructure experiments turn the same ideas into shipped projects.",
      },
    ] as readonly AboutCard[],
  },

  interests: {
    heading: "Away from the editor",
    bikeAlt: "My Romet Mustang bike",
    cards: {
      ragLlm: {
        title: "RAG & LLM",
        body: "I like taking an AI idea through ingestion, retrieval and an interface people can actually use.",
      },
      cycling: {
        title: "Cycling",
        body: 'My bike is a Romet Mustang M1 CS 19" 29". I ride both off-road and road routes.',
      },
      gym: {
        title: "Strength training",
        body: "Training is a useful counterweight to long hours at a screen.",
      },
    } satisfies Record<"ragLlm" | "cycling" | "gym", AboutCard>,
  },

  mySetup: {
    heading: "The workspace",
    lightboxClose: "Close image",
    imageAlts: {
      fullSetup: "Desk setup with dual monitors, a mechanical keyboard and a PC tower",
      pc: "NZXT H7 Flow PC case with Ryzen 7 5800X3D and RTX 4070 Super Aorus Master inside",
      mnk: "Custom mechanical keyboard with BoW keycaps and Dark Project Nexus mouse",
    },
  },

  gearList: {
    heading: "Gear, if you're curious",
    summary: "Open the hardware list",
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
    },
  },
};

export type AboutDict = typeof about;
export default about;
