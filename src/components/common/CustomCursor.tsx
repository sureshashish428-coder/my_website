"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - (isHovered ? 24 : 6),
        y: mousePosition.y - (isHovered ? 24 : 6),
        width: isHovered ? 48 : 12,
        height: isHovered ? 48 : 12,
        backgroundColor: "#FFFFFF",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}