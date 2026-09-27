"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { ProjectItem } from "@/types";

const projects: ProjectItem[] = [
  {
    title: "E-Commerce Enterprise Core",
    tagline: "High-volume commerce engine with inventory & checkout sync.",
    category: "Full Stack / Web App",
    problem: "Legacy storefront couldn't handle live inventory scaling and dropped carts.",
    solution: "Custom microservices build with realtime inventory lock and fast checkout flow.",
    tech: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Omni-Channel ERP Platform",
    tagline: "Operations & supply chain command center.",
    category: "Business Systems",
    problem: "Disconnected accounting, human resources, and warehouse dispatching data.",
    solution: "Unified role-based operational dashboard with real-time analytics graphs.",
    tech: ["Python", "Django REST", "React", "Docker"],
  },
  {
    title: "Media Flow Automation Engine",
    tagline: "AI-assisted content staging and dynamic scheduling.",
    category: "AI & Automation",
    problem: "Manual multi-channel publishing taking up 20+ dev hours weekly.",
    solution: "Autonomous pipeline triggering uploads, transformations, and metadata updates.",
    tech: ["Python", "FastAPI", "Redis", "Cloud"],
  },
  {
    title: "Interactive Brand Studio",
    tagline: "Immersive identity platform for creative services.",
    category: "Creative Engineering",
    problem: "Generic template identity failing to win enterprise clients.",
    solution: "Story-led micro-interaction platform with high performance score.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Lenis"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-32 bg-[#FFFFFF] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-widest">
              Selected Deliverables
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-brand-navy tracking-tight mt-3">
              THINGS WE'VE BUILT
            </h2>
          </div>
          <p className="text-sm font-mono text-text-muted mt-4 md:mt-0">
            [ PROBLEM → SOLUTION → RESULT ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(p)}
              className="cursor-pointer group p-8 rounded-3xl bg-[#F7F9FC] border border-black/5 flex flex-col justify-between min-h-[340px] hover:border-brand-blue/30 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-4">
                  <span>0{idx + 1}</span>
                  <span className="text-brand-blue">{p.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-text-muted mt-3 leading-relaxed">{p.tagline}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-8">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-white px-2.5 py-1 rounded-md border border-black/5 text-brand-navy">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal (Clean Flow) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl border border-black/10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5 text-brand-navy" />
              </button>

              <span className="text-xs font-mono text-brand-blue uppercase">{selectedProject.category}</span>
              <h3 className="text-3xl font-extrabold text-brand-navy mt-1 mb-6">{selectedProject.title}</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-xs font-mono uppercase text-text-muted">The Problem</h4>
                  <p className="text-sm text-brand-navy mt-1">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-brand-blue">The Solution</h4>
                  <p className="text-sm text-brand-navy mt-1">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 bg-brand-light-blue text-brand-navy rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}