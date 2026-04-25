import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.1, ease: "expo.out" },
        );
      }
      if (subRef.current) {
        gsap.fromTo(
          subRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, delay: 0.25, duration: 0.9, ease: "expo.out" },
        );
      }
      if (gearRef.current) {
        // Continuous gear rotation
        gsap.to(gearRef.current, {
          rotate: 360,
          duration: 12,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen flex items-end pb-20 px-8 md:px-16 overflow-hidden"
    >
      {/* Rotating gear — top right */}
      <div
        className="absolute top-28 right-8 md:right-16 w-[180px] h-[180px] md:w-[220px] md:h-[220px] pointer-events-none flex items-center justify-center"
        aria-hidden
      >
        <div
          className="absolute inset-0 rounded-full border border-accent-default/20"
        />
        <div
          ref={gearRef}
          className="text-accent-default drop-shadow-[0_0_20px_var(--accent-default)]"
          style={{ willChange: "transform" }}
        >
          <Settings className="w-32 h-32 md:w-40 md:h-40" strokeWidth={1.2} />
        </div>
      </div>

      <div className="relative w-full lg:w-[70%]">
        <h1
          ref={headlineRef}
          className="text-display text-text"
          style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}
        >
          Rapid Prototyping at the Speed of Thought.
        </h1>

        <p
          ref={subRef}
          className="font-mono text-sm text-text-muted mt-6 max-w-md"
        >
          Specializing in Web/Mobile, AI Automation, and high-conversion
          Ecommerce.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-accent-default text-bg hover:bg-accent-muted font-mono text-xs tracking-widest uppercase rounded-none px-6 h-12 shadow-[0_0_30px_color-mix(in_oklab,var(--accent-default)_60%,transparent)] hover:shadow-[0_0_45px_color-mix(in_oklab,var(--accent-default)_85%,transparent)] transition-shadow"
          >
            <a href="#work">View Work</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-bg/60 backdrop-blur-md border-2 border-accent-default/70 text-accent-default hover:bg-accent-default hover:text-bg hover:border-accent-default font-mono text-xs tracking-widest uppercase rounded-none px-6 h-12 transition-colors"
          >
            <a href="#services">See Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
