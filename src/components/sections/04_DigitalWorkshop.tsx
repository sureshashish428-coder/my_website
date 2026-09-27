"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  index: string;
  title: string;
  desc: string;
  subServices: string;
  tech: string;
}

const services: ServiceItem[] = [
  { id: "01", index: "01", title: "SOFTWARE DEVELOPMENT", desc: "Custom software architecture, automation pipelines, and robust APIs.", subServices: "Custom Software · Automation · System Integrations", tech: "Python · Django · REST APIs" },
  { id: "02", index: "02", title: "WEB & APPLICATIONS", desc: "High-performance websites and full-scale modern web applications.", subServices: "Corporate Platforms · E-Commerce · Custom Web Apps", tech: "Next.js · React · TypeScript · Tailwind" },
  { id: "03", index: "03", title: "BUSINESS SYSTEMS", desc: "We connect the essential operations of your business into one intelligent system.", subServices: "ERP · CRM · HRMS · Inventory · Analytics", tech: "Django · Next.js · PostgreSQL · APIs" },
  { id: "04", index: "04", title: "DESIGN & CREATIVE", desc: "Intuitive product design and memorable brand identities.", subServices: "UI/UX Design · Product Design · Visual Identity", tech: "Figma · Design Systems · Motion" },
  { id: "05", index: "05", title: "DIGITAL GROWTH", desc: "Structured user acquisition and performance brand marketing.", subServices: "Technical SEO · Performance Ads · Conversion Tracking", tech: "Analytics · Meta Ads · Strategy" },
  { id: "06", index: "06", title: "AI & AUTOMATION", desc: "Autonomous workflows and smart business logic assistants.", subServices: "Workflow Automation · AI Integrations · Custom Bots", tech: "Python · LLMs · Tooling" },
  { id: "07", index: "07", title: "INFRASTRUCTURE & SUPPORT", desc: "Reliable cloud deployments, security, and continuous maintenance.", subServices: "Cloud Deployments · CI/CD · Ongoing Monitoring", tech: "Vercel · Cloud Hosting · GitHub" },
];

export default function DigitalWorkshop() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-[#050D1A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-widest">
            The Digital Workshop
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3">WHAT WE BUILD</h2>
          <p className="text-gray-400 mt-4 text-lg">Ideas become systems. Systems become businesses.</p>
        </div>

        {/* Big Typographic Accordion List */}
        <div className="border-t border-white/10">
          {services.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div key={item.id} className="border-b border-white/10">
                <button
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  className="w-full py-8 flex items-center justify-between text-left group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-mono text-sm md:text-base text-gray-500">{item.index}</span>
                    <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                    {isOpen ? <ArrowUpRight className="w-5 h-5 text-brand-blue" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden pb-8 pl-12 md:pl-20 pr-6"
                    >
                      <p className="text-gray-300 text-base max-w-2xl mb-4 leading-relaxed">{item.desc}</p>
                      <div className="text-xs font-mono text-brand-blue tracking-wide uppercase mb-3">
                        {item.subServices}
                      </div>
                      <div className="text-xs font-mono text-gray-400">
                        STACK: <span className="text-white">{item.tech}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}