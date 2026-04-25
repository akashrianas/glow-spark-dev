import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(el, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);

    // Refresh ScrollTrigger after fonts load (per spec)
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="fixed top-0 left-0 pointer-events-none bg-accent-default rounded-full z-[9999] mix-blend-difference"
      style={{ width: 8, height: 8, transform: "translate(-50%, -50%)" }}
    />
  );
}
