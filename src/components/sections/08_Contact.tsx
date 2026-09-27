"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const intentOptions = [
  "I HAVE AN IDEA",
  "I NEED A DIGITAL PRODUCT",
  "I WANT TO GROW MY BUSINESS",
];

const buildOptions = [
  "Corporate Website",
  "E-Commerce Platform",
  "ERP / CRM System",
  "Custom Web Application",
  "Brand Identity",
  "Growth & SEO",
];

export default function Contact() {
  const [selectedIntent, setSelectedIntent] = useState<string>(intentOptions[0]);
  const [selectedBuild, setSelectedBuild] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleBuild = (option: string) => {
    setSelectedBuild((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-[#050D1A] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-widest">
            Step Into The Ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3">
            WHAT ARE WE BUILDING NEXT?
          </h2>
          <p className="text-gray-400 mt-4 text-base">Select your objective to begin the build sequence.</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">PROJECT REQUEST SENT</h3>
            <p className="text-gray-400 text-sm">We will review your system specifications and get back shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Objective Selector */}
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-4">
                1. Select Current Status
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {intentOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedIntent(opt)}
                    className={`py-4 px-4 rounded-2xl text-xs font-semibold tracking-wide border transition-all ${
                      selectedIntent === opt
                        ? "bg-brand-blue border-brand-blue text-white shadow-[0_0_20px_rgba(20,104,232,0.4)]"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: What to build */}
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-4">
                2. What Are You Looking To Build?
              </label>
              <div className="flex flex-wrap gap-3">
                {buildOptions.map((item) => {
                  const active = selectedBuild.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleBuild(item)}
                      className={`py-2.5 px-5 rounded-full text-xs font-mono tracking-wide border transition-all ${
                        active
                          ? "bg-white text-[#07152F] border-white font-bold"
                          : "bg-transparent border-white/15 text-gray-300 hover:border-white/30"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Progressive Input Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Tell Us About It</label>
              <textarea
                rows={4}
                placeholder="Give us a brief overview of the project vision or timeline..."
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-full bg-brand-blue text-white text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(20,104,232,0.4)] hover:shadow-[0_4px_35px_rgba(20,104,232,0.6)] hover:scale-[1.01] transition-all"
            >
              <span>SEND INQUIRY</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}