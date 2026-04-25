import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SeamlessVideo } from "@/components/SeamlessVideo";
import ambientBg from "@/assets/aurora-bg.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Coder — Rapid Prototyping at the Speed of Thought" },
      {
        name: "description",
        content:
          "Web / Mobile / AI Automation portfolio & services. Production-grade products shipped in days, not quarters.",
      },
      {
        property: "og:title",
        content: "Vibe Coder — Rapid Prototyping at the Speed of Thought",
      },
      {
        property: "og:description",
        content: "Web / Mobile / AI Automation — Portfolio & Services",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vibe Coder — Rapid Prototyping" },
      {
        name: "twitter:description",
        content: "Web / Mobile / AI Automation — Portfolio & Services",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative text-text">
      {/* Global ambient video background — fixed, behind everything.
          Rendered as a sibling outside the stacking-context wrapper so -z-10 actually goes behind. */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <SeamlessVideo
          src={ambientBg.url}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </div>

      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
