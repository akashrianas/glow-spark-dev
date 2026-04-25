import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

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
    <div className="bg-bg text-text">
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
