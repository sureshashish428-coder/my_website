"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07152F] text-white pt-24 pb-8 overflow-hidden border-t border-white/10 selection:bg-brand-blue selection:text-white">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-56 bg-[radial-gradient(ellipse_at_top,rgba(20,104,232,0.22)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: CTA + Quick System Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono mb-4 text-[#EAF3FF]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ECOSYSTEM OPERATIONAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-xl text-white">
              Ready to engineer your next digital breakthrough?
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue text-white text-sm font-semibold tracking-wider uppercase transition-all shadow-[0_4px_25px_rgba(20,104,232,0.35)] hover:shadow-[0_4px_35px_rgba(20,104,232,0.6)] hover:scale-105"
          >
            <span>Start Building</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Middle Section: Landscape Logo + Directory */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-16 text-sm">
          {/* Col 1: Big Landscape Logo Area */}
          <div className="col-span-2 md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Landscape Logo Display */}
              <div className="relative w-56 sm:w-72 h-16 sm:h-20 mb-6">
                <Image
                  src="/logo-landscape.png"
                  alt="AKSBit Systems"
                  fill
                  priority
                  className="object-contain object-left"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
                {/* Fallback Text if logo image isn't placed yet */}
                <span className="text-2xl font-black tracking-tight text-white block">
                  AKSBit<span className="text-brand-blue"> Systems</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-mono">
                Innovate • Build • Empower • Deliver. Smart solutions crafted for sustainable business growth.
              </p>
            </div>

            <p className="text-[11px] font-mono text-gray-500 mt-6 md:mt-0 tracking-wider">
              BASED IN INDIA • SERVING GLOBALLY
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="col-span-1 md:col-span-3 md:pl-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold mb-4">
              Architecture
            </h4>
            <ul className="space-y-3 font-medium text-gray-300 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-brand-blue transition-colors">01. Overview</a>
              </li>
              <li>
                <a href="#story" className="hover:text-brand-blue transition-colors">02. The Journey</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">03. Digital Workshop</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-blue transition-colors">04. Selected Work</a>
              </li>
              <li>
                <a href="#tech" className="hover:text-brand-blue transition-colors">05. Workbench</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-3 font-medium text-gray-400 text-xs sm:text-sm">
              <li>Software Systems</li>
              <li>Web & Apps</li>
              <li>ERP & CRM</li>
              <li>UI/UX Design</li>
              <li>AI Automations</li>
            </ul>
          </div>

          {/* Col 4: Scroll To Top Action */}
          <div className="col-span-2 md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold mb-4">
                Connect
              </h4>
              <p className="text-xs font-mono text-gray-400">
                contact@aksbit.com
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-3.5 rounded-full border border-white/10 hover:border-brand-blue hover:text-brand-blue hover:bg-white/5 transition-all text-gray-400 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Section: Fluid Responsive Typographic Branding with Animated Reveal */}
        <div className="pt-12 pb-6 border-t border-white/5 select-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-between items-center tracking-tighter font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-white/5 leading-none"
            style={{ fontSize: "clamp(2.5rem, 8.8vw, 9.5rem)" }}
          >
            <span>A</span>
            <span>K</span>
            <span>S</span>
            <span>B</span>
            <span>I</span>
            <span>T</span>
            <span className="text-brand-blue/60 ml-2 sm:ml-4">S</span>
            <span>Y</span>
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>M</span>
            <span>S</span>
          </motion.div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] font-mono text-gray-500">
          <p>© {new Date().getFullYear()} AKSBit Systems. All rights reserved.</p>
          <p className="tracking-widest uppercase">Smart Solutions for a Better Tomorrow</p>
        </div>

      </div>
    </footer>
  );
}