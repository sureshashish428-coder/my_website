"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center bg-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue bg-brand-light-blue px-3.5 py-1.5 rounded-full mb-6">
            Ecosystem Architecture
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-navy leading-[1.08] tracking-tight mb-6">
            BUILDING DIGITAL THINGS THAT MOVE BUSINESS FORWARD<span className="text-brand-blue">.</span>
          </h1>

          <p className="text-lg text-text-muted max-w-xl mb-10 leading-relaxed">
            Software, websites, applications, design and digital growth — crafted as one connected digital experience.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-brand-blue text-white text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(20,104,232,0.3)] hover:scale-105 transition-all"
            >
              Start a Project →
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full border border-brand-navy/15 text-brand-navy text-sm font-semibold hover:bg-surface-subtle transition-all"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        {/* Right Column: Living Character Desk Placeholder */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md rounded-3xl bg-surface-subtle border border-black/5 flex flex-col items-center justify-center p-8 text-center shadow-inner">
            <div className="w-24 h-24 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 text-brand-blue">
              {/* Blob character placeholder */}
              <div className="w-16 h-20 rounded-full bg-gradient-to-b from-[#1468E8] to-[#07152F] shadow-lg animate-bounce" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
              [ Blob Mascot Asset Space ]
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}