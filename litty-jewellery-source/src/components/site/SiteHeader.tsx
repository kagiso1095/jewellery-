import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.35em] text-ivory">LITTY</span>
          <span className="eyebrow mt-1 text-[0.6rem]">Fine Jewellery</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-sm tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-gold data-[status=active]:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/enquiry"
            className="hidden border border-gold/60 px-5 py-2.5 text-xs tracking-[0.22em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:inline-block"
          >
            Book a viewing
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-ivory md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-[0.18em] uppercase text-muted-foreground data-[status=active]:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
