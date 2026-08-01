import type { ContactDict } from "../en/contact";

/**
 * Typed against English: a missing key is a build error, never a silent fallback.
 *
 * The `[NOTICE]` block uses real RODO (GDPR) terminology rather than a literal
 * translation of the English legal phrasing: `[UWAGA]`, `Administrator`,
 * `Podstawa` (art. 6 ust. 1 lit. f RODO), `Przechowywanie`.
 */
const contact: ContactDict = {
  errors: {
    generic: "Ups! Wystąpił problem z wysłaniem wiadomości.",
  },
  status: {
    sending: "Wysyłanie...",
    success: "Wiadomość wysłana pomyślnie!",
  },

  openButton: "SKONTAKTUJ_SIE.sh",
  closeButton: "Zamknij",
  sendButton: "Wyślij",

  cvButton: {
    downloadTitle: "Pobierz CV",
    downloadLabel: "POBIERZ_CV",
    langPrefix: "JĘZYK:",
    cancelLabel: "Anuluj",
  },

  social: {
    githubTitle: "Profil GitHub",
    linkedinTitle: "Profil LinkedIn",
  },

  emailLabel: "Adres e-mail",
  emailPlaceholder: "twoj-email@przyklad.com",
  messageLabel: "Wiadomość",
  messagePlaceholder: "Twoja wiadomość...",

  notice: {
    marker: "[UWAGA]",
    intro:
      "Wysłanie tego formularza przekazuje Twój adres e-mail i treść wiadomości do Formspree Inc. (USA), które przesyła je do mojej skrzynki.",
    controller: "Administrator: Jakub Kuźnicki.",
    basis: "Podstawa: prawnie uzasadniony interes w udzieleniu odpowiedzi (art. 6 ust. 1 lit. f RODO).",
    retention: "Przechowywanie: do 12 miesięcy.",
    linkText: "Pełna polityka prywatności",
  },
};

export default contact;
