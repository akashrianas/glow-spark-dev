import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/badge";
import caseSaas from "@/assets/case-saas.jpg";
import caseAi from "@/assets/case-ai.jpg";
import caseEcom from "@/assets/case-ecom.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Rapid MVP — SaaS Dashboard",
    stack: ["React", "Supabase", "Stripe"],
    image: caseSaas,
  },
  {
    title: "AI Document Processor",
    stack: ["LangChain", "FastAPI", "React"],
    image: caseAi,
  },
  {
    title: "Ecommerce Storefront",
    stack: ["Next.js", "Shopify", "Tailwind"],
    image: caseEcom,
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const ctx = gsap.context(() => {
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }, section);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="work" className="bg-bg py-32 overflow-hidden">
      <p className="font-mono text-xs text-accent-default tracking-widest uppercase px-8 md:px-16 mb-6">
        — Selected Work
      </p>
      <h2
        className="text-display text-text px-8 md:px-16 mb-16"
        style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
      >
        Case Studies.
      </h2>

      <div
        id="portfolio-track"
        ref={trackRef}
        className="flex gap-6 px-8 md:px-16 will-change-transform"
      >
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="aspect-[4/3] w-[70vw] md:w-[40vw] flex-shrink-0 bg-bg-card relative overflow-hidden group"
          >
            {/* Image — grayscale by default, color on hover (spotlight effect) */}
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-110 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 font-mono text-xs text-text-subtle uppercase tracking-widest z-10">
              0{i + 1}
            </span>

            {/* Hover overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-display text-2xl text-text mb-4">
                {p.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Badge
                    key={t}
                    className="font-mono text-xs rounded-full bg-transparent border border-accent-default/40 text-accent-default hover:bg-transparent"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
