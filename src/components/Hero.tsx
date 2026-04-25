import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-anim='eyebrow']", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          "[data-anim='line']",
          { yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.08 },
          "-=0.5",
        )
        .from("[data-anim='sub']", { y: 16, opacity: 0, duration: 0.8 }, "-=0.5")
        .from("[data-anim='cta'] > *", { y: 12, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(
          "[data-anim='meta'] > *",
          { y: 10, opacity: 0, duration: 0.5, stagger: 0.05 },
          "-=0.3",
        );

      gsap.to("[data-anim='cursor']", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "steps(1)",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative min-h-screen pt-32 pb-24 overflow-hidden noise grid-bg"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div
          data-anim="eyebrow"
          className="flex items-center gap-3 font-mono-tight text-xs uppercase tracking-[0.3em] text-text-muted mb-10"
        >
          <span className="h-px w-10 bg-accent-default" />
          Available for Q3 — 2 slots left
        </div>

        <h1 className="text-display text-[14vw] md:text-[10vw] lg:text-[9rem]">
          <span className="block overflow-hidden">
            <span data-anim="line" className="block">
              Rapid<span className="text-accent-default">.</span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-anim="line" className="block text-text-muted">
              Prototyping.
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-anim="line" className="block">
              At thought-speed
              <span data-anim="cursor" className="inline-block ml-2 w-[0.5em] h-[0.85em] align-baseline bg-accent-default translate-y-1" />
            </span>
          </span>
        </h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <p
            data-anim="sub"
            className="lg:col-span-6 text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
          >
            I'm a web developer & AI automation engineer shipping production-grade
            products in days, not quarters. From zero-to-MVP to autonomous agent
            stacks — built with taste.
          </p>

          <div data-anim="cta" className="lg:col-span-3 flex flex-col gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-between rounded-full bg-accent-default text-bg px-6 py-4 text-sm font-bold uppercase tracking-widest hover:shadow-[var(--shadow-accent)] transition-shadow"
            >
              Book intro call <span aria-hidden>↗</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-between rounded-full border border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-widest text-text hover:border-accent-default hover:text-accent-default transition-colors"
            >
              See selected work <span aria-hidden>↓</span>
            </a>
          </div>

          <div
            data-anim="meta"
            className="lg:col-span-3 flex lg:flex-col gap-6 font-mono-tight text-xs text-text-muted uppercase tracking-widest"
          >
            <div>
              <div className="text-3xl text-text font-sans font-black tracking-tighter">47</div>
              shipped products
            </div>
            <div>
              <div className="text-3xl text-text font-sans font-black tracking-tighter">
                7<span className="text-accent-default">d</span>
              </div>
              avg. mvp delivery
            </div>
            <div>
              <div className="text-3xl text-text font-sans font-black tracking-tighter">∞</div>
              vibes shipped
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
