"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-cream-100 p-8 rounded-xs border border-cream-300 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-xs bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl text-espresso-950 font-medium">
          Thank you, {formData.name}
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
          Your enquiry regarding <strong className="text-espresso-950 font-medium">{formData.topic}</strong> has been received by our Soho team. We will respond to <strong className="text-espresso-950 font-medium">{formData.email}</strong> shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", topic: "general", message: "" });
          }}
          className="mt-4 text-xs text-caramel-700 underline font-medium cursor-pointer font-mono"
        >
          Send another message &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xs border border-cream-200 shadow-xs space-y-6">
      <div className="space-y-1">
        <h2 className="font-serif text-2xl text-espresso-950 font-medium">Send an Enquiry</h2>
        <p className="text-xs text-charcoal-500 font-light">
          We welcome press enquiries, private courtyard room hire questions, and general coffee talk.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-wider text-charcoal-700 font-medium block font-mono">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Oliver Sinclair"
            className="w-full px-3.5 py-2.5 bg-cream-50/50 border border-cream-200 rounded-xs text-xs text-espresso-950 placeholder:text-charcoal-400 focus:outline-none focus:border-caramel-500"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-wider text-charcoal-700 font-medium block font-mono">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="oliver@example.co.uk"
            className="w-full px-3.5 py-2.5 bg-cream-50/50 border border-cream-200 rounded-xs text-xs text-espresso-950 placeholder:text-charcoal-400 focus:outline-none focus:border-caramel-500"
          />
        </div>
      </div>

      {/* Topic */}
      <div className="space-y-1.5">
        <label htmlFor="topic" className="text-xs uppercase tracking-wider text-charcoal-700 font-medium block font-mono">
          Enquiry Subject
        </label>
        <select
          id="topic"
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-cream-50/50 border border-cream-200 rounded-xs text-xs text-espresso-950 focus:outline-none focus:border-caramel-500 cursor-pointer font-mono"
        >
          <option value="general">General Coffee &amp; Visit Enquiry</option>
          <option value="private-hire">Private Event &amp; Courtyard Space Hire</option>
          <option value="press">Press, Media &amp; Editorial Photography</option>
          <option value="wholesale">Wholesale &amp; Roaster Collaborations</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-wider text-charcoal-700 font-medium block font-mono">
          Your Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How may our Soho team assist you today?"
          className="w-full px-3.5 py-2.5 bg-cream-50/50 border border-cream-200 rounded-xs text-xs text-espresso-950 placeholder:text-charcoal-400 focus:outline-none focus:border-caramel-500 resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-espresso-900 hover:bg-caramel-700 text-cream-50 font-medium px-8 py-3.5 rounded-xs text-xs uppercase tracking-widest transition-colors cursor-pointer"
      >
        <span>Submit Enquiry</span>
        <Send className="w-3.5 h-3.5 text-caramel-300" />
      </button>
    </form>
  );
}
