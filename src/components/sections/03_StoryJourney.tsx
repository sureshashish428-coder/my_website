"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Laptop, 
  Cpu, 
  Briefcase, 
  Building2,
  Compass
} from "lucide-react";

const chapters = [
  { 
    step: "01", 
    role: "GENESIS", 
    title: "THE TEACHER", 
    desc: "Teaching AI/ML & Python in government schools, deconstructing logic.",
    icon: GraduationCap 
  },
  { 
    step: "02", 
    role: "THE FORGE", 
    title: "THE DEVELOPER", 
    desc: "PHP internship, brutal production debugging, and foundational engineering.",
    icon: Laptop 
  },
  { 
    step: "03", 
    role: "ASSEMBLY", 
    title: "THE BUILDER", 
    desc: "Mastering Python, Django ORM, Next.js, and multi-tier database pipelines.",
    icon: Cpu 
  },
  { 
    step: "04", 
    role: "EXECUTION", 
    title: "THE FREELANCER", 
    desc: "Delivering high-stake client products, conversion design, and solving real pain points.",
    icon: Briefcase 
  },
  { 
    step: "05", 
    role: "THE HORIZON", 
    title: "AKSBIT SYSTEMS", 
    desc: "The journey matured into a relentless, scalable engineering powerhouse.",
    icon: Building2 
  },
];

export default function StoryJourney() {
  return (
    <section id="story" className="py-24 sm:py-28 bg-[#FFFFFF] border-t border-black/5 relative overflow-hidden select-none">
      
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1468E8]/5 rounded-full blur-[130px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-6 border-b border-black/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-[11px] font-mono font-bold uppercase text-[#1468E8] tracking-widest mb-3 shadow-2xs">
              <Compass className="w-3.5 h-3.5" />
              <span>THE EVOLUTIONARY ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#07152F] tracking-tight leading-tight">
              FROM CLASSROOM TO <br />
              <span className="text-[#1468E8]">DIGITAL ENTERPRISE.</span>
            </h2>
          </div>

          <Link
            href="/journey"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7F9FC] border border-black/10 hover:border-[#1468E8] hover:bg-white text-[#07152F] hover:text-[#1468E8] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-2xs shrink-0"
          >
            <span>Open Interactive Canvas</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Step Story Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            const isClimax = idx === chapters.length - 1;
            return (
              <Link
                key={ch.step}
                href="/journey"
                className={`group p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[240px] relative overflow-hidden transform-gpu hover:-translate-y-1.5 ${
                  isClimax
                    ? "bg-[#EAF3FF]/60 border-[#1468E8]/40 hover:border-[#1468E8] hover:shadow-[0_12px_30px_rgba(20,104,232,0.15)]"
                    : "bg-[#F7F9FC] border-black/5 hover:border-[#1468E8]/30 hover:bg-white hover:shadow-[0_12px_28px_rgba(7,21,47,0.06)]"
                }`}
              >
                {/* Top Number + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isClimax
                      ? "bg-[#1468E8] text-white shadow-xs"
                      : "bg-white border border-black/5 text-[#1468E8] group-hover:bg-[#1468E8] group-hover:text-white"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className={`text-[10px] font-mono font-black tracking-widest ${
                    isClimax ? "text-[#1468E8]" : "text-gray-400 group-hover:text-[#1468E8]"
                  }`}>
                    CH // {ch.step}
                  </span>
                </div>

                {/* Body Content */}
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-gray-400 block mb-1">
                    {ch.role}
                  </span>
                  <h3 className="text-sm font-black text-[#07152F] mb-1.5 leading-snug group-hover:text-[#1468E8] transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-normal leading-relaxed">
                    {ch.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-gray-400 group-hover:text-[#1468E8]">
                  <span>ACT {ch.step}</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Dedicated Storyline Invitation Portal Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F7F9FC] via-[#FFFFFF] to-[#EAF3FF] border border-[#1468E8]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#1468E8] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#07152F]">
                Experience The Full 5-Act Chronicle
              </h4>
              <p className="text-xs font-mono text-gray-500 mt-0.5">
                Terminal boot sequences, interactive timelines, and the story of how AKSBit Systems was born.
              </p>
            </div>
          </div>

          <Link
            href="/journey"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1468E8] hover:bg-[#0F52BA] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(20,104,232,0.3)] hover:shadow-[0_6px_25px_rgba(20,104,232,0.5)] active:scale-95 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Launch Story Canvas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}