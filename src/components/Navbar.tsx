import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-bg"
      style={{ borderBottom: "1px solid #1A1A1A" }}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="font-mono text-xl font-bold text-accent-default tracking-tight"
        >
          VC
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-accent-default transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right CTA (desktop) */}
        <Button
          variant="outline"
          className="hidden md:inline-flex border-accent-default text-accent-default bg-transparent hover:bg-accent-default hover:text-bg font-mono text-xs tracking-widest uppercase"
          asChild
        >
          <a href="#contact">Book a Call</a>
        </Button>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-text hover:bg-bg-surface hover:text-accent-default"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-bg border-l border-white/5 text-text w-[80vw] max-w-sm"
          >
            <SheetTitle className="font-mono text-xl font-bold text-accent-default mb-10">
              VC
            </SheetTitle>
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-text-muted hover:text-accent-default transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="mt-6 border-accent-default text-accent-default bg-transparent hover:bg-accent-default hover:text-bg font-mono text-xs tracking-widest uppercase"
                asChild
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  Book a Call
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
