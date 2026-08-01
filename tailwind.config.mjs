export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // "JetBrains Mono Variable" is the family name @fontsource-variable
        // registers; naming only the non-variable family here would silently
        // apply nothing.
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', "ui-monospace", "monospace"],
        // Inter used to be listed here but was never loaded anywhere, so body
        // text has always rendered in the system sans. Declared explicitly now:
        // the de facto rendering becomes the intended one, at zero bytes.
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
