/**
 * Dictionary for /privacy (`src/components/pages/privacyPage.astro`).
 *
 * The font-mono SNAKE_CASE section labels (`TL;DR`, `CONTROLLER`, …) are NOT
 * dictionary keys — they're terminal-style labels, part of the site's visual
 * language, and stay in English in both locales per the plan. They're declared
 * once as a plain constant in `privacyPage.astro`.
 *
 * `articleRef` strings DO belong here: they're the GDPR/RODO article citation
 * shown next to each heading, and the citation *format* differs by locale
 * (`art. 13(1)(a)` in English prose vs `art. 13 ust. 1 lit. a RODO` in Polish
 * legal convention), so it's genuinely translatable content, not a label.
 *
 * Sentences that embed an inline link (mailto, external URL) are split into
 * "before"/"after" fields around the link so the component can insert the
 * actual `<a>` element; the link target/text itself (an email address or a
 * bare domain) doesn't need translating.
 *
 * TODO_VERIFY_FORMSPREE_DPA and TODO_VERIFY_VERCEL_LOG_RETENTION are
 * unverified legal claims — the visible marker text stays untranslated in
 * both locales (it's a literal flag, not prose) and the surrounding sentence
 * is translated around it. Do not resolve or remove these without doing the
 * actual verification described in the explanatory comments in
 * `privacyPage.astro`.
 */

export interface Processor {
  name: string;
  description: string;
}

export type ProcessorId = "formspree" | "google" | "vercel";
export type WhyReasonId = "reply" | "spamFilter" | "security";

const privacy = {
  backToHome: "Back to Home",

  header: {
    title: "Privacy Policy",
    lastUpdatedLabel: "Last updated:",
  },

  tldr: {
    body: "This site sets no cookies. There is no analytics, no tracking pixel, no fingerprinting. If you don't use the contact form, I learn nothing about you beyond what my hosting provider writes to its access log. If you do use it, I get your email address and your message, and nothing else.",
  },

  controller: {
    articleRef: "// art. 13(1)(a)",
    introPrefix: "This site is run by",
    introMiddle: ", based in Warsaw, Poland. For anything about this policy or your data, email",
    introSuffix: ".",
    noDpo: "No Data Protection Officer is appointed. Nothing this site does requires one under GDPR art. 37 — no public-sector processing, no large-scale systematic monitoring, no large-scale processing of special-category data.",
  },

  whatIsCollected: {
    articleRef: "// art. 13(1)(c)",
    ifNoForm: "If you never touch the contact form, nothing personal is collected here beyond what any web server logs by default: your IP address, the page requested, a timestamp and your user agent, written to Vercel Inc.'s access logs.",
    ifForm: "If you fill in the contact form, I additionally get whatever you type into it: an email address (so I can reply) and a message. That's the whole form — there is no name field, no phone field, no account. Formspree, which handles the submission, also automatically records the sender's IP address, timestamp and user agent for spam prevention.",
  },

  why: {
    articleRef: "// art. 13(1)(c)",
    reasons: {
      reply: "To reply to your message.",
      spamFilter: "To detect and filter spam or abusive submissions.",
      security: "To keep the site's infrastructure secure and operational (standard hosting logs).",
    } satisfies Record<WhyReasonId, string>,
  },

  legalBasis: {
    articleRef: "// art. 13(1)(c)",
    basisF: "Art. 6(1)(f) — legitimate interest in replying to correspondence sent to me, preventing spam, and keeping the site secure.",
    basisB: "Art. 6(1)(b) — where your message concerns a possible collaboration or engagement, processing is necessary to take steps you requested before entering into a contract.",
    noConsent: "Note what's not on that list: consent. Nobody ticks a box to send this form, and none is needed — see YOUR_RIGHTS below for what that means for you in practice.",
  },

  whoElseSeesIt: {
    articleRef: "// art. 13(1)(e)",
    processors: {
      formspree: {
        name: "Formspree Inc.",
        description: "(USA) — receives and forwards contact form submissions.",
      },
      google: {
        name: "Google LLC / Gmail",
        description: "(USA) — my inbox is a gmail.com address, so Formspree delivers your message there.",
      },
      vercel: {
        name: "Vercel Inc.",
        description: "(USA) — hosts this site and its access logs.",
      },
    } satisfies Record<ProcessorId, Processor>,
    noBroker: "No data broker, ad network, or analytics vendor ever sees anything, because none is used on this site.",
  },

  transfersOutsideEea: {
    articleRef: "// art. 13(1)(f)",
    intro: "All three processors above are US companies, so data described in this policy leaves the EEA. GDPR art. 46 requires an appropriate safeguard for that — typically Standard Contractual Clauses and/or certification under the EU-US Data Privacy Framework.",
    todoText: "— the specific mechanism Formspree's current Data Processing Addendum relies on has not been checked. This paragraph must name the actual mechanism and link Formspree's published DPA before this page is treated as final. The same open question applies to Google's and Vercel's current agreements; they should be reconfirmed at the same time rather than assumed.",
  },

  howLong: {
    articleRef: "// art. 13(2)(a)",
    formMessages: "Contact form messages: kept up to 12 months, then deleted. Once a thread is answered and done, I remove the submission from the Formspree dashboard rather than waiting out the full 12 months.",
    logsIntro: "Server access logs (Vercel):",
    todoText: "— the actual retention window for Vercel's hosting/access logs on this plan has not been confirmed and must be checked and stated here before publishing.",
  },

  yourRights: {
    articleRef: "// art. 13(2)(b),(d)",
    listedRights: "Under GDPR you can ask me to: access what I hold about you (art. 15), correct it (art. 16), delete it (art. 17), restrict processing (art. 18), or hand you a portable copy (art. 20).",
    objectionBefore: "Processing here rests on legitimate interest, not consent, so the mechanism that applies is",
    objectionBold: "objection under art. 21",
    objectionAfter: '— not "withdraw consent," because none was given. If you object, I stop processing unless I can show compelling legitimate grounds that override your rights, which for a routine email thread I usually won\'t have.',
    contactBeforeEmail: "Email",
    contactAfterEmail: "for any of the above. You can also complain to the Polish supervisory authority: Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa —",
  },

  voluntary: {
    articleRef: "// art. 13(2)(e)",
    body: "Using the contact form is entirely optional. Nothing on this site requires it — no account, no newsletter, no content gated behind it. If you don't submit it, none of the form-related data above ever exists.",
  },

  noAutomatedDecisions: {
    articleRef: "// art. 13(2)(f)",
    body: "No profiling and no automated decision-making within the meaning of GDPR art. 22 happens with anything you send me. Every message is read by a human — me — and answered, or not, by me.",
  },

  cookiesAndLocalStorage: {
    articleRef: "// ePrivacy",
    cookies: "Cookies: none, first-party or third-party. That's why there's no cookie banner — there is nothing here to consent to.",
    storageBeforeLocal: "Local storage: none either. The site writes nothing to",
    storageBetween: "or",
    storageAfter: ". Nothing about you is kept in your browser between page loads.",
  },

  thirdPartyRequests: {
    articleRef: "// art. 13(1)(e)",
    noRequests: "Loading any page on this site makes no requests to any third party at all. Fonts, images, styles and scripts are all served from this domain — nothing is fetched from Google Fonts or any other CDN.",
    githubBuildTime: "The recent-commit list on the homepage is fetched from the GitHub API when the site is built, not when you visit it. Your browser never contacts GitHub, so your IP address never reaches it.",
    formOnly: "The one exception is submitting the contact form, which sends your email address and message to Formspree Inc. as described above. Beyond that: no analytics beacon, no ad pixel, no third-party script runs on this site.",
  },

  externalLinks: {
    body: "This site links out to GitHub, LinkedIn, and live demos of some of my projects. Once you click through, you're on someone else's site, governed by their privacy policy, not this one. I have no control over what they collect.",
  },

  changes: {
    body: "I may update this policy as the site or its processors change — most likely as one of the checklist items at the top of this file gets resolved. The date at the top of this page is the last time it changed; check back if you want to be sure.",
  },
};

export type PrivacyDict = typeof privacy;
export default privacy;
