const services = [
  {
    n: "01",
    title: "Web Development",
    body: "Marketing sites, complex SaaS dashboards, e-commerce. Next.js, TanStack, edge-first. Pixel-tight, Lighthouse-perfect.",
    tags: ["React", "TanStack", "Tailwind", "Edge"],
  },
  {
    n: "02",
    title: "Rapid Prototyping",
    body: "Idea → working product in a week. Investor demos, validation MVPs, hackathon-grade execution at agency-grade polish.",
    tags: ["MVP", "Sprints", "Validation", "Demos"],
  },
  {
    n: "03",
    title: "AI Automation",
    body: "Custom agents, RAG pipelines, workflow automations. Replace 10 hours of ops with 10 lines of orchestration.",
    tags: ["Agents", "RAG", "n8n", "OpenAI"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <div className="font-mono-tight text-xs uppercase tracking-[0.3em] text-accent-default mb-4">
              ◆ Services
            </div>
            <h2 className="text-display text-5xl md:text-7xl max-w-3xl">
              Three ways
              <br />
              to <span className="text-text-muted">ship faster.</span>
            </h2>
          </div>
          <p className="font-mono-tight text-sm text-text-muted max-w-xs">
            Pick a lane or combine them. Most clients run all three in
            parallel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-bg p-8 lg:p-10 hover:bg-bg-surface transition-colors min-h-[420px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-mono-tight text-xs text-text-subtle">
                  {s.n} / 03
                </span>
                <span className="h-2 w-2 rounded-full bg-text-subtle group-hover:bg-accent-default transition-colors" />
              </div>
              <h3 className="text-display text-3xl mb-4 group-hover:text-accent-default transition-colors">
                {s.title}
              </h3>
              <p className="text-text-muted leading-relaxed flex-1">{s.body}</p>
              <div className="flex flex-wrap gap-2 mt-8">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono-tight text-[10px] uppercase tracking-widest px-2.5 py-1 border border-white/10 rounded-full text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
