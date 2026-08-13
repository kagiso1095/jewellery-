import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gem, ShieldCheck, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/hero.jpg";
import necklaces from "@/assets/necklaces.jpg";
import rings from "@/assets/rings.jpg";
import watches from "@/assets/watches.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LITTY Jewellery — Fine Gold Necklaces, Watches & Rings" },
      {
        name: "description",
        content:
          "LITTY Jewellery is a Johannesburg retail atelier for gold necklaces, chains, watches, rings and earrings. Browse the collections or book a private viewing.",
      },
      { property: "og:title", content: "LITTY Jewellery — Fine Gold Necklaces, Watches & Rings" },
      {
        property: "og:description",
        content:
          "Hand-selected gold and diamond jewellery, certified and finished with care. Visit our Rosebank store or send an enquiry.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    icon: Gem,
    title: "Hand-selected stones",
    body: "Every diamond and gemstone is inspected in-house before it reaches a setting.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & guaranteed",
    body: "Full certification on gold purity, plus a lifetime cleaning and re-polish service.",
  },
  {
    icon: Sparkles,
    title: "Made to your measure",
    body: "Resizing, engraving and bespoke commissions handled by our own goldsmiths.",
  },
];

const featured = [
  { img: necklaces, name: "Signature Necklaces", note: "From R2 450" },
  { img: watches, name: "Gold Timepieces", note: "From R7 900" },
  { img: rings, name: "Diamond Rings", note: "From R5 200" },
];

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={hero}
            alt="Gold diamond necklace resting on dark silk"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-6 py-24">
            <p className="eyebrow fade-up">Johannesburg · Est. 2014</p>
            <h1 className="fade-up mt-6 max-w-3xl text-5xl leading-[1.05] text-ivory md:text-7xl">
              Jewellery that carries
              <span className="block italic text-gold">your whole story</span>
            </h1>
            <p className="fade-up mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              LITTY is a family-run retail jeweller. We curate necklaces, chains, watches, rings and
              earrings in solid gold and certified stones — then fit them to you in-store, by hand.
            </p>
            <div className="fade-up mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.24em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Shop the collections
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/enquiry"
                className="inline-flex items-center border border-gold/50 px-8 py-4 text-xs tracking-[0.24em] uppercase text-gold transition-colors hover:bg-gold/10"
              >
                Make an enquiry
              </Link>
            </div>
          </div>
        </section>

        {/* Brief introduction */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <p className="eyebrow">Welcome to LITTY</p>
              <h2 className="mt-5 text-3xl leading-snug text-ivory md:text-4xl">
                A small store with a serious obsession for detail
              </h2>
              <div className="gold-rule mt-6" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                What began as a single display case in Rosebank is now five complete lines —
                necklaces, chains, watches, rings and earrings. We keep our range tight on purpose:
                fewer pieces, better gold, and a person who knows every item behind the counter.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Come in for a fitting, or send us an enquiry and we will hold a piece aside for you.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-gold hover:underline"
              >
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="lux-panel hover-lift p-6">
                  <h.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 text-lg text-ivory">{h.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="border-y border-border/60 bg-surface/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Featured lines</p>
                <h2 className="mt-4 text-3xl text-ivory md:text-4xl">This season in the case</h2>
              </div>
              <Link
                to="/products"
                className="text-xs tracking-[0.24em] uppercase text-gold hover:underline"
              >
                View all products
              </Link>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {featured.map((f) => (
                <Link key={f.name} to="/products" className="hover-lift group block">
                  <div className="overflow-hidden border border-border/60">
                    <img
                      src={f.img}
                      alt={f.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3 className="text-xl text-ivory">{f.name}</h3>
                    <span className="text-xs tracking-[0.2em] uppercase text-gold">{f.note}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="lux-panel px-8 py-16 text-center md:px-16">
            <p className="eyebrow">Private appointments</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-snug text-ivory md:text-5xl">
              Let us set aside an hour, a glass of bubbly, and the tray you asked for
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tell us what you are looking for and we will prepare a selection before you arrive.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/enquiry"
                className="bg-gold px-8 py-4 text-xs tracking-[0.24em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send an enquiry
              </Link>
              <Link
                to="/contact"
                className="border border-gold/50 px-8 py-4 text-xs tracking-[0.24em] uppercase text-gold transition-colors hover:bg-gold/10"
              >
                Find the store
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
