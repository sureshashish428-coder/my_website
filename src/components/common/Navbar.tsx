"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles, Terminal, Phone, Mail } from "lucide-react";

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { id: "hero", label: "Overview", href: "/#hero" },
  { id: "story", label: "Journey", href: "/journey" },
  { id: "projects", label: "Work", href: "/#projects" },
  { id: "tech", label: "Workbench", href: "/#tech" },
  { id: "contact", label: "Connect", href: "/#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const targetId = link.href.replace("/#", "").replace("/", "");
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(targetId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8 pt-3 sm:pt-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* ================= ISLAND 1: PERMANENTLY TRANSPARENT LOGO (ZERO BG ALWAYS) ================= */}
          <div className="pointer-events-auto flex items-center bg-transparent border-0 shadow-none p-0">
            <a 
              href="/#hero" 
              onClick={() => handleLinkClick("hero")} 
              className="flex items-center gap-2.5 group select-none"
            >
              {/* Logo Image - No Box, No Background, Pure Glass Glow */}
              <img
                src="/logo-landscape.png"
                alt="AKSBit Logo"
                className="h-9 sm:h-11 w-auto object-contain block drop-shadow-[0_0_15px_rgba(20,104,232,0.6)] group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />

              {/* Glossy Brand Text */}
              <div className="flex items-center tracking-tight leading-none">
                <span className="text-white font-black text-base sm:text-xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
                  AKSBit
                </span>
                <span className="text-[#1468E8] font-bold text-base sm:text-xl ml-1 drop-shadow-[0_0_12px_rgba(20,104,232,0.8)]">
                  Systems
                </span>
              </div>
            </a>
          </div>

          {/* ================= ISLAND 2: DESKTOP NAV LINKS ================= */}
          <nav
            className={`hidden md:flex pointer-events-auto items-center gap-1 rounded-full border transition-all duration-300 p-1.5 ${
              scrolled
                ? "bg-[#071328]/85 backdrop-blur-2xl border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                : "bg-[#050D1A]/75 backdrop-blur-xl border-white/15 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
            }`}
          >
            {navLinks.map((link) => {
              const targetId = link.href.replace("/#", "").replace("/", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(targetId)}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? "bg-[#1468E8] text-white shadow-[0_0_18px_rgba(20,104,232,0.65)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* ================= ISLAND 3: CTA & MOBILE TOGGLE ================= */}
          <div className="pointer-events-auto flex items-center gap-2">
            <a
              href="/#contact"
              className="relative group overflow-hidden px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#1468E8] to-[#2563EB] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(20,104,232,0.45)] hover:shadow-[0_0_30px_rgba(20,104,232,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hidden sm:inline-flex items-center gap-2"
            >
              <span>Let&apos;s Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#071328]/95 backdrop-blur-xl border border-white/20 text-white hover:border-[#1468E8] hover:text-[#1468E8] shadow-lg transition-all active:scale-95"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ================= MOBILE SLIDE-DOWN DRAWER ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-3 top-18 z-50 p-5 bg-[#050D1A]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] md:hidden text-white"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#1468E8]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                  SYSTEM DIRECTORY
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const targetId = link.href.replace("/#", "").replace("/", "");
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleLinkClick(targetId)}
                    className={`px-3.5 py-2.5 rounded-2xl text-xs font-mono font-bold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-[#1468E8] text-white shadow-[0_0_20px_rgba(20,104,232,0.55)]"
                        : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-500"}`} />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 mt-2 space-y-1.5 text-[10px] font-mono text-gray-400">
                <a 
                  href="tel:7999492905" 
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1468E8]" />
                  <span>+91 7999492905</span>
                </a>
                <a 
                  href="mailto:info@aksbitsystems.in" 
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-[#1468E8]" />
                  <span>info@aksbitsystems.in</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#1468E8] to-[#2563EB] text-white text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(20,104,232,0.6)] active:scale-95 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Your Project</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}