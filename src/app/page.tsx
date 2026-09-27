"use client";

import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import EntryScreen from "@/components/sections/01_EntryScreen";
import Hero from "@/components/sections/02_Hero";
import StoryJourney from "@/components/sections/03_StoryJourney";
import DigitalWorkshop from "@/components/sections/04_DigitalWorkshop";
import Projects from "@/components/sections/05_Projects";
import Technology from "@/components/sections/06_Technology";
import DigitalGrowth from "@/components/sections/07_DigitalGrowth";
import Contact from "@/components/sections/08_Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  const [showEntry, setShowEntry] = useState(true);

  return (
    <main className="relative min-h-screen bg-white">
      {/* 01. Opening Experience */}
      <EntryScreen isOpen={showEntry} onEnter={() => setShowEntry(false)} />

      {/* Global Navbar */}
      <Navbar />

      {/* 02. The Hero (Light) */}
      <Hero />

      {/* 03. The Journey (Light / Subtle) */}
      <StoryJourney />

      {/* 04. Digital Workshop / Services (Dark Chapter) */}
      <DigitalWorkshop />

      {/* 05. Selected Work (Light) */}
      <Projects />

      {/* 06. Digital Workbench / Tech */}
      <Technology />

      {/* 07. Digital Growth */}
      <DigitalGrowth />

      {/* 08. Interactive Contact (Cinematic Dark) */}
      <Contact />
      <Footer />
    </main>
  );
}