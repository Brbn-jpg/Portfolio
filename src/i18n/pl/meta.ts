import type { MetaDict } from "../en/meta";

/**
 * Typed against the English module, so the compiler names every key this file
 * is missing. That is the completeness guarantee — there is no runtime fallback
 * to English, because a silent fallback is how half-translated sites ship.
 */
const meta: MetaDict = {
    home: {
      title: "Jakub Kuźnicki (brbn-jpg) — programista Java i systemów RAG",
      description:
        "Jakub Kuźnicki (brbn-jpg) — programista backendu Java z Warszawy. Buduję usługi w Spring Boot i systemy RAG/LLM. Projekty, CV i kontakt.",
    },
    about: {
      title: "O mnie — Jakub Kuźnicki, inżynier i programista Java",
      description:
        "Ścieżka zawodowa, podejście do inżynierii, sprzęt i FAQ. Jakub Kuźnicki — programista Java w Netcompany, na co dzień Spring Boot i systemy RAG.",
    },
    privacy: {
      title: "Polityka prywatności — brbn.pl",
      description:
        "Jakie dane zbiera brbn.pl (tylko to, co wpiszesz w formularzu), kto je przetwarza, jak długo są przechowywane i jakie masz prawa z RODO. Bez ciasteczek.",
    },
    notFound: {
      title: "404 — Nie znaleziono | brbn.pl",
      description: "Taka ścieżka nie istnieje na brbn.pl.",
    },
};

export default meta;
