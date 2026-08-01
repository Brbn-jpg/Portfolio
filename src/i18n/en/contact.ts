/**
 * Every string rendered by `ContactForm.jsx`. Passed to the island as
 * `t.contact` ONLY — never the whole `Dict` — because Rollup cannot tree-shake
 * `dicts[lang]`, so importing a dictionary inside the island would drag both
 * locales' full prose (every page, every project) into the client bundle.
 * `t.contact` alone is a few hundred bytes of serialized props.
 *
 * `[ ENG ]` / `[ PL ]` CV-download labels are not dictionary entries: they are
 * locale codes rendered as terminal tokens, not prose, exactly like
 * `FOCUS`/`REGULAR`/`BASIC` — the island reorders them itself based on the
 * `locale` prop instead of translating them.
 */
const contact = {
  errors: {
    generic: "Oops! There was a problem sending your message.",
  },
  status: {
    sending: "Sending...",
    success: "Message sent successfully!",
  },

  openButton: "CONTACT_ME.sh",
  closeButton: "Close",
  sendButton: "Send",

  cvButton: {
    downloadTitle: "Download CV",
    downloadLabel: "DOWNLOAD_CV",
    langPrefix: "LANG:",
    cancelLabel: "Cancel",
  },

  social: {
    githubTitle: "GitHub Profile",
    linkedinTitle: "LinkedIn Profile",
  },

  emailLabel: "Email address",
  emailPlaceholder: "your-email@example.com",
  messageLabel: "Message",
  messagePlaceholder: "Your message...",

  notice: {
    marker: "[NOTICE]",
    intro:
      "Sending this form passes your email address and message to Formspree Inc. (USA), which forwards them to my inbox.",
    controller: "Controller: Jakub Kuźnicki.",
    basis: "Basis: legitimate interest in replying (GDPR art. 6(1)(f)).",
    retention: "Kept up to 12 months.",
    linkText: "Full privacy policy",
  },
};

export type ContactDict = typeof contact;
export default contact;
