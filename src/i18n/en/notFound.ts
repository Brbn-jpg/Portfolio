/**
 * Dictionary for `/404` (`src/components/pages/notFoundPage.astro`).
 *
 * `terminal.prefix`/`suffix` (`find / -name "` / `"`) are literal shell syntax,
 * not prose — no more translatable than an HTML tag name — so they stay
 * identical in both locales; only the quoted search target and the error
 * message (real, human-readable output) are translated.
 */
const notFound = {
  exeLabel: "error_404.exe",
  terminal: {
    prefix: 'find / -name "',
    target: "this-page",
    suffix: '"',
    error: "find: no such file or directory",
  },
  body: "The page you're looking for doesn't exist or was moved.",
};

export type NotFoundDict = typeof notFound;
export default notFound;
