"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  ExternalLink, 
  Laptop,
  CheckCircle2,
  FolderGit2
} from "lucide-react";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  client: string;
  description: string;
  image: string; // public/projects/ me screenshot daal kar path yahan do
  stack: string[];
  liveUrl: string; // Apna live link daalna
  stat: string;
}

const realProjects: ProjectItem[] = [
  {
    id: "hrms-portal",
    category: "ENTERPRISE HR",
    title: "Enterprise HRMS Portal",
    client: "Workforce & Talent Engine",
    description: "Automated attendance tracking, leave approval workflows, employee directory, and automated monthly payroll calculations.",
    image: "/projects/hrms.png",
    stack: ["Django", "Python", "MySQL", "Next.js", "REST API"],
    liveUrl: "https://hrms.aksbitsystems.in/",
    stat: "Automated Payroll",
  },
  {
    id: "erp-system",
    category: "OPERATIONS",
    title: "Modular ERP Engine",
    client: "Resource Planning Matrix",
    description: "Unified business management platform managing live inventory, client invoices, dispatch logs, and role-based operational permissions.",
    image: "/projects/erp.png",
    stack: ["PHP", "MySQL", "React", "Tailwind CSS", "Docker"],
    liveUrl: "https://erp.aksbitsystems.in/",
    stat: "Realtime Sync",
  },
  {
    id: "cloth-shop",
    category: "FASHION E-COM",
    title: "Thread & Style Apparel Store",
    client: "Retail Fashion Brand",
    description: "Modern clothing e-commerce suite featuring dynamic size/color variants, lightning-fast cart state, and instant checkout flow.",
    image: "/projects/cloth-shop.png",
    stack: ["Next.js", "Django ORM", "MySQL", "Tailwind", "Payment Gateway"],
    liveUrl: "https://techbeast.kesug.com/",
    stat: "Instant Checkout",
  },
  {
    id: "solar-ecom",
    category: "CLEANTECH",
    title: "SolarGrid E-Commerce Hub",
    client: "Renewable Energy Platform",
    description: "B2B & B2C solar hardware portal featuring interactive rooftop capacity calculators, inverter catalogs, and installation booking.",
    image: "/projects/solar-ecom.png",
    stack: ["Php", "Json", "MySQL", "Tailwind", "FastAPI"],
    liveUrl: "https://satyashasolar.store/stshop/",
    stat: "Solar Estimator",
  },
  {
    id: "voucher-platform",
    category: "FINTECH & REWARDS",
    title: "All-In-One Voucher Platform",
    client: "Discount & Loyalty Network",
    description: "Multi-brand voucher management system with barcode redemption verification, tier discounts, and instant partner commission payouts.",
    image: "/projects/voucher.png",
    stack: ["PHP / Laravel", "MySQL", "React", "Tailwind", "QR Engine"],
    liveUrl: "http://allinonevouchers.com/",
    stat: "Instant QR Redeem",
  },
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const clampedIdx = Math.max(0, Math.min(idx, realProjects.length - 1));
    setActiveIdx(clampedIdx);
    
    // Card width + gap calculate karke scroll smoothly slide karega
    const container = scrollContainerRef.current;
    const card = container.children[clampedIdx] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-20 bg-[#FFFFFF] text-[#07152F] overflow-hidden border-t border-black/5">
      {/* Background Soft Mesh Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-[#1468E8]/10 via-[#60A5FA]/8 to-transparent rounded-full blur-[110px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Compact Header + Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-black/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] border border-[#1468E8]/20 text-[11px] font-mono font-bold text-[#1468E8] mb-2 shadow-2xs">
              <Sparkles className="w-3 h-3" />
              <span>SELECTED COMMERCIAL BUILDS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#07152F]">
              FEATURED <span className="text-[#1468E8]">SYSTEM BUILDS.</span>
            </h2>
          </div>

          {/* Carousel Slider Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-gray-500">
              0{activeIdx + 1} / 0{realProjects.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIdx - 1)}
                disabled={activeIdx === 0}
                className={`p-2.5 rounded-full border transition-all ${
                  activeIdx === 0
                    ? "border-black/5 text-gray-300 cursor-not-allowed"
                    : "border-black/10 bg-[#F7F9FC] text-[#07152F] hover:bg-[#1468E8] hover:text-white hover:border-[#1468E8] cursor-pointer shadow-2xs"
                }`}
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToIndex(activeIdx + 1)}
                disabled={activeIdx === realProjects.length - 1}
                className={`p-2.5 rounded-full border transition-all ${
                  activeIdx === realProjects.length - 1
                    ? "border-black/5 text-gray-300 cursor-not-allowed"
                    : "border-black/10 bg-[#F7F9FC] text-[#07152F] hover:bg-[#1468E8] hover:text-white hover:border-[#1468E8] cursor-pointer shadow-2xs"
                }`}
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Smooth Horizontal Carousel (No oversized vertical cards) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {realProjects.map((p, idx) => (
            <div
              key={p.id}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] rounded-2xl bg-[#F7F9FC] border border-black/5 hover:border-[#1468E8]/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(20,104,232,0.1)] transition-all duration-200 flex flex-col justify-between overflow-hidden p-3.5 sm:p-4 group"
            >
              {/* Browser Preview Box for Screenshot */}
              <div className="relative rounded-xl overflow-hidden bg-[#07152F] border border-black/10 aspect-[16/10] mb-3">
                {/* Mini Top Chrome Bar */}
                <div className="absolute top-0 inset-x-0 h-6 bg-[#050D1A]/90 backdrop-blur-md px-2.5 flex items-center justify-between z-10 border-b border-white/10">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[9px] font-mono text-gray-400 truncate max-w-[140px]">
                    {p.id}.aksbit.internal
                  </span>
                  <div className="w-2" />
                </div>

                {/* Screenshot Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top pt-6 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                    const fb = document.getElementById(`fb-${p.id}`);
                    if (fb) fb.style.display = "flex";
                  }}
                />

                {/* Graceful Fallback if Screenshot is missing */}
                <div
                  id={`fb-${p.id}`}
                  className="hidden w-full h-full pt-6 flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#07152F] to-[#0A224A] text-white"
                >
                  <Laptop className="w-7 h-7 text-[#1468E8] mb-1.5 animate-pulse" />
                  <p className="text-xs font-mono font-bold">{p.title}</p>
                  <p className="text-[9px] font-mono text-gray-400">Put image in {p.image}</p>
                </div>

                {/* Tag Overlay */}
                <div className="absolute bottom-2 left-2 z-10">
                  <span className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/15 text-[9px] font-mono font-bold">
                    {p.stat}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1 text-[10px] font-mono">
                    <span className="text-[#1468E8] font-bold uppercase">{p.category}</span>
                    <span className="text-gray-400">{p.client}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#07152F] group-hover:text-[#1468E8] transition-colors mb-1.5">
                    {p.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 mb-3 pt-2 border-t border-black/5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white border border-black/5 text-[9px] font-mono text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Live Link Button */}
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-[#1468E8] text-white text-[11px] font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-2xs hover:bg-[#0E54C2] transition-colors cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Micro Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-gray-500">
          <span className="flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-[#1468E8]" />
            Swipe or use arrow buttons to navigate builds
          </span>
          <a href="#contact" className="text-[#1468E8] font-bold hover:underline">
            Commission Custom Build →
          </a>
        </div>

      </div>
    </section>
  );
}