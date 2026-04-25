import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  "React",
  "Vite",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Shadcn UI",
  "Supabase",
  "Cloudflare",
  "LangChain",
  "FastAPI",
  "React Native",
  "Figma",
];

export function Stack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-stack-badge]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="stack"
      className="relative py-32 px-8 md:px-16 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <p className="font-mono text-xs text-accent-default tracking-widest uppercase mb-6">
            — Tech Stack
          </p>
          <h2 className="text-display text-4xl text-text">Tools I Trust.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stack.map((tech) => (
            <div
              key={tech}
              data-stack-badge
              className="bg-bg-card/70 backdrop-blur-sm border border-text-subtle/20 p-4 font-mono text-sm text-text-muted hover:border-accent-default/50 hover:text-accent-default transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
