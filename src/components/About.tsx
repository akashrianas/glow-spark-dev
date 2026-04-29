import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Cpu, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  { icon: Code2, label: "Web / Mobile Engineering" },
  { icon: Cpu, label: "AI Automation & Agents" },
  { icon: Sparkles, label: "Rapid Prototyping" },
];

const companies = [
  "Google",
  "Stripe",
  "Vercel",
  "Shopify",
  "Linear",
  "OpenAI",
  "Figma",
  "Supabase",
  "Notion",
  "Anthropic",
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
            },
          },
        );
      }

      if (trackRef.current) {
        const track = trackRef.current;
        // Duplicate content already in DOM — animate by half its width for seamless loop
        const totalWidth = track.scrollWidth / 2;
        gsap.to(track, {
          x: -totalWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 px-8 md:px-16 overflow-hidden"
    >
      <p className="font-mono text-xs text-accent-default tracking-widest uppercase mb-6">
        — About
      </p>
      <h2
        className="text-display text-text mb-16"
        style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
      >
        Behind the Code.
      </h2>

      {/* Card */}
      <div
        ref={cardRef}
        className="relative max-w-5xl mx-auto bg-bg-card/60 backdrop-blur-xl border border-accent-default/20 p-8 md:p-12 overflow-hidden"
      >
        {/* Decorative glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--accent-default) 25%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent-default), transparent)",
          }}
          aria-hidden
        />

        <div className="grid md:grid-cols-2 gap-10 relative">
          {/* Left — Identity */}
          <div>
            <p className="font-mono text-xs text-text-subtle uppercase tracking-widest mb-3">
              Name
            </p>
            <h3
              className="text-display text-text mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Alex Rivera
            </h3>

            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="text-display text-accent-default"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                8+
              </span>
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                Years of Experience
              </span>
            </div>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              Shipping production-grade products for startups and global teams —
              from zero-to-one MVPs to AI-driven platforms at scale.
            </p>
          </div>

          {/* Right — Specialties */}
          <div>
            <p className="font-mono text-xs text-text-subtle uppercase tracking-widest mb-6">
              Field of Specialty
            </p>
            <ul className="space-y-4">
              {specialties.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 border border-accent-default/30 text-accent-default group-hover:bg-accent-default group-hover:text-bg transition-colors">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-sm text-text">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Companies marquee — sliding right to left */}
      <div className="mt-16 max-w-5xl mx-auto">
        <p className="font-mono text-xs text-text-subtle uppercase tracking-widest mb-6 text-center">
          — Trusted by teams at
        </p>
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div
            className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, var(--bg) 0%, transparent 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, var(--bg) 0%, transparent 100%)",
            }}
            aria-hidden
          />

          <div
            ref={trackRef}
            className="flex gap-16 will-change-transform whitespace-nowrap"
          >
            {[...companies, ...companies].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-display text-text-muted hover:text-accent-default transition-colors flex-shrink-0"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
