import type { NotFoundDict } from "../en/notFound";

/**
 * Typed against English: a missing key is a build error, never a silent fallback.
 *
 * `terminal.error` uses the real GNU findutils Polish locale string, so the
 * simulated terminal output stays authentic instead of reading like a
 * word-for-word translation of the English message.
 */
const notFound: NotFoundDict = {
  exeLabel: "błąd_404.exe",
  terminal: {
    prefix: 'find / -name "',
    target: "ta-strona",
    suffix: '"',
    error: "find: nie znaleziono takiego pliku ani katalogu",
  },
  body: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
};

export default notFound;
