import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";

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
    <main className="min-h-screen bg-bg text-text">
      <SiteHeader />
      <Hero />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
