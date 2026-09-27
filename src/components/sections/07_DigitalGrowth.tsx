"use client";

import { motion } from "framer-motion";
import { Search, Share2, TrendingUp, Target } from "lucide-react";

const steps = [
  { icon: Search, title: "Search & Visibility", text: "Organic foundation via technical SEO and content discoverability." },
  { icon: Target, title: "Performance Ads", text: "Targeted campaigns focused on CAC and qualified client conversions." },
  { icon: Share2, title: "Brand Ecosystem", text: "Unified narrative across social touchpoints and authority funnels." },
  { icon: TrendingUp, title: "Data Scaling", text: "Continuous analytics evaluation turning traffic into business revenue." },
];

export default function DigitalGrowth() {
  return (
    <section className="py-32 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-widest">
            Building Is Only Half The Story
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-brand-navy tracking-tight mt-3">
            GET SEEN. GET FOUND. GET CHOSEN<span className="text-brand-blue">.</span>
          </h2>
          <p className="text-text-muted mt-4 text-lg">
            Creating a high-performance system is step one. Ensuring it reaches and converts your ideal audience is how it compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st) => (
            <motion.div
              key={st.title}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#F7F9FC] border border-black/5 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-light-blue text-brand-blue flex items-center justify-center mb-6">
                <st.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{st.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{st.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}