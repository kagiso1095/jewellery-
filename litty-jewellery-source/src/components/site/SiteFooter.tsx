import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-3xl tracking-[0.35em] text-ivory">LITTY</span>
          <div className="gold-rule mt-4" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A retail atelier for necklaces, chains, watches, rings and earrings — hand-selected,
            certified and finished with care in Johannesburg.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About us" },
              { to: "/products", label: "Products" },
              { to: "/enquiry", label: "Enquiry" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Visit &amp; Call</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Shop 14, Rosebank Arcade, 12 Cradock Ave, Johannesburg
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              +27 11 447 0182
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              hello@littyjewellery.co.za
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              @littyjewellery
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-6 py-6">
        <p className="mx-auto max-w-7xl text-xs tracking-[0.18em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} LITTY Jewellery — All rights reserved
        </p>
      </div>
    </footer>
  );
}
