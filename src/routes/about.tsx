import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowLeft,
  Award,
  Briefcase,
  Code2,
  Heart,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SeamlessVideo } from "@/components/SeamlessVideo";
import ambientBg from "@/assets/aurora-bg.mp4.asset.json";
import founderImg from "@/assets/founder.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Carter | Founder & Lead Engineer" },
      {
        name: "description",
        content:
          "Meet Alex Carter — founder, lead engineer, and the mind behind rapid-shipping web, mobile, and AI products.",
      },
      {
        property: "og:title",
        content: "About — Alex Carter | Founder & Lead Engineer",
      },
      {
        property: "og:description",
        content:
          "Identity, experience, working process & client satisfaction.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "8+", label: "Years Experience", icon: Briefcase },
  { value: "50+", label: "Projects Shipped", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "30+", label: "Happy Clients", icon: Users },
];

const process = [
  {
    n: "01",
    title: "Discover",
    body: "Deep-dive into the problem, audience, and constraints. No fluff — just signal.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "Working software in days, not quarters. Iterate against real usage early.",
  },
  {
    n: "03",
    title: "Refine",
    body: "Polish UX, performance, and conversion. Ship production-grade craft.",
  },
  {
    n: "04",
    title: "Scale",
    body: "Automate, monitor, and grow. Built to outlive the launch hype.",
  },
];

function AboutPage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-fade",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.08,
        },
      );
    },
    { scope: root },
  );

  return (
    <div className="relative text-text">
      {/* Global ambient video background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <SeamlessVideo
          src={ambientBg.url}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)",
          }}
          aria-hidden
        />
      </div>

      <CustomCursor />
      <Navbar />

      <main ref={root} className="pt-28 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="about-fade inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted hover:text-accent-default transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>

        {/* Hero: identity */}
        <section className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 items-center mb-24">
          <div className="about-fade relative">
            <div
              className="absolute inset-6 rounded-full bg-accent-default/25 blur-3xl"
              aria-hidden
            />
            <div className="relative aspect-square rounded-3xl border border-accent-default/30 bg-bg/40 backdrop-blur-sm overflow-hidden">
              <img
                src={founderImg}
                alt="Alex Carter portrait"
                width={1024}
                height={1024}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="about-fade font-mono text-xs uppercase tracking-widest text-accent-default mb-4">
              <Sparkles className="inline w-3 h-3 mr-2" />
              About Me
            </p>
            <h1
              className="about-fade text-display text-text leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Hi, I'm Alex Carter.
            </h1>
            <p className="about-fade font-mono text-sm text-text-muted mt-6 max-w-xl leading-relaxed">
              Founder & Lead Engineer. I build production-grade web, mobile and
              AI products at uncomfortable speed — without sacrificing craft.
              For 8+ years I've helped founders, ecommerce brands, and startups
              translate ideas into shipped software that actually moves
              metrics.
            </p>
            <div className="about-fade mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "AI / LLMs",
                "Shopify",
                "Cloud",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-widest border border-accent-default/40 text-accent-default px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="about-fade relative bg-bg/60 backdrop-blur-md border border-white/10 hover:border-accent-default/50 transition-colors p-6 rounded-lg"
            >
              <Icon className="w-5 h-5 text-accent-default mb-4" />
              <div
                className="text-display text-text"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {value}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted mt-2">
                {label}
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-24">
          <h2
            className="about-fade text-display text-text mb-10"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            <Award className="inline w-7 h-7 text-accent-default mr-3 -mt-2" />
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                year: "2022 — Now",
                role: "Founder & Lead Engineer · Independent",
                body: "Shipping web, mobile & AI automation products for startups and ecommerce brands worldwide.",
              },
              {
                year: "2019 — 2022",
                role: "Senior Full-Stack Engineer · Tech Studio",
                body: "Led teams building high-traffic SaaS platforms and internal AI tooling.",
              },
              {
                year: "2016 — 2019",
                role: "Product Engineer · Early-Stage Startups",
                body: "0→1 product builds across fintech and consumer apps.",
              },
            ].map((e) => (
              <div
                key={e.role}
                className="about-fade grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 border-l-2 border-accent-default/40 pl-6 py-2"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-accent-default pt-1">
                  {e.year}
                </span>
                <div>
                  <h3 className="text-text font-medium text-lg">{e.role}</h3>
                  <p className="font-mono text-sm text-text-muted mt-2 leading-relaxed">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Working Process */}
        <section className="mb-24">
          <h2
            className="about-fade text-display text-text mb-10"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            <Code2 className="inline w-7 h-7 text-accent-default mr-3 -mt-2" />
            Working Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p) => (
              <div
                key={p.n}
                className="about-fade bg-bg/60 backdrop-blur-md border border-white/10 hover:border-accent-default/50 transition-colors p-6 rounded-lg"
              >
                <span className="font-mono text-xs text-accent-default tracking-widest">
                  {p.n}
                </span>
                <h3 className="text-text font-medium text-xl mt-3">
                  {p.title}
                </h3>
                <p className="font-mono text-sm text-text-muted mt-3 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Satisfaction */}
        <section className="mb-12">
          <h2
            className="about-fade text-display text-text mb-10"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            <Heart className="inline w-7 h-7 text-accent-default mr-3 -mt-2" />
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Alex shipped our MVP in 2 weeks. We closed our seed round 3 weeks later.",
                name: "Sarah K.",
                role: "Founder, Fintech Startup",
              },
              {
                quote:
                  "Easily the most senior engineer I've worked with. Speed AND craft — rare combo.",
                name: "Marcus L.",
                role: "CTO, E-commerce Brand",
              },
            ].map((t) => (
              <blockquote
                key={t.name}
                className="about-fade bg-bg/60 backdrop-blur-md border border-white/10 p-8 rounded-lg"
              >
                <p className="text-text text-lg leading-relaxed">
                  "{t.quote}"
                </p>
                <footer className="mt-6 font-mono text-xs uppercase tracking-widest">
                  <span className="text-accent-default">{t.name}</span>
                  <span className="text-text-muted"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="about-fade text-center mt-24 py-16 border-t border-white/10">
          <h2
            className="text-display text-text mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Let's build something fast.
          </h2>
          <Link
            to="/"
            hash="contact"
            className="inline-block bg-accent-default text-bg hover:bg-accent-muted font-mono text-xs tracking-widest uppercase px-8 h-12 leading-[3rem] shadow-[0_0_30px_color-mix(in_oklab,var(--accent-default)_60%,transparent)] transition-shadow"
          >
            Book a Call →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
