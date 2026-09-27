"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import useSound from "use-sound";

interface EntryProps {
  isOpen: boolean;
  onEnter: () => void;
}

export default function EntryScreen({ isOpen, onEnter }: EntryProps) {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Sound hooks with safe fallback
  const [playStartSound] = useSound("/sounds/system-start.mp3", {
    volume: 0.45,
    soundEnabled,
  });

  const [playHoverSound] = useSound("/sounds/hover.mp3", {
    volume: 0.15,
    soundEnabled,
  });

  const handleEnterClick = () => {
    if (soundEnabled) {
      try {
        playStartSound();
      } catch {
        // audio play handle fallback
      }
    }
    setTimeout(() => {
      onEnter();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="entry-curtain"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#07152F] text-white px-6 py-10 selection:bg-transparent"
        >
          {/* Subtle Ambient Circuit Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,104,232,0.18)_0%,transparent_65%)] pointer-events-none" />

          {/* Sound Toggle (Top-Right) */}
          <div className="w-full max-w-6xl flex justify-end relative z-10">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-brand-blue" />
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

          {/* Central System Wake-up Core */}
          <div className="flex flex-col items-center text-center relative z-10 my-auto">
            {/* Logo Container with Subtle Pulse Ring */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Pulsing Backlight */}
              <div className="absolute -inset-4 bg-brand-blue/30 rounded-full blur-xl animate-pulse" />

              {/* Logo Frame */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(20,104,232,0.4)]">
                <Image
                  src="/logo.png"
                  alt="AKSBit Systems Logo"
                  width={80}
                  height={80}
                  priority
                  className="object-contain drop-shadow"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            </motion.div>

            {/* Brand Title & Taglines */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                AKSBit Systems
              </h1>
              <p className="text-xs md:text-sm font-mono text-[#EAF3FF]/80 tracking-widest uppercase mb-10">
                INNOVATE • BUILD • EMPOWER • DELIVER
              </p>
            </motion.div>

            {/* Trigger CTA */}
            <motion.button
              type="button"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              onClick={handleEnterClick}
              onMouseEnter={() => {
                if (soundEnabled) {
                  try {
                    playHoverSound();
                  } catch {
                    // audio play handle fallback
                  }
                }
              }}
              className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-brand-blue text-white text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(20,104,232,0.4)] hover:shadow-[0_0_40px_rgba(20,104,232,0.7)] hover:scale-105"
            >
              <span>ENTER EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Footer Note */}
          <div className="relative z-10 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
            Smart Solutions for a Better Tomorrow
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}