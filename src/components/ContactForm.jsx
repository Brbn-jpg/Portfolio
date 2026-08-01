import React, { useState, useEffect, useRef } from "react";
import { Terminal, Send, X, Github, Linkedin, Download } from "lucide-react";

// Anti-spam time guard: submissions faster than this are almost certainly a
// bot filling the form programmatically rather than a human typing.
const MIN_SUBMIT_DELAY_MS = 3000;

/**
 * `t` is `Dict["contact"]` ONLY, never the whole dictionary, and is passed as
 * a plain serialized prop — this component must never `import` a dictionary
 * module itself. Rollup cannot tree-shake `dicts[lang]`, so an in-island
 * import would pull every page's and every project's prose, in both
 * locales, into the client bundle just for ~20 short contact-form strings.
 *
 * `locale` drives the hidden `_language` field (so Formspree emails say which
 * language the sender was reading) and the CV button order: PL pages show
 * `[ PL ]` before `[ ENG ]`.
 */
const ContactForm = ({ formspreeId, locale, t }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showCvOptions, setShowCvOptions] = useState(false);
  const [status, setStatus] = useState("");

  // Ref (not state) so recording the timestamp never triggers a re-render.
  const mountedAtRef = useRef(null);

  useEffect(() => {
    if (isFormVisible) {
      mountedAtRef.current = Date.now();
    }
  }, [isFormVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Silently abort if the form was submitted implausibly fast — a visible
    // error here would just teach the bot to slow down.
    if (
      mountedAtRef.current !== null &&
      Date.now() - mountedAtRef.current < MIN_SUBMIT_DELAY_MS
    ) {
      return;
    }

    setStatus(t.status.sending);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus(t.status.success);
        form.reset();
        setTimeout(() => {
          setIsFormVisible(false);
          setStatus("");
        }, 3000);
      } else {
        let message = t.errors.generic;
        try {
          const responseData = await response.json();
          message =
            responseData.errors?.map((e) => e.message).join(", ") ||
            t.errors.generic;
        } catch {
          // Error body wasn't JSON (e.g. a 502 returning an HTML page) —
          // fall back to the generic message instead of throwing.
        }
        setStatus(message);
      }
    } catch (error) {
      setStatus(t.errors.generic);
    }
  };

  const renderCvButton = (isMobileColumn = false) => {
    if (!showCvOptions) {
      return (
        <button
          onClick={() => setShowCvOptions(true)}
          className={`flex items-center justify-center gap-2 border border-green-500/50 text-green-400 font-bold hover:border-green-500 hover:bg-green-500/10 transition-colors rounded-sm font-mono whitespace-nowrap ${isMobileColumn ? "p-[13px] shadow-sm" : "px-6 py-3"}`}
          title={t.cvButton.downloadTitle}
        >
          <Download size={20} />
          {!isMobileColumn && t.cvButton.downloadLabel}
        </button>
      );
    }

    // PL pages show `[ PL ]` before `[ ENG ]`; EN pages keep the reverse.
    const engLink = (
      <a
        key="eng"
        href="/cv/cv_eng.pdf"
        download="Jakub_Kuznicki_CV_ENG.pdf"
        className="flex items-center justify-center border border-green-500/30 text-green-400 px-4 py-3 font-bold hover:border-green-500 hover:bg-green-500/10 transition-colors rounded-sm font-mono whitespace-nowrap text-sm"
      >
        [ ENG ]
      </a>
    );
    const plLink = (
      <a
        key="pl"
        href="/cv/cv_pl.pdf"
        download="Jakub_Kuźnicki_CV_PL.pdf"
        className="flex items-center justify-center border border-green-500/30 text-green-400 px-4 py-3 font-bold hover:border-green-500 hover:bg-green-500/10 transition-colors rounded-sm font-mono whitespace-nowrap text-sm"
      >
        [ PL ]
      </a>
    );

    return (
      <div
        className={`flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300 ${isMobileColumn ? "flex-col" : ""}`}
      >
        {!isMobileColumn && (
          <span className="text-slate-500 font-mono text-xs hidden sm:inline mr-1">
            {t.cvButton.langPrefix}
          </span>
        )}
        {locale === "pl" ? [plLink, engLink] : [engLink, plLink]}
        <button
          onClick={() => setShowCvOptions(false)}
          className="flex items-center justify-center text-slate-500 hover:text-slate-300 p-3 transition-colors"
          aria-label={t.cvButton.cancelLabel}
        >
          <X size={20} />
        </button>
      </div>
    );
  };

  return (
    <div
      className={`flex ${isFormVisible ? "flex-col lg:flex-row items-center lg:items-start" : "flex-row flex-wrap items-center"} justify-center gap-4`}
    >
      <div
        className={`flex ${isFormVisible ? "flex-col w-full lg:w-auto" : "flex-row"} gap-4`}
      >
        <a
          href="https://github.com/Brbn-jpg"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center border border-slate-700 text-slate-400 p-[13px] hover:border-green-500 hover:text-green-400 transition-colors rounded-sm shadow-sm"
          title={t.social.githubTitle}
        >
          <Github size={20} />
          <span className="sr-only">{t.social.githubTitle}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jakub-kuźnicki-5383972bb"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center border border-slate-700 text-slate-400 p-[13px] hover:border-blue-500 hover:text-blue-400 transition-colors rounded-sm shadow-sm"
          title={t.social.linkedinTitle}
        >
          <Linkedin size={20} />
          <span className="sr-only">{t.social.linkedinTitle}</span>
        </a>
        {isFormVisible && renderCvButton(true)}
      </div>

      {!isFormVisible ? (
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <button
            onClick={() => setIsFormVisible(true)}
            className="flex items-center gap-2 border border-slate-700 text-slate-300 px-6 py-3 font-bold hover:border-green-500 hover:text-green-400 transition-colors rounded-sm font-mono whitespace-nowrap"
          >
            <Terminal size={20} />
            {t.openButton}
          </button>
          {renderCvButton(false)}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          className="w-full max-w-md border border-slate-700 rounded-sm p-4 bg-slate-950/50 font-mono relative"
        >
          {/* Honeypot: Formspree's own convention — it silently drops any
              submission where this field is non-empty. Positioned
              off-screen rather than display:none, because some bots
              deliberately skip display:none fields since that's the
              obvious honeypot tell. Real users never see or focus it. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] w-px h-px opacity-0"
          />
          <input
            type="hidden"
            name="_subject"
            value="brbn.pl — contact form"
          />
          {/* Lets Formspree emails show which locale the sender was reading. */}
          <input type="hidden" name="_language" value={locale} />

          <label htmlFor="contact-email" className="sr-only">
            {t.emailLabel}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-sm px-3 py-2 mb-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <label htmlFor="contact-message" className="sr-only">
            {t.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={t.messagePlaceholder}
            required
            rows={4}
            maxLength={5000}
            className="w-full bg-slate-800 border border-slate-700 rounded-sm px-3 py-2 mb-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <div className="text-xs text-slate-500 leading-relaxed border-l-2 border-slate-700 pl-3 mb-3">
            <span className="text-slate-400 font-bold">{t.notice.marker}</span>{" "}
            {t.notice.intro} {t.notice.controller} {t.notice.basis}{" "}
            {t.notice.retention}{" "}
            <a
              href="/privacy"
              className="text-green-400 underline hover:text-green-300"
            >
              {t.notice.linkText}
            </a>
          </div>

          <div className="flex justify-between items-center gap-4">
            <p className="text-sm text-slate-400" role="status" aria-live="polite">
              {status}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="flex items-center gap-2 bg-slate-700 text-slate-300 px-4 py-2 font-bold hover:bg-slate-600 transition-colors rounded-sm"
              >
                <X size={16} /> {t.closeButton}
              </button>
              <button
                type="submit"
                disabled={status === t.status.sending}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 font-bold hover:bg-green-500 transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} /> {t.sendButton}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
