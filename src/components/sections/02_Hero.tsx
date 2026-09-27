"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-[#FFFFFF] text-[#07152F] overflow-hidden">
      {/* Background Soft Mesh Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-[#1468E8]/12 via-[#60A5FA]/10 to-transparent rounded-full blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT: HIGH-CONVERTING COPYWRITING ================= */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-xs font-mono font-bold text-[#1468E8] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1468E8] animate-ping" />
              <span>ARCHITECTURAL INTELLIGENCE • SYSTEM ACTIVE</span>
            </div>

            {/* Magnetic Power Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[#07152F] leading-[1.06] mb-6">
              WE DON&apos;T JUST BUILD CODE. WE ENGINEER{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1468E8] via-[#0D4FB8] to-[#2563EB]">
                DIGITAL POWERHOUSES.
              </span>
            </h1>

            {/* Compelling Value Hook */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl font-medium leading-relaxed mb-8">
              From mission-critical web platforms and custom database engines to high-converting creative experiences — we turn complex business challenges into seamless, revenue-generating software systems.
            </p>

            {/* High-Intent CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-[#1468E8] text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase shadow-[0_6px_25px_rgba(20,104,232,0.38)] hover:shadow-[0_8px_35px_rgba(20,104,232,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Launch Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#tech"
                className="px-7 py-4 rounded-full bg-[#F7F9FC] border border-black/10 text-[#07152F] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase hover:border-[#1468E8]/40 hover:bg-white transition-all shadow-xs"
              >
                Explore The Workbench
              </a>
            </div>

            {/* Concrete Proof Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/5 w-full max-w-lg text-xs font-mono">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#07152F]">100%</p>
                <p className="text-gray-500 mt-0.5 font-medium">Full IP Ownership</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#1468E8]">&lt; 100ms</p>
                <p className="text-gray-500 mt-0.5 font-medium">Sub-Second Speed</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#07152F]">Zero</p>
                <p className="text-gray-500 mt-0.5 font-medium">Technical Debt</p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT: HIGH-IMPACT LOGO SHOWCASE STAGE ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1468E8]/20 via-[#60A5FA]/15 to-transparent rounded-3xl blur-2xl transform-gpu pointer-events-none" />

            {/* Floating Glassmorphic Showcase Pedestal */}
            <div className="relative w-full max-w-lg rounded-3xl p-8 bg-gradient-to-b from-[#F7F9FC] to-white border border-[#1468E8]/20 shadow-[0_20px_50px_rgba(20,104,232,0.1)] transform-gpu hover:shadow-[0_25px_60px_rgba(20,104,232,0.18)] transition-all duration-300 group">
              
              {/* Top Terminal Status Bar */}
              <div className="flex items-center justify-between pb-5 mb-8 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1468E8] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                    OFFICIAL BRAND MARK
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <Cpu className="w-3 h-3" />
                  <span>CORE ACTIVE</span>
                </div>
              </div>

              {/* Main Centered Landscape Logo */}
              <div className="relative py-8 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-28 sm:h-32 flex items-center justify-center p-4 rounded-2xl bg-white border border-black/5 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/logo-landscape.png"
                    alt="AKSBit Systems Official Logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = "none";
                      const fallback = document.getElementById("hero-logo-fb");
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <div
                    id="hero-logo-fb"
                    className="hidden text-3xl font-black tracking-tight text-[#07152F]"
                  >
                    AKSBit<span className="text-[#1468E8]"> Systems</span>
                  </div>
                </div>

                {/* Sub Narrative Line */}
                <p className="mt-6 text-center text-xs font-mono text-gray-500 tracking-wider uppercase font-bold">
                  INNOVATE • BUILD • EMPOWER • DELIVER
                </p>
              </div>

              {/* Floating Satellite Badge 1 (Top Right) */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-white text-[#07152F] border border-black/10 shadow-lg flex items-center gap-2.5 text-xs font-mono">
                <div className="w-7 h-7 rounded-xl bg-[#EAF3FF] text-[#1468E8] flex items-center justify-center font-bold">
                  <Zap className="w-4 h-4 fill-[#1468E8]" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold">PERFORMANCE</p>
                  <p className="font-black text-[#07152F]">Edge Accelerated</p>
                </div>
              </div>

              {/* Floating Satellite Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-[#07152F] text-white border border-white/10 shadow-xl flex items-center gap-2.5 text-xs font-mono">
                <div className="w-7 h-7 rounded-xl bg-[#1468E8] text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold">SECURITY &amp; COMPLIANCE</p>
                  <p className="font-black text-white">Full NDA Protection</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}