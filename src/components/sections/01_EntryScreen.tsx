"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, Terminal, ShieldCheck, Zap } from "lucide-react";
import useSound from "use-sound";

interface EntryProps {
  isOpen: boolean;
  onEnter: () => void;
}

const bootLogs = [
  "KERNEL_CORE_INITIALIZED ... [OK]",
  "GPU_ACCELERATOR: 60FPS SYNCHRONIZED",
  "ESTABLISHING SYSTEM ENCRYPTION ... [PASS]",
  "ALL PROTOCOLS ACTIVE // READY",
];

export default function EntryScreen({ isOpen, onEnter }: EntryProps) {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [logIndex, setLogIndex] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  // Progressive Boot Text Telemetry
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(interval);
  }, [isOpen]);

  const [playStartSound] = useSound("/sounds/system-start.mp3", {
    volume: 0.4,
    soundEnabled,
  });

  const [playHoverSound] = useSound("/sounds/hover.mp3", {
    volume: 0.15,
    soundEnabled,
  });

  const handleEnterClick = () => {
    setIsExiting(true);
    if (soundEnabled) {
      try {
        playStartSound();
      } catch {
        // Safe catch
      }
    }
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="entry-curtain"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#030712] text-white px-6 py-8 sm:py-10 select-none overflow-hidden"
        >
          {/* Subtle Ambient Circuit Glow & Radial Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,104,232,0.22)_0%,transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-40" />

          {/* Top Bar: Live Status + Audio Toggle */}
          <div className="w-full max-w-6xl flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>TERMINAL READY</span>
            </div>

            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-300 hover:text-white transition-colors px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#1468E8]" />
                  <span>SOUND: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-gray-500" />
                  <span>SOUND: OFF</span>
                </>
              )}
            </button>
          </div>

          {/* Center Stage: Holographic Rotating Core */}
          <div className="flex flex-col items-center text-center relative z-10 my-auto">
            
            {/* Holographic Glowing Pulse Rings */}
            <div className="relative mb-8 flex items-center justify-center">
              
              {/* Rotating Outer Tech Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-[#1468E8]/40 pointer-events-none"
              />

              {/* Counter-rotating Inner Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#38BDF8]/20 pointer-events-none"
              />

              {/* Core Logo Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 px-6 py-4 rounded-3xl bg-[#050D1A]/90 border border-white/20 backdrop-blur-xl shadow-[0_0_60px_rgba(20,104,232,0.45)] flex items-center justify-center group"
              >
                <img
                  src="/logo-landscape.png"
                  alt="AKSBit Systems Logo"
                  className="h-11 sm:h-13 w-auto object-contain drop-shadow-[0_0_18px_rgba(20,104,232,0.9)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                    const fb = document.getElementById("entry-logo-fallback");
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <div id="entry-logo-fallback" className="hidden items-center gap-2 text-2xl font-black text-white">
                  AKSBit<span className="text-[#1468E8]"> Systems</span>
                </div>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1.5">
                ENGINEERING DIGITAL ECOSYSTEMS
              </h2>
              <p className="text-[11px] sm:text-xs font-mono text-[#60A5FA] tracking-widest uppercase mb-8">
                INNOVATE • BUILD • EMPOWER • DELIVER
              </p>
            </motion.div>

            {/* Action Trigger Button */}
            <motion.button
              type="button"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              onClick={handleEnterClick}
              onMouseEnter={() => {
                if (soundEnabled) {
                  try {
                    playHoverSound();
                  } catch {
                    // Safe catch
                  }
                }
              }}
              className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#1468E8] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(20,104,232,0.5)] hover:shadow-[0_0_45px_rgba(20,104,232,0.8)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>ENTER EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Live Boot Stream Logs */}
            <div className="mt-8 flex items-center gap-2 text-[10px] font-mono text-gray-400 bg-white/[0.02] px-3.5 py-1.5 rounded-full border border-white/5">
              <Terminal className="w-3 h-3 text-[#1468E8]" />
              <span>{bootLogs[logIndex]}</span>
            </div>

          </div>

          {/* Footer Bottom Note */}
          <div className="relative z-10 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Smart Solutions for a Better Tomorrow
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}