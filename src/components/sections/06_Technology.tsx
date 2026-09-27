"use client";

import { motion } from "framer-motion";

const groups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Backend & Systems",
    skills: ["Python", "Django", "PHP", "REST APIs", "FastAPI"],
  },
  {
    category: "Data & Architecture",
    skills: ["PostgreSQL", "MySQL", "ORM Architecture", "Database Design"],
  },
  {
    category: "Infrastructure & Tools",
    skills: ["Git & GitHub", "Vercel", "Linux / Hosting", "CI/CD"],
  },
];

export default function Technology() {
  return (
    <section id="tech" className="py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-widest">
            The Digital Workbench
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mt-3">
            TOOLS BEHIND THE BUILD
          </h2>
          <p className="text-text-muted mt-4 text-base">
            No bloated setups. A calibrated modern stack to deliver speed, maintainability, and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <motion.div
              key={g.category}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm"
            >
              <h3 className="text-sm font-mono uppercase text-brand-blue font-bold mb-6 tracking-wider">
                {g.category}
              </h3>
              <ul className="space-y-3">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm font-medium text-brand-navy flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}