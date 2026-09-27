"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Play, 
  Layers, 
  GraduationCap, 
  Laptop, 
  Cpu, 
  Briefcase, 
  Building2,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

interface StoryAct {
  actNum: string;
  badge: string;
  title: string;
  themeTitle: string;
  ambientColor: string;
  sceneType: "teacher" | "developer" | "builder" | "freelancer" | "company";
  tagline: string;
  narrative: string;
  techTags: string[];
  metrics: { label: string; val: string };
}

const acts: StoryAct[] = [
  {
    actNum: "CHAPTER 01",
    badge: "FOUNDATION",
    title: "THE TEACHER",
    themeTitle: "Transferring Knowledge Before Building Empires",
    ambientColor: "rgba(59,130,246,0.22)",
    sceneType: "teacher",
    tagline: "Classroom board, curious minds, Python & Machine Learning core concepts.",
    narrative:
      "Before writing enterprise software, I stood in front of blackboards and screens, breaking down complex Python algorithms, AI workflows, and machine learning models for eager students. Teaching forced me to understand technology to its bare metal bones — if you can't explain it simply, you don't know it deeply enough.",
    techTags: ["Python Mentorship", "AI / ML Fundamentals", "Algorithmic Logic", "Live Classroom Demos"],
    metrics: { label: "IMPACT", val: "Knowledge First" },
  },
  {
    actNum: "CHAPTER 02",
    badge: "THE FORGE",
    title: "THE DEVELOPER",
    themeTitle: "The Code Editor Replaces The Chalkboard",
    ambientColor: "rgba(119,123,180,0.25)",
    sceneType: "developer",
    tagline: "Classroom dissolves. A code editor illuminates the dark room. PHP & First Internship.",
    narrative:
      "The chalk dust cleared, replaced by late-night blue light. Stepping into my first real professional internship, raw academic logic collided with brutal production environments. Writing PHP scripts, handling live client databases, debugging stubborn server errors — this was where theory transformed into muscle memory.",
    techTags: ["PHP Core", "Database Normalization", "Internship Grind", "Production Debugging"],
    metrics: { label: "MILESTONE", val: "First Prod Commit" },
  },
  {
    actNum: "CHAPTER 03",
    badge: "THE EVOLUTION",
    title: "THE BUILDER",
    themeTitle: "Assembling The Universal Architecture",
    ambientColor: "rgba(16,185,129,0.22)",
    sceneType: "builder",
    tagline: "Stack Assembly: PHP → Python → Django → JS/Next.js → Distributed APIs.",
    narrative:
      "A developer solves tickets; a builder constructs ecosystems. PHP gave me database rigor, which evolved into Python & Django for bulletproof backend ORM and secure APIs. Then came modern JavaScript, Next.js, and fluid reactive UI. Piece by piece, I assembled a complete multi-tier engineering stack.",
    techTags: ["PHP → Django", "Next.js & React", "MySQL Architecture", "REST & FastAPIs"],
    metrics: { label: "VELOCITY", val: "Full Stack Mastery" },
  },
  {
    actNum: "CHAPTER 04",
    badge: "IN THE TRENCHES",
    title: "THE FREELANCER",
    themeTitle: "Real Pressure. Real Clients. Unforgiving Deadlines.",
    ambientColor: "rgba(245,158,11,0.22)",
    sceneType: "freelancer",
    tagline: "Client meetings, wireframes, custom architectures, conversion-focused design.",
    narrative:
      "Freelancing stripped away safety nets. It wasn't just about clean syntax anymore — it was about business survival, client conversion, UI/UX aesthetics, and delivering high-value solutions when the clock was ticking. Every project was a masterclass in end-to-end accountability.",
    techTags: ["Client Consultations", "UI/UX Systems", "End-to-End Delivery", "Revenue Conversion"],
    metrics: { label: "PROVING GROUND", val: "100% Delivery Rate" },
  },
  {
    actNum: "CHAPTER 05",
    badge: "THE CLIMAX",
    title: "AKSBit SYSTEMS",
    themeTitle: "The Journey Became A Company.",
    ambientColor: "rgba(20,104,232,0.35)",
    sceneType: "company",
    tagline: "Screen expands. The brand illuminates. The journey transitions into an institution.",
    narrative:
      "Teaching shaped the clarity. Development forged the technical discipline. Building scaled the architecture. Freelancing mastered client trust. All the late nights, the hard-learned lessons, and the relentless iterations converged into one undeniable vision.\n\nToday, it isn't just an individual's journey anymore. It is AKSBit Systems — engineered to innovate, build, empower, and deliver.",
    techTags: ["Enterprise Digital Products", "Custom Software", "Sustainable Scale", "Smart Solutions"],
    metrics: { label: "STATUS", val: "ESTABLISHED & OPERATIONAL" },
  },
];

export default function JourneyCanvas() {
  const [started, setStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const activeAct = acts[currentStep];

  const handleNext = () => {
    if (currentStep < acts.length - 1) {
      setCurrentStep((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((p) => p - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!started && (e.key === "Enter" || e.key === " ")) {
        setStarted(true);
      }
      if (started) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, currentStep]);

  return (
    <main className="min-h-screen bg-[#030812] text-white selection:bg-[#1468E8] selection:text-white relative overflow-hidden flex flex-col justify-between font-sans">
      
      {/* Dynamic Ambient Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 transform-gpu"
        style={{
          backgroundColor: started ? activeAct.ambientColor : "rgba(20,104,232,0.18)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Top Header */}
      <header className="relative z-30 max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#1468E8] hover:bg-[#1468E8]/10 text-xs font-mono font-bold uppercase transition-all duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#1468E8]" />
          <span>Exit To Main Site</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#1468E8] animate-ping" />
          <span className="text-gray-400 uppercase tracking-widest text-[11px]">
            {started ? `${activeAct.actNum} // 05` : "TERMINAL STANDBY"}
          </span>
        </div>
      </header>

      {/* ================= SCREEN STAGE ================= */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-6 my-auto py-8">
        
        {/* ================= STAGE 0: RETRO DIGITAL CONSOLE INTRO ================= */}
        {!started ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#071328]/90 to-[#040A17]/95 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-center relative overflow-hidden"
          >
            {/* CRT Scanline Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,104,232,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-300 mb-6">
              <Terminal className="w-3.5 h-3.5 text-[#1468E8]" />
              <span>DIGITAL CHRONICLE // VER 1.0</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
              MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1468E8] via-[#60A5FA] to-white">JOURNEY.</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto font-mono mb-10 leading-relaxed">
              An unvarnished personal chronicle of late-night code, lessons learned, and the relentless build that birthed an enterprise.
            </p>

            {/* Character Pressable Button */}
            <div className="relative inline-block group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1468E8] to-[#60A5FA] blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
              
              <button
                onClick={() => setStarted(true)}
                className="relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#1468E8] hover:bg-[#0F52BA] text-white text-xs sm:text-sm font-mono font-black tracking-widest uppercase transition-all flex items-center gap-3 shadow-2xl active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>START JOURNEY</span>
              </button>
            </div>

            <p className="text-[11px] font-mono text-gray-500 mt-6 tracking-wider">
              [ PRESS BUTTON OR HIT ENTER TO INITIALIZE CANVAS ]
            </p>
          </motion.div>
        ) : (
          
          /* ================= STAGE 1-5: STORY ACTS CANVAS ================= */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAct.actNum}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* LEFT: Massive Typography Narrative */}
              <div className="lg:col-span-7 flex flex-col items-start">
                
                {/* Chapter Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black tracking-widest uppercase bg-[#1468E8] text-white shadow-[0_0_20px_rgba(20,104,232,0.45)]">
                    {activeAct.actNum}
                  </span>
                  <span className="text-xs font-mono font-bold tracking-widest text-gray-400">
                    // {activeAct.badge}
                  </span>
                </div>

                {/* Big Bold Headline */}
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4">
                  {activeAct.title}
                </h2>

                <p className="text-xs sm:text-sm font-mono text-blue-400 font-bold uppercase tracking-wider mb-6">
                  {activeAct.themeTitle}
                </p>

                {/* Narrative Passage */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-8 whitespace-pre-line">
                  {activeAct.narrative}
                </p>

                {/* Tech Pills for this Chapter */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 w-full">
                  {activeAct.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* RIGHT: Visual Storytelling Canvas Box */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                  
                  {/* Visual Scene Switcher */}
                  <div className="relative z-10 w-full my-auto py-6">
                    {activeAct.sceneType === "teacher" && (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-lg">
                          <GraduationCap className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold font-mono text-white">THE CLASSROOM</h4>
                        <p className="text-xs font-mono text-gray-400 max-w-xs mx-auto">
                          Deconstructing algorithms &amp; mentoring next-gen developers in AI/Python.
                        </p>
                      </div>
                    )}

                    {activeAct.sceneType === "developer" && (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 flex items-center justify-center mx-auto shadow-lg">
                          <Laptop className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold font-mono text-white">THE CODE EDITOR</h4>
                        <p className="text-xs font-mono text-gray-400 max-w-xs mx-auto">
                          PHP scripts, first enterprise internship, live SQL queries &amp; git branches.
                        </p>
                      </div>
                    )}

                    {activeAct.sceneType === "builder" && (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                          <Cpu className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold font-mono text-white">THE FULL STACK CORE</h4>
                        <p className="text-xs font-mono text-gray-400 max-w-xs mx-auto">
                          Python + Django ORM + Next.js client layers orchestrated in sync.
                        </p>
                      </div>
                    )}

                    {activeAct.sceneType === "freelancer" && (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
                          <Briefcase className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold font-mono text-white">SOLVING REAL PROBLEMS</h4>
                        <p className="text-xs font-mono text-gray-400 max-w-xs mx-auto">
                          Commercial projects, client conversions, high-pressure execution.
                        </p>
                      </div>
                    )}

                    {/* CHAPTER 05: CLIMAX - AKSBIT SYSTEMS LOGO REVEAL */}
                    {activeAct.sceneType === "company" && (
                      <div className="text-center space-y-6">
                        <div className="relative py-4 px-6 rounded-2xl bg-[#050D1A] border border-[#1468E8]/40 shadow-[0_0_40px_rgba(20,104,232,0.4)]">
                          <img
                            src="/logo-landscape.png"
                            alt="AKSBit Systems Logo"
                            className="h-14 sm:h-18 w-auto mx-auto object-contain filter drop-shadow-lg"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = "none";
                              const fb = document.getElementById("climax-fb");
                              if (fb) fb.style.display = "block";
                            }}
                          />
                          <div id="climax-fb" className="hidden text-2xl font-black text-white">
                            AKSBit<span className="text-[#1468E8]"> Systems</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-base font-black font-mono text-[#60A5FA] tracking-wide uppercase">
                            The journey became a company.
                          </p>
                          <p className="text-[11px] font-mono text-gray-400 mt-1">
                            Innovate • Build • Empower • Deliver
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Metric Badge */}
                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>{activeAct.metrics.label}</span>
                    <span className="font-bold text-white">{activeAct.metrics.val}</span>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        )}

      </div>

      {/* ================= BOTTOM SLIDER CONTROLS ================= */}
      {started && (
        <footer className="relative z-30 max-w-7xl mx-auto w-full px-6 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Step Dots */}
          <div className="flex items-center gap-2">
            {acts.map((act, idx) => (
              <button
                key={act.actNum}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStep === idx
                    ? "w-10 sm:w-12 bg-[#1468E8] shadow-[0_0_12px_rgba(20,104,232,0.8)]"
                    : "w-2.5 sm:w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to ${act.actNum}`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`p-3 rounded-full border transition-all ${
                currentStep === 0
                  ? "border-white/5 text-gray-600 cursor-not-allowed"
                  : "border-white/15 bg-white/5 hover:border-[#1468E8] hover:bg-[#1468E8]/10 text-white cursor-pointer"
              }`}
              aria-label="Previous Chapter"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {currentStep === acts.length - 1 ? (
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-[#1468E8] text-white text-xs font-mono font-black tracking-wider uppercase shadow-[0_0_30px_rgba(20,104,232,0.6)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Build Together</span>
                <Sparkles className="w-4 h-4" />
              </Link>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full bg-[#1468E8] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(20,104,232,0.4)] hover:shadow-[0_0_30px_rgba(20,104,232,0.7)] hover:scale-105 cursor-pointer"
              >
                <span>Next Chapter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => {
                setStarted(false);
                setCurrentStep(0);
              }}
              title="Restart Journey"
              className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all ml-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

        </footer>
      )}
    </main>
  );
}