import React, { useState } from "react";
import { Terminal, Send, X, Github, Linkedin, Download } from "lucide-react";

const ContactForm = ({ formspreeId }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showCvOptions, setShowCvOptions] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
        setTimeout(() => {
          setIsFormVisible(false);
          setStatus("");
        }, 3000);
      } else {
        const responseData = await response.json();
        setStatus(
          responseData.errors?.map((e) => e.message).join(", ") ||
            "Oops! There was a problem."
        );
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  const renderCvButton = (isMobileColumn = false) => {
    if (!showCvOptions) {
      return (
        <button
          onClick={() => setShowCvOptions(true)}
          className={`flex items-center justify-center gap-2 border border-green-500/50 text-green-400 font-bold hover:border-green-500 hover:bg-green-500/10 transition-colors rounded-sm font-mono whitespace-nowrap ${isMobileColumn ? 'p-[13px] shadow-sm' : 'px-6 py-3'}`}
          title="Download CV"
        >
          <Download size={20} />
          {!isMobileColumn && "DOWNLOAD_CV"}
        </button>
      );
    }

    return (
      <div className={`flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300 ${isMobileColumn ? 'flex-col' : ''}`}>
        {!isMobileColumn && <span className="text-slate-500 font-mono text-xs hidden sm:inline mr-1">LANG:</span>}
        <a
          href="/cv/cv_eng.pdf" 
          download="Jakub_Kuznicki_CV_ENG.pdf"
          className="flex items-center justify-center border border-green-500/30 text-green-400 px-4 py-3 font-bold hover:border-green-500 hover:bg-green-500/10 transition-colors rounded-sm font-mono whitespace-nowrap text-sm"
        >
          [ ENG ]
        </a>
        <a
          href="/cv/cv_pl.pdf" 
          download="Jakub_Kuznicki_CV_PL.pdf"
          className="flex items-center justify-center border border-green-500/30 text-green-400 px-4 py-3 font-bold hover:border-green-500 hover:bg-green-500/10 transition-colors rounded-sm font-mono whitespace-nowrap text-sm"
        >
          [ PL ]
        </a>
        <button
          onClick={() => setShowCvOptions(false)}
          className="flex items-center justify-center text-slate-500 hover:text-slate-300 p-3 transition-colors"
          aria-label="Cancel"
        >
          <X size={20} />
        </button>
      </div>
    );
  };

  return (
    <div className={`flex ${isFormVisible ? "flex-col lg:flex-row items-center lg:items-start" : "flex-row flex-wrap items-center"} justify-center gap-4`}>
      <div className={`flex ${isFormVisible ? "flex-col w-full lg:w-auto" : "flex-row"} gap-4`}>
        <a href="https://github.com/Brbn-jpg" target="_blank" rel="noreferrer" 
           className="flex items-center justify-center border border-slate-700 text-slate-400 p-[13px] hover:border-green-500 hover:text-green-400 transition-colors rounded-sm shadow-sm"
           title="GitHub Profile">
          <Github size={20} />
          <span className="sr-only">GitHub Profile</span>
        </a>
        <a href="https://www.linkedin.com/in/jakub-kuźnicki-5383972bb" target="_blank" rel="noreferrer" 
           className="flex items-center justify-center border border-slate-700 text-slate-400 p-[13px] hover:border-blue-500 hover:text-blue-400 transition-colors rounded-sm shadow-sm"
           title="LinkedIn Profile">
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn Profile</span>
        </a>
        {isFormVisible && renderCvButton(true)}
      </div>

      {!isFormVisible ? (
        <div className="flex flex-row flex-wrap gap-4">
          <button
            onClick={() => setIsFormVisible(true)}
            className="flex items-center gap-2 border border-slate-700 text-slate-300 px-6 py-3 font-bold hover:border-green-500 hover:text-green-400 transition-colors rounded-sm font-mono whitespace-nowrap"
          >
            <Terminal size={20} />
            CONTACT_ME.sh
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
          <input
            type="email"
            name="email"
            placeholder="your-email@example.com"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-sm px-3 py-2 mb-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows="4"
            className="w-full bg-slate-800 border border-slate-700 rounded-sm px-3 py-2 mb-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <div className="flex justify-between items-center gap-4">
            <p className="text-sm text-slate-400">{status}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="flex items-center gap-2 bg-slate-700 text-slate-300 px-4 py-2 font-bold hover:bg-slate-600 transition-colors rounded-sm"
              >
                <X size={16} /> Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 font-bold hover:bg-green-500 transition-colors rounded-sm"
              >
                <Send size={16} /> Send
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
