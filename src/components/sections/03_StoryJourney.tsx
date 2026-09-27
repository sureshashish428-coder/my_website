"use client";

const chapters = [
  { step: "01", title: "THE TEACHER", desc: "Teaching AI/ML & Python in government schools." },
  { step: "02", title: "THE DEVELOPER", desc: "PHP internship, core coding fundamentals, early systems." },
  { step: "03", title: "THE BUILDER", desc: "Mastering Python, Django, Next.js, APIs & modern database architectures." },
  { step: "04", title: "THE FREELANCER", desc: "Delivering real client products and end-to-end solutions." },
  { step: "05", title: "AKSBIT SYSTEMS", desc: "The journey evolved into a unified digital ecosystem." },
];

export default function StoryJourney() {
  return (
    <section id="story" className="py-28 bg-surface-subtle border-t border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-wider">Chapter 02</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mt-2">The Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {chapters.map((ch) => (
            <div key={ch.step} className="p-6 rounded-2xl bg-white border border-black/5 flex flex-col justify-between h-56 shadow-sm hover:border-brand-blue/40 transition-colors">
              <span className="font-mono text-sm font-bold text-brand-blue">{ch.step}</span>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-2">{ch.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}