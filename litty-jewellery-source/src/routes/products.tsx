import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import necklaces from "@/assets/necklaces.jpg";
import chains from "@/assets/chains.jpg";
import watches from "@/assets/watches.jpg";
import rings from "@/assets/rings.jpg";
import earrings from "@/assets/earrings.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Necklaces, Chains, Watches, Rings & Earrings | LITTY" },
      {
        name: "description",
        content:
          "Browse the LITTY Jewellery lines: gold necklaces, cuban chains, timepieces, diamond rings and earrings, with in-store pricing from R950.",
      },
      {
        property: "og:title",
        content: "Products — Necklaces, Chains, Watches, Rings & Earrings | LITTY",
      },
      {
        property: "og:description",
        content: "Five complete jewellery lines, hand-finished and certified in Johannesburg.",
      },
    ],
  }),
  component: Products,
});

const lines = [
  {
    id: "necklaces",
    name: "Necklaces",
    image: necklaces,
    blurb:
      "Delicate pendants and layered strands in 9ct and 18ct gold, sized from 40cm to 55cm.",
    items: [
      { name: "Petite Crescent Pendant", detail: "9ct gold · 42cm", price: "R2 450" },
      { name: "Aurelia Diamond Drop", detail: "18ct gold · 0.25ct", price: "R11 900" },
      { name: "Triple Strand Layer", detail: "9ct gold · 45/48/52cm", price: "R4 780" },
    ],
  },
  {
    id: "chains",
    name: "Chains",
    image: chains,
    blurb: "Solid cuban, rope and figaro links — weighted, stamped and priced by the gram.",
    items: [
      { name: "Cuban Link 8mm", detail: "9ct gold · 60cm", price: "R18 400" },
      { name: "Rope Chain 4mm", detail: "9ct gold · 55cm", price: "R6 950" },
      { name: "Figaro Classic 5mm", detail: "9ct gold · 50cm", price: "R8 250" },
    ],
  },
  {
    id: "watches",
    name: "Watches",
    image: watches,
    blurb: "Gold-cased automatics and dress quartz, serviced and regulated before collection.",
    items: [
      { name: "Regent Automatic", detail: "Gold-plated · sapphire", price: "R14 500" },
      { name: "Sable Dress Quartz", detail: "Slim 36mm case", price: "R7 900" },
      { name: "Heritage Day-Date", detail: "Steel & gold two-tone", price: "R21 300" },
    ],
  },
  {
    id: "rings",
    name: "Rings",
    image: rings,
    blurb: "Solitaires, eternity bands and signets — resized free within the first year.",
    items: [
      { name: "Solitaire Brilliant", detail: "18ct gold · 0.70ct", price: "R38 900" },
      { name: "Pavé Eternity Band", detail: "18ct gold · 0.40ct total", price: "R16 400" },
      { name: "Classic Signet", detail: "9ct gold · engravable", price: "R5 200" },
    ],
  },
  {
    id: "earrings",
    name: "Earrings",
    image: earrings,
    blurb: "Huggies, hoops and drops with hypoallergenic gold posts.",
    items: [
      { name: "Teardrop Diamond Drops", detail: "18ct gold · 0.30ct", price: "R12 750" },
      { name: "Polished Hoops 20mm", detail: "9ct gold", price: "R2 980" },
      { name: "Pearl Stud Pair", detail: "Freshwater · 9ct posts", price: "R950" },
    ],
  },
];

function Products() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Products"
          title="Five lines, kept deliberately small"
          description="Necklaces, chains, watches, rings and earrings. Every price below is the in-store price, certificate included."
        />

        <div className="sticky top-[89px] z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4">
            {lines.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="shrink-0 text-xs tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-gold"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>

        {lines.map((line, i) => (
          <section
            key={line.id}
            id={line.id}
            className={`scroll-mt-40 border-b border-border/60 py-20 ${
              i % 2 === 1 ? "bg-surface/30" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div
                className={`grid gap-12 md:grid-cols-2 md:items-center ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden border border-border/60">
                  <img
                    src={line.image}
                    alt={`${line.name} at LITTY Jewellery`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-[26rem] w-full object-cover"
                  />
                </figure>

                <div>
                  <p className="eyebrow">Line 0{i + 1}</p>
                  <h2 className="mt-4 text-3xl text-ivory md:text-5xl">{line.name}</h2>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{line.blurb}</p>

                  <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
                    {line.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between gap-6 py-4">
                        <div>
                          <p className="text-base text-ivory">{item.name}</p>
                          <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                        <span className="shrink-0 font-display text-lg text-gold">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/enquiry"
                    search={{ item: line.name }}
                    className="mt-8 inline-block border border-gold/50 px-7 py-3.5 text-xs tracking-[0.24em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    Enquire about {line.name.toLowerCase()}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
