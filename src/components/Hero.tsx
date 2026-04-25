import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

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
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-screen flex items-end pb-20 px-8 md:px-16 overflow-hidden"
    >
      {/* Lottie placeholder — top right */}
      <div
        id="lottie-hero"
        className="absolute top-28 right-8 md:right-16 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-dashed border-text-subtle flex items-center justify-center"
      >
        <span className="font-mono text-xs text-text-subtle">
          [ lottie animation ]
        </span>
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
            className="bg-accent-default text-bg hover:bg-accent-muted font-mono text-xs tracking-widest uppercase rounded-none px-6 h-11"
          >
            <a href="#work">View Work</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-transparent border border-text-subtle text-text-muted hover:bg-transparent hover:border-accent-default hover:text-accent-default font-mono text-xs tracking-widest uppercase rounded-none px-6 h-11"
          >
            <a href="#services">See Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
