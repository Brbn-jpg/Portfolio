import React, { useState } from "react";
import { Terminal, Send, X } from "lucide-react";

const ContactForm = ({ formspreeId }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
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

  if (!isFormVisible) {
    return (
      <button
        onClick={() => setIsFormVisible(true)}
        className="flex items-center gap-2 border border-slate-700 text-slate-300 px-6 py-3 font-bold hover:border-green-500 hover:text-green-400 transition-colors rounded-sm font-mono"
      >
        <Terminal size={20} />
        CONTACT_ME.sh
      </button>
    );
  }

  return (
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
  );
};

export default ContactForm;
