import { useEffect, useRef, useState, type ComponentType } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import heroLottie from "@/assets/hero-lottie.json";

type LottieComp = ComponentType<{ animationData: unknown; loop?: boolean; autoplay?: boolean }>;

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const [Lottie, setLottie] = useState<LottieComp | null>(null);

  useEffect(() => {
    let mounted = true;
    import("lottie-react").then((mod) => {
      if (mounted) setLottie(() => mod.default as LottieComp);
    });
    return () => {
      mounted = false;
    };
  }, []);

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
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-bg/70 -z-10" aria-hidden />

      {/* Lottie — top right */}
      <div
        id="lottie-hero"
        className="absolute top-28 right-8 md:right-16 w-[180px] h-[180px] md:w-[220px] md:h-[220px] pointer-events-none"
      >
        {Lottie ? <Lottie animationData={heroLottie} loop autoplay /> : null}
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
