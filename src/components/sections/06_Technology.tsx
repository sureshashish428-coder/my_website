"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, ArrowUpRight } from "lucide-react";

interface TechItem {
  name: string;
  category: "dev" | "backend" | "design" | "marketing" | "cloud_ai";
  iconUrl: string;
  role: string;
  badge: string;
}

const technologies: TechItem[] = [
  // Web & Frontend
  {
    name: "Next.js",
    category: "dev",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    role: "SSR & Edge Applications",
    badge: "Framework",
  },
  {
    name: "React",
    category: "dev",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    role: "Component Systems",
    badge: "UI Core",
  },
  {
    name: "TypeScript",
    category: "dev",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    role: "Strict Architecture",
    badge: "Type-Safe",
  },
  {
    name: "Tailwind CSS",
    category: "dev",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    role: "Utility Styling",
    badge: "Design Tokens",
  },

  // Backend & Databases (Including PHP & Django)
  {
    name: "PHP",
    category: "backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    role: "Enterprise Web Systems & CMS",
    badge: "Dynamic Engine",
  },
  {
    name: "Python / Django",
    category: "backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    role: "ORM & Resilient APIs",
    badge: "Scalable Backend",
  },
  {
    name: "MySQL",
    category: "backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    role: "Structured RDBMS",
    badge: "ACID Database",
  },
  {
    name: "Node.js",
    category: "backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    role: "Microservices & Sockets",
    badge: "Runtime",
  },

  // Graphic & Creative Design
  {
    name: "Figma",
    category: "design",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    role: "UI/UX & Interactive Design",
    badge: "Product UI",
  },
  {
    name: "Adobe Photoshop",
    category: "design",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    role: "Creative Brand Identity & Visuals",
    badge: "Visual Art",
  },
  {
    name: "Adobe Illustrator",
    category: "design",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg",
    role: "Vector Graphics & Typography",
    badge: "Vector Identity",
  },
  {
    name: "Adobe Premiere",
    category: "design",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
    role: "Motion Design & Video Edits",
    badge: "Video Motion",
  },

  // Digital Marketing & Growth
  {
    name: "Google Analytics 4",
    category: "marketing",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    role: "Data Insights & Event Tracking",
    badge: "Web Analytics",
  },
  {
    name: "Meta Ads & Social",
    category: "marketing",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    role: "Targeted Paid Traffic Funnels",
    badge: "Paid Growth",
  },
  {
    name: "SEO Architecture",
    category: "marketing",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    role: "Organic SERP & Schema Crawl",
    badge: "Organic Search",
  },

  // Cloud & AI
  {
    name: "Docker & Cloud",
    category: "cloud_ai",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    role: "Containerized Hosting & CI/CD",
    badge: "DevOps",
  },
  {
    name: "AI & Automations",
    category: "cloud_ai",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    role: "Autonomous Business Bots",
    badge: "Automation",
  },
];

const categories = [
  { id: "all", label: "ALL TOOLS" },
  { id: "dev", label: "FRONTEND" },
  { id: "backend", label: "PHP & BACKEND" },
  { id: "design", label: "GRAPHICS & UI" },
  { id: "marketing", label: "DIGITAL MARKETING" },
  { id: "cloud_ai", label: "CLOUD & AI" },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTech = technologies.filter(
    (t) => activeCategory === "all" || t.category === activeCategory
  );

  return (
    <section id="tech" className="relative py-16 sm:py-20 bg-[#FFFFFF] text-[#07152F] overflow-hidden border-t border-black/5">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(20,104,232,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-[11px] font-mono text-[#1468E8] font-bold mb-2.5">
              <Terminal className="w-3 h-3" />
              <span>SECTION 05 • ECOSYSTEM WORKBENCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F]">
              TECH, CREATIVE &amp; <span className="text-[#1468E8]">GROWTH STACK.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#F7F9FC] border border-black/5 text-[11px] font-mono shrink-0">
            <Cpu className="w-4 h-4 text-[#1468E8] animate-pulse" />
            <span className="text-[#07152F] font-bold">100% PRODUCTION READY</span>
          </div>
        </div>

        {/* Compact Horizontal Category Selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide transition-all duration-200 border ${
                  active
                    ? "bg-[#1468E8] text-white border-[#1468E8] shadow-[0_2px_12px_rgba(20,104,232,0.3)]"
                    : "bg-[#F7F9FC] text-[#07152F]/70 border-black/5 hover:border-black/20 hover:text-[#07152F]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Compact High-Density Grid (No unnecessary scroll) */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -3 }}
                className="group p-4 sm:p-4.5 rounded-2xl bg-[#F7F9FC] border border-black/5 hover:border-[#1468E8]/40 hover:bg-white hover:shadow-[0_6px_20px_rgba(20,104,232,0.08)] transition-all flex flex-col justify-between"
              >
                {/* Top Row: Mini Icon + Category Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 p-2 rounded-xl bg-white border border-black/5 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center">
                    <img
                      src={tech.iconUrl}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAF3FF] text-[#1468E8]">
                    {tech.badge}
                  </span>
                </div>

                {/* Info Text */}
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-[#07152F] group-hover:text-[#1468E8] transition-colors truncate">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-mono mt-0.5 leading-tight line-clamp-1">
                    {tech.role}
                  </p>
                </div>

                {/* Micro Action Line */}
                <div className="pt-2.5 mt-2.5 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-gray-400 group-hover:text-[#1468E8] transition-colors">
                  <span>DEPLOYED</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}