"use client";

import { motion } from "framer-motion";
import { Search, Share2, TrendingUp, Target, ArrowUpRight } from "lucide-react";

const steps = [
  { 
    id: "01",
    icon: Search, 
    title: "Search & Visibility", 
    text: "Organic foundation via technical SEO and content discoverability." 
  },
  { 
    id: "02",
    icon: Target, 
    title: "Performance Ads", 
    text: "Targeted campaigns focused on CAC and qualified client conversions." 
  },
  { 
    id: "03",
    icon: Share2, 
    title: "Brand Ecosystem", 
    text: "Unified narrative across social touchpoints and authority funnels." 
  },
  { 
    id: "04",
    icon: TrendingUp, 
    title: "Data Scaling", 
    text: "Continuous analytics evaluation turning traffic into business revenue." 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DigitalGrowth() {
  return (
    <section className="py-24 sm:py-28 bg-[#FFFFFF] border-t border-black/5 relative overflow-hidden select-none">
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#1468E8]/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-[11px] font-mono font-bold uppercase text-[#1468E8] tracking-widest mb-3">
            Building Is Only Half The Story
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#07152F] tracking-tight leading-[1.08]">
            GET SEEN. GET FOUND. <br className="hidden sm:inline" />
            <span className="text-[#1468E8]">GET CHOSEN.</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
            Creating a high-performance system is step one. Ensuring it reaches and converts your ideal audience is how it compounds.
          </p>
        </motion.div>

        {/* Animated 4-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-[#F7F9FC] border border-black/5 hover:border-[#1468E8]/35 hover:bg-white hover:shadow-[0_16px_36px_rgba(20,104,232,0.1)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default transform-gpu"
              >
                {/* Subtle Hover Gradient Top Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#1468E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Icon + Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF3FF] text-[#1468E8] group-hover:bg-[#1468E8] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(20,104,232,0.35)]">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#1468E8] transition-colors">
                    // {st.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-black text-[#07152F] group-hover:text-[#1468E8] transition-colors mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {st.text}
                  </p>
                </div>

                {/* Bottom Active Arrow Indicator */}
                <div className="mt-6 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-gray-400 group-hover:text-[#1468E8] transition-colors">
                  <span>SCALE DIRECTIVE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}