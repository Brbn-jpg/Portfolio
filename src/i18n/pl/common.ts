import type { CommonDict } from "../en/common";

/** Typed against English: a missing key is a build error, never a silent fallback. */
const common: CommonDict = {
  backToHome: "Powrót do strony głównej",

  homeLabel: "Przejdź do strony głównej",
  primaryNavigation: "Główna nawigacja",
  navigation: {
    projects: "Projekty",
    experience: "Doświadczenie",
    about: "O mnie",
    contact: "Kontakt",
  },

  footer: {
    aboutLabel: "O mnie",
    privacyLabel: "Prywatność",
    employedStatus: "Zatrudniony",
  },

  langSwitcherLabel: "lang:",
};

export default common;
