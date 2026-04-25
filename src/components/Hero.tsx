import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder.png";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const personRef = useRef<HTMLAnchorElement>(null);
  const floatRef = useRef<HTMLImageElement>(null);

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
      if (personRef.current) {
        // Fade-in on load
        gsap.fromTo(
          personRef.current,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            delay: 0.35,
            ease: "expo.out",
          },
        );
      }
      if (floatRef.current) {
        // Subtle floating idle motion
        gsap.to(floatRef.current, {
          y: -14,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
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
      {/* Clickable founder portrait — top right, floats & fades in */}
      <Link
        to="/about"
        ref={personRef}
        aria-label="About me"
        className="group absolute top-20 right-4 md:right-12 w-[42vw] max-w-[460px] min-w-[220px] aspect-square pointer-events-auto z-10"
      >
        {/* Glow halo */}
        <div
          className="absolute inset-6 rounded-full bg-accent-default/20 blur-3xl group-hover:bg-accent-default/35 transition-colors duration-500"
          aria-hidden
        />
        {/* Soft ring */}
        <div
          className="absolute inset-0 rounded-full border border-accent-default/30 group-hover:border-accent-default/70 transition-colors duration-500"
          aria-hidden
        />
        <img
          ref={floatRef}
          src={founderImg}
          alt="Alex Carter — Founder & Lead Engineer"
          width={1024}
          height={1024}
          className="relative w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_0_40px_color-mix(in_oklab,var(--accent-default)_55%,transparent)] transition-all duration-500"
          style={{ willChange: "transform" }}
        />
        {/* Hover hint */}
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase text-accent-default opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          → About Me
        </span>
      </Link>

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
