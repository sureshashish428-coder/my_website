"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Code2, Database, Palette, TrendingUp } from "lucide-react";

interface TechItem {
  name: string;
  role: string;
  iconUrl: string;
  accent: string;
  stat: string;
}

interface StoryChapter {
  id: string;
  chapterNum: string;
  title: string;
  tagline: string;
  color: string;
  glow: string;
  icon: React.ComponentType<{ className?: string }>;
  techs: TechItem[];
}

const chapters: StoryChapter[] = [
  {
    id: "canvas",
    chapterNum: "ACT 01",
    title: "The Visual Dimension",
    tagline: "Where raw imaginations turn into pixel-perfect brand identity and tactile UI.",
    color: "from-rose-500 to-amber-500",
    glow: "rgba(244,63,94,0.14)",
    icon: Palette,
    techs: [
      {
        name: "Figma",
        role: "Design Systems & Interactive Prototypes",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        accent: "#F24E1E",
        stat: "Design Tokens",
      },
      {
        name: "Photoshop",
        role: "Creative Brand Imagery & Manipulation",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
        accent: "#31A8FF",
        stat: "High-Res Art",
      },
      {
        name: "Illustrator",
        role: "Precision Vector Identities & Logomarks",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg",
        accent: "#FF9A00",
        stat: "Vector Master",
      },
      {
        name: "Premiere Pro",
        role: "Cinematic Product Reels & Motion Design",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
        accent: "#9999FF",
        stat: "60 FPS Motion",
      },
    ],
  },
  {
    id: "frontend",
    chapterNum: "ACT 02",
    title: "The Reactive Stage",
    tagline: "Transforming design into living, breathing, high-frame-rate web experiences.",
    color: "from-blue-600 to-cyan-400",
    glow: "rgba(20,104,232,0.16)",
    icon: Code2,
    techs: [
      {
        name: "Next.js",
        role: "Server-Side Rendering & Edge Routing",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        accent: "#000000",
        stat: "Sub-Second FCP",
      },
      {
        name: "React",
        role: "Composable Micro-Component Architecture",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        accent: "#61DAFB",
        stat: "Reactive State",
      },
      {
        name: "TypeScript",
        role: "Type-Safe Robust Production Codebase",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        accent: "#3178C6",
        stat: "Zero Type Bugs",
      },
      {
        name: "Tailwind CSS",
        role: "Dynamic Fluid Responsive Styling",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        accent: "#06B6D4",
        stat: "Design Tokens",
      },
    ],
  },
  {
    id: "backend",
    chapterNum: "ACT 03",
    title: "The Engine & Data Vault",
    tagline: "Rock-solid backbones, secure ORM pipelines, and ACID-compliant storage engines.",
    color: "from-indigo-600 to-emerald-500",
    glow: "rgba(99,102,241,0.16)",
    icon: Database,
    techs: [
      {
        name: "PHP",
        role: "Modern Enterprise Web Backends & CMS Engines",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        accent: "#777BB4",
        stat: "Battle Tested",
      },
      {
        name: "Python & Django",
        role: "Resilient ORM, High Concurrency REST APIs",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        accent: "#092E20",
        stat: "Security Core",
      },
      {
        name: "MySQL",
        role: "Relational Data Modeling & Query Tuning",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        accent: "#4479A1",
        stat: "ACID Compliant",
      },
      {
        name: "Node.js",
        role: "Real-time WebSockets & Event-Driven Tasks",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        accent: "#339933",
        stat: "Async I/O",
      },
    ],
  },
  {
    id: "growth",
    chapterNum: "ACT 04",
    title: "The Growth Catalyst",
    tagline: "Propelling the product into the spotlight with data-backed reach and traffic funnels.",
    color: "from-emerald-500 to-sky-500",
    glow: "rgba(16,185,129,0.14)",
    icon: TrendingUp,
    techs: [
      {
        name: "Google Analytics 4",
        role: "Cohort Conversion & Custom Behavioral Funnels",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        accent: "#E37400",
        stat: "Deep Telemetry",
      },
      {
        name: "Meta Ads Funnel",
        role: "Algorithmic Retargeting & Direct ROI Campaigns",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
        accent: "#0081FB",
        stat: "High ROAS",
      },
      {
        name: "Technical SEO",
        role: "Schema JSON-LD, Core Web Vitals Optimization",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        accent: "#34A853",
        stat: "SERP Rank",
      },
      {
        name: "Docker & Cloud",
        role: "Zero-Downtime Microservices & CI/CD Staging",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        accent: "#2496ED",
        stat: "Global Deploy",
      },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>("canvas");

  const currentChapter = chapters.find((c) => c.id === activeTab) || chapters[0];
  const IconComponent = currentChapter.icon;

  return (
    <section id="tech" className="relative py-16 sm:py-20 bg-[#FFFFFF] text-[#07152F] overflow-hidden border-t border-black/5">
      {/* GPU Accelerated Static Gradient - Zero Lag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] bg-gradient-to-tr from-[#1468E8]/10 via-purple-500/5 to-pink-500/10 rounded-full blur-[110px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-xs font-mono font-bold text-[#1468E8] mb-2.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL ODYSSEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#07152F]">
              HOW WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1468E8] via-purple-600 to-pink-500">YOUR STORY.</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-xl font-medium">
              Every digital breakthrough follows an orchestrated sequence — from creative spark to live market dominance.
            </p>
          </div>

          {/* Quick Status */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F7F9FC] border border-black/5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-[#1468E8]/10 text-[#1468E8] flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-xs font-mono">
              <p className="font-bold text-[#07152F]">WORKBENCH</p>
              <p className="text-emerald-600 font-semibold text-[11px]">Ready for Deploy</p>
            </div>
          </div>
        </div>

        {/* Story Milestone Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {chapters.map((chap) => {
            const isActive = activeTab === chap.id;
            const ChapIcon = chap.icon;
            return (
              <button
                key={chap.id}
                type="button"
                onClick={() => setActiveTab(chap.id)}
                className={`relative text-left p-3.5 sm:p-4 rounded-2xl border transition-colors duration-200 flex flex-col justify-between overflow-hidden cursor-pointer select-none ${
                  isActive
                    ? "bg-white border-[#1468E8] shadow-[0_4px_18px_rgba(20,104,232,0.14)]"
                    : "bg-[#F7F9FC] border-black/5 hover:border-black/15 text-gray-500"
                }`}
              >
                {isActive && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${chap.color}`} />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${isActive ? "text-[#1468E8]" : "text-gray-400"}`}>
                    {chap.chapterNum}
                  </span>
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                    isActive ? "bg-[#EAF3FF] text-[#1468E8]" : "bg-black/5 text-gray-400"
                  }`}>
                    <ChapIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className={`text-xs sm:text-sm font-black tracking-tight ${
                  isActive ? "text-[#07152F]" : "text-gray-600"
                }`}>
                  {chap.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Story Stage Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="transform-gpu p-6 sm:p-8 rounded-3xl bg-[#F7F9FC] border border-black/5 shadow-[0_10px_30px_rgba(7,21,47,0.03)] relative overflow-hidden"
          >
            {/* Soft Ambient Corner Glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors duration-500"
              style={{ backgroundColor: currentChapter.glow }}
            />

            {/* Act Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-black/5 relative z-10">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${currentChapter.color} text-white flex items-center justify-center shadow-sm`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                    PHASE DIRECTIVE
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#07152F]">
                    {currentChapter.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs font-medium text-gray-500 italic max-w-md sm:text-right">
                "{currentChapter.tagline}"
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative z-10">
              {currentChapter.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="transform-gpu p-4 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-[#1468E8]/40 hover:shadow-[0_6px_20px_rgba(20,104,232,0.1)] transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 p-2 rounded-xl bg-[#F7F9FC] border border-black/5 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
                        <img
                          src={tech.iconUrl}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <span
                        className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border"
                        style={{
                          backgroundColor: `${tech.accent}12`,
                          borderColor: `${tech.accent}28`,
                          color: tech.accent,
                        }}
                      >
                        {tech.stat}
                      </span>
                    </div>

                    <h4 className="text-sm font-black tracking-tight text-[#07152F] group-hover:text-[#1468E8] transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-mono mt-0.5 leading-snug">
                      {tech.role}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-gray-400 group-hover:text-[#1468E8] transition-colors">
                    <span>ACTIVE PIPELINE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}