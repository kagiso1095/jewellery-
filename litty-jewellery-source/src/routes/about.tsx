import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Heart } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LITTY Jewellery — Our Team, Mission & Vision" },
      {
        name: "description",
        content:
          "Meet the goldsmiths and gemmologists behind LITTY Jewellery, and read the mission and vision guiding our Johannesburg store.",
      },
      { property: "og:title", content: "About LITTY Jewellery — Our Team, Mission & Vision" },
      {
        property: "og:description",
        content: "The people, mission and vision behind LITTY Jewellery in Johannesburg.",
      },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Lethabo Mokoena",
    role: "Founder & Buyer",
    bio: "Opened the first LITTY case in 2014. Sources gold and stones personally, twice a year.",
    initials: "LM",
  },
  {
    name: "Imran Patel",
    role: "Master Goldsmith",
    bio: "Twenty-two years at the bench. Handles every setting, resize and restoration in-house.",
    initials: "IP",
  },
  {
    name: "Thandeka Dube",
    role: "Gemmologist",
    bio: "GIA-trained. Grades and certifies each diamond before it is ever offered to a client.",
    initials: "TD",
  },
  {
    name: "Karabo Nel",
    role: "Client Experience",
    bio: "Runs private viewings, enquiries and after-care so nothing falls through the cracks.",
    initials: "KN",
  },
];

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    body: "To make genuinely fine jewellery approachable — honest gold, certified stones, transparent pricing, and a person who explains every detail before you commit.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To become South Africa's most trusted independent jeweller: a store people return to for every milestone, and a bench that keeps craft skills alive for the next generation.",
  },
  {
    icon: Heart,
    title: "Our Values",
    body: "Ethically sourced material, work finished by hand, and service that treats a R2 000 chain with the same care as a R50 000 solitaire.",
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About us"
          title="Twelve years at the same counter"
          description="LITTY Jewellery is independent, family-run and stubbornly hands-on. Here is who we are and what we are working towards."
        />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden border border-border/60">
              <img
                src={atelier}
                alt="Goldsmith finishing a gold ring at the workbench"
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-5 text-3xl leading-snug text-ivory md:text-4xl">
                One display case, one bench, and a lot of stubbornness
              </h2>
              <div className="gold-rule mt-6" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Lethabo started LITTY with a rented case and forty pieces. The rule then is the rule
                now: nothing goes into the window that we would not wear ourselves. Everything is
                weighed, certified and finished on our own bench before it is priced.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Today the store carries five complete lines and a workshop that repairs, resizes and
                restores pieces our clients inherited long before they met us.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-surface/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="lux-panel p-9">
                  <v.icon className="h-7 w-7 text-gold" />
                  <h2 className="mt-6 text-2xl text-ivory">{v.title}</h2>
                  <div className="gold-rule mt-4" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">The team</p>
          <h2 className="mt-4 text-3xl text-ivory md:text-4xl">Four people, one counter</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.name} className="lux-panel hover-lift p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                  <span className="font-display text-2xl text-gold">{m.initials}</span>
                </div>
                <h3 className="mt-6 text-xl text-ivory">{m.name}</h3>
                <p className="mt-1 text-[0.7rem] tracking-[0.24em] uppercase text-gold">{m.role}</p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
