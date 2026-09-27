"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-black/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight text-brand-navy flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse"></span>
          AKSBit<span className="text-brand-blue">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy/80">
          <a href="#hero" className="hover:text-brand-blue transition-colors">Home</a>
          <a href="#story" className="hover:text-brand-blue transition-colors">Story</a>
          <a href="#services" className="hover:text-brand-blue transition-colors">Services</a>
          <a href="#projects" className="hover:text-brand-blue transition-colors">Work</a>
          <a href="#tech" className="hover:text-brand-blue transition-colors">Technologies</a>
        </nav>

        <a
          href="#contact"
          className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-brand-navy text-white hover:bg-brand-blue transition-all"
        >
          Let's Build
        </a>
      </div>
    </motion.header>
  );
}