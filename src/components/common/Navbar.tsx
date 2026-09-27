"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { id: "hero", label: "Overview", href: "#hero" },
  { id: "story", label: "Journey", href: "/journey" },
  { id: "services", label: "Workshop", href: "#services" },
  { id: "projects", label: "Work", href: "#projects" },
  { id: "tech", label: "Workbench", href: "#tech" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Auto-detect currently visible section on screen
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8 pt-3 sm:pt-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* ================= ISLAND 1: LOGO CAPSULE ================= */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto rounded-full border transition-all duration-300 flex items-center ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl border-black/[0.08] shadow-[0_8px_30px_rgba(7,21,47,0.08)] py-1.5 px-4 sm:px-5"
                : "bg-white/80 backdrop-blur-xl border-black/[0.05] shadow-[0_4px_20px_rgba(7,21,47,0.04)] py-2 px-4 sm:px-6"
            }`}
          >
            <a href="#" onClick={() => setActiveSection("hero")} className="flex items-center group py-0.5">
              <div className="relative h-10 sm:h-12 md:h-13 flex items-center">
                <img
                  src="/logo-landscape.png"
                  alt="AKSBit Systems Logo"
                  className="h-full w-auto max-w-[170px] sm:max-w-[220px] md:max-w-[260px] object-contain object-left block"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                    const fb = document.getElementById("nav-fallback-text");
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <div
                  id="nav-fallback-text"
                  className="hidden items-center gap-2 font-black text-xl text-[#07152F] tracking-tight"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1468E8] animate-pulse" />
                  AKSBit<span className="text-[#1468E8]"> Systems</span>
                </div>
              </div>
            </a>
            
            <div className="hidden sm:flex items-center gap-1.5 pl-3 ml-2 border-l border-black/10 text-[10px] font-mono text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE</span>
            </div>
          </motion.div>

          {/* ================= ISLAND 2: NAV LINKS (SOLID BLUE ACTIVE STATE) ================= */}
          <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`hidden md:flex pointer-events-auto items-center gap-1.5 rounded-full border transition-all duration-300 p-1.5 ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl border-black/[0.08] shadow-[0_8px_30px_rgba(7,21,47,0.08)]"
                : "bg-white/80 backdrop-blur-xl border-black/[0.05] shadow-[0_4px_20px_rgba(7,21,47,0.04)]"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? "bg-[#1468E8] text-white shadow-[0_2px_14px_rgba(20,104,232,0.4)]"
                      : "text-[#07152F]/70 hover:text-[#07152F]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.nav>

          {/* ================= ISLAND 3: LET'S BUILD CTA ================= */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-2"
          >
            <a
              href="#contact"
              className="relative group overflow-hidden px-6 py-3 rounded-full bg-[#07152F] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-[0_4px_16px_rgba(7,21,47,0.2)] hover:bg-[#1468E8] hover:shadow-[0_8px_25px_rgba(20,104,232,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hidden sm:inline-flex items-center gap-2"
            >
              <span>Let's Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-full bg-white/90 backdrop-blur-xl border border-black/10 text-[#07152F] hover:border-[#1468E8]/40 shadow-md transition-all active:scale-95"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* ================= MOBILE DRAWER MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-50 p-6 bg-white/95 backdrop-blur-3xl border border-black/10 rounded-3xl shadow-[0_20px_60px_rgba(7,21,47,0.2)] md:hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                Menu Directory
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-4 py-3 rounded-2xl text-xs font-mono font-bold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-[#1468E8] text-white shadow-md shadow-blue-500/25"
                        : "text-[#07152F] hover:bg-[#F7F9FC]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  </a>
                );
              })}

              <div className="pt-4 border-t border-black/5 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-full bg-[#1468E8] text-white text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Project</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}