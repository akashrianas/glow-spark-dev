import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: string;
  badge: string;
  title: string;
  description: string;
  price: string;
};

const services: Service[] = [
  {
    id: "mvp",
    badge: "Rapid Prototyping",
    title: "MVP in 48 Hours",
    description:
      "From idea to deployed product in two days. Perfect for founders validating fast.",
    price: "From $800",
  },
  {
    id: "ai",
    badge: "Automation",
    title: "AI Workflows",
    description:
      "Custom LLM pipelines, agents, and integrations that replace manual processes.",
    price: "From $1,200",
  },
  {
    id: "fullstack",
    badge: "Full-Stack",
    title: "Custom Web/Mobile",
    description:
      "End-to-end applications built with React, React Native, and modern backend APIs.",
    price: "From $2,500",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="services"
      className="bg-bg-surface py-32 px-8 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs text-accent-default tracking-widest uppercase mb-6">
          — Services
        </p>
        <h2
          className="text-display text-text mb-16"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          What I Build.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-text-subtle">
          {services.map((s) => {
            const isSelected = selected.includes(s.id);
            return (
              <Card
                key={s.id}
                data-service-card
                className="bg-bg-card rounded-none border-0 p-8 flex flex-col justify-between min-h-[420px] gap-6"
              >
                <div>
                  <Badge className="font-mono text-xs bg-accent-default/10 text-accent-default border border-accent-default/30 hover:bg-accent-default/10 rounded-full">
                    {s.badge}
                  </Badge>
                  <h3 className="text-display text-3xl mt-6 text-text">
                    {s.title}
                  </h3>
                  <p className="font-mono text-sm text-text-muted mt-4 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div
                    className="text-display text-5xl text-accent-default mb-6"
                  >
                    {s.price}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      onClick={() => toggle(s.id)}
                      className={`w-full rounded-none font-mono text-xs tracking-widest uppercase border-accent-default bg-transparent hover:bg-accent-default hover:text-bg ${
                        isSelected
                          ? "bg-accent-default text-bg"
                          : "text-accent-default"
                      }`}
                    >
                      {isSelected ? "✓ Added" : "Add to Brief"}
                    </Button>
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full rounded-none font-mono text-xs tracking-widest uppercase text-text-muted hover:bg-transparent hover:text-accent-default"
                    >
                      <a href="#contact">Book Discovery Call</a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Floating Project Brief bar */}
      {selected.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-accent-default text-bg font-mono text-sm py-3 px-6 flex justify-between items-center shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.5)]">
          <span className="uppercase tracking-widest">
            Project Brief — {selected.length} service
            {selected.length > 1 ? "s" : ""} selected
          </span>
          <a
            href="#contact"
            className="font-bold uppercase tracking-widest hover:underline"
          >
            Request Proposal →
          </a>
        </div>
      )}
    </section>
  );
}
