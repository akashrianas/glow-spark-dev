const projects = [
  {
    year: "2025",
    name: "Synthwave Labs",
    type: "AI SaaS",
    desc: "Multi-agent research platform. Shipped in 11 days.",
    stack: "Next · LangGraph · Postgres",
  },
  {
    year: "2025",
    name: "Atlas Commerce",
    type: "E-commerce",
    desc: "Headless storefront, 100/100 Lighthouse, 4× conversion lift.",
    stack: "TanStack · Shopify · Edge",
  },
  {
    year: "2024",
    name: "Operator OS",
    type: "Internal Tool",
    desc: "Replaced a 6-person ops team with a 12-node agent graph.",
    stack: "n8n · OpenAI · Supabase",
  },
  {
    year: "2024",
    name: "Field Notes",
    type: "Mobile App",
    desc: "Offline-first journaling app with on-device transcription.",
    stack: "React Native · Whisper",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 border-t border-white/5 bg-bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20">
          <div className="font-mono-tight text-xs uppercase tracking-[0.3em] text-accent-default mb-4">
            ◆ Selected Work
          </div>
          <h2 className="text-display text-5xl md:text-7xl">
            Recent <span className="text-text-muted">launches.</span>
          </h2>
        </div>

        <ul className="border-t border-white/10">
          {projects.map((p, i) => (
            <li
              key={p.name}
              className="group grid grid-cols-12 gap-4 items-center py-8 border-b border-white/10 hover:bg-accent-default/5 transition-colors px-2 cursor-pointer"
            >
              <span className="col-span-1 font-mono-tight text-xs text-text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-1 font-mono-tight text-xs text-text-muted">
                {p.year}
              </span>
              <h3 className="col-span-10 md:col-span-3 text-display text-2xl md:text-3xl group-hover:text-accent-default transition-colors">
                {p.name}
              </h3>
              <span className="hidden md:block col-span-2 font-mono-tight text-xs uppercase tracking-widest text-text-muted">
                {p.type}
              </span>
              <p className="hidden md:block col-span-3 text-sm text-text-muted">
                {p.desc}
              </p>
              <span className="hidden md:block col-span-1 font-mono-tight text-[10px] uppercase tracking-widest text-text-subtle text-right">
                {p.stack}
              </span>
              <span
                aria-hidden
                className="hidden md:flex col-span-1 justify-end text-2xl text-text-subtle group-hover:text-accent-default group-hover:translate-x-1 transition-all"
              >
                ↗
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
