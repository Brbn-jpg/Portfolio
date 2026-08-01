import type { CommonDict } from "../en/common";

/** Typed against English: a missing key is a build error, never a silent fallback. */
const common: CommonDict = {
  backToHome: "Powrót do strony głównej",

  footer: {
    aboutLabel: "O mnie",
    privacyLabel: "Prywatność",
    employedStatus: "Zatrudniony",
  },

  langSwitcherLabel: "lang:",
};

export default common;
