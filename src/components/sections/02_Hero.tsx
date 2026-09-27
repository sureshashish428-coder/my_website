"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Users, 
  ChevronDown 
} from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#030712] text-white flex flex-col justify-between pt-28 pb-10 overflow-hidden select-none"
    >
      {/* ================= BACKGROUND IMAGE LAYER ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="AKSBit Developer Workspace Background"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Soft Left vignette for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/70 to-transparent" />
        {/* Bottom mesh gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      {/* ================= MAIN HERO BODY ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full my-auto py-12">
        <div className="max-w-2xl">
          
          {/* Tagline Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-[2px] bg-[#1468E8]" />
            <span className="text-[11px] font-mono tracking-widest text-gray-300 uppercase font-bold">
              BUILDING TOMORROW, WITH CODE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6"
          >
            We Build <br />
            Tech for a Better <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1468E8] via-[#38BDF8] to-[#34D399]">
              Tomorrow
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-xl"
          >
            AKSBit Systems is a product-focused digital architecture firm creating scalable software, powerful tools, and intelligent solutions for the next generation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1468E8] to-[#2563EB] hover:from-[#1156c2] hover:to-[#1d4ed8] text-white text-xs sm:text-sm font-mono font-bold tracking-wide flex items-center gap-2.5 shadow-[0_4px_25px_rgba(20,104,232,0.5)] hover:shadow-[0_6px_35px_rgba(20,104,232,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#story"
              className="px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-mono font-bold tracking-wide backdrop-blur-md transition-all active:scale-[0.98]"
            >
              View Our Work
            </a>
          </motion.div>

        </div>
      </div>

      {/* ================= BOTTOM 4-FEATURE METRICS GRID ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Card 1 */}
          <div className="flex items-start gap-3.5 group">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-white mb-1">
                High Performance
              </h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                Optimized for speed, scale, and real-world impact.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-3.5 group">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-white mb-1">
                Secure by Design
              </h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                Your data. Our priority. Full IP protection.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-3.5 group">
            <div className="p-2 rounded-xl bg-[#1468E8]/10 border border-[#1468E8]/20 text-[#60A5FA] shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-white mb-1">
                Developer Friendly
              </h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                Clean APIs, modular code, resilient backbones.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-3.5 group">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-white mb-1">
                Built for the Future
              </h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                AI, cloud, and modern tech — all in one place.
              </p>
            </div>
          </div>

        </div>

        {/* ================= SCROLL TO EXPLORE ================= */}
        <div className="flex flex-col items-center justify-center gap-1.5 pt-2">
          <div className="w-[1.5px] h-6 bg-gradient-to-b from-[#1468E8] via-[#38BDF8] to-transparent animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            Scroll to explore
          </span>
        </div>
      </div>

    </section>
  );
}