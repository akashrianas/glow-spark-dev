const socials = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-bg border-t border-text-subtle/20 py-12 px-8 md:px-16">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono font-bold text-accent-default text-xl">
              VC
            </span>
            <span className="font-mono text-xs text-text-muted">
              Rapid Prototyping at the Speed of Thought.
            </span>
          </div>
          <div className="flex flex-wrap gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-muted hover:text-accent-default uppercase tracking-widest transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 font-mono text-xs text-text-subtle">
          <span>© 2025 Vibe Coder. All rights reserved.</span>
          <span>Built with React + GSAP + Cloudflare</span>
        </div>
      </div>
    </footer>
  );
}
