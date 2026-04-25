export function Contact() {
  return (
    <section id="contact" className="relative py-32 border-t border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="font-mono-tight text-xs uppercase tracking-[0.3em] text-accent-default mb-4">
          ◆ Contact
        </div>
        <h2 className="text-display text-5xl md:text-8xl mb-12 max-w-5xl">
          Got an idea? <br />
          Let's <span className="text-accent-default">ship it</span> this week.
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6">
            <a
              href="mailto:hello@vibecoder.dev"
              className="inline-block text-display text-3xl md:text-5xl border-b-2 border-accent-default hover:text-accent-default transition-colors"
            >
              hello@vibecoder.dev
            </a>
          </div>
          <div className="md:col-span-3 font-mono-tight text-xs uppercase tracking-widest text-text-muted space-y-2">
            <div className="text-text-subtle">Find me</div>
            <a href="#" className="block hover:text-accent-default">
              ↗ Twitter / X
            </a>
            <a href="#" className="block hover:text-accent-default">
              ↗ GitHub
            </a>
            <a href="#" className="block hover:text-accent-default">
              ↗ LinkedIn
            </a>
          </div>
          <div className="md:col-span-3 font-mono-tight text-xs uppercase tracking-widest text-text-muted space-y-2">
            <div className="text-text-subtle">Based in</div>
            <div>Remote — UTC+1</div>
            <div className="text-text-subtle mt-4">Response time</div>
            <div>&lt; 12 hours</div>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono-tight text-xs text-text-subtle uppercase tracking-widest">
          <span>© 2026 Vibecoder — All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-default animate-pulse" />
            System operational
          </span>
        </footer>
      </div>
    </section>
  );
}
