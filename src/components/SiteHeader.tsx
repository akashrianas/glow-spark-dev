import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-default shadow-[0_0_20px_var(--accent-default)] group-hover:scale-125 transition-transform" />
          <span className="font-mono-tight text-sm tracking-tight">
            vibecoder<span className="text-accent-default">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono-tight text-xs uppercase tracking-widest text-text-muted">
          <a href="#services" className="hover:text-text transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-text transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-text transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent-default text-bg px-4 py-2 text-xs font-bold uppercase tracking-widest hover:shadow-[var(--shadow-accent)] transition-shadow"
        >
          Start a Project
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
