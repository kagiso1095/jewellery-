import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Store Location | LITTY Jewellery Johannesburg" },
      {
        name: "description",
        content:
          "Find LITTY Jewellery in Rosebank, Johannesburg: address, map, trading hours, phone, email and a direct contact form.",
      },
      { property: "og:title", content: "Contact & Store Location | LITTY Jewellery" },
      {
        property: "og:description",
        content: "Address, map, trading hours and contact form for LITTY Jewellery in Rosebank.",
      },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Please add a little more detail").max(1000),
});

const details = [
  {
    icon: MapPin,
    label: "Store address",
    lines: ["Shop 14, Rosebank Arcade", "12 Cradock Avenue, Rosebank", "Johannesburg, 2196"],
  },
  {
    icon: Phone,
    label: "Telephone",
    lines: ["Store: +27 11 447 0182", "WhatsApp: +27 82 991 4408"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@littyjewellery.co.za", "repairs@littyjewellery.co.za"],
  },
  {
    icon: Clock,
    label: "Trading hours",
    lines: ["Mon – Fri: 09:00 – 18:00", "Saturday: 09:00 – 15:00", "Sunday & public holidays: closed"],
  },
  {
    icon: Instagram,
    label: "Social",
    lines: ["@littyjewellery"],
  },
];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    toast.success("Message sent — we'll be in touch shortly.");
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Come see it in the light"
          description="We are in Rosebank, five minutes from the Gautrain station. Call ahead, or send a message and we'll come back to you."
        />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Contact information</p>
              <h2 className="mt-4 text-3xl text-ivory md:text-4xl">Reach the store directly</h2>
              <div className="gold-rule mt-5" />

              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                {details.map((d) => (
                  <div key={d.label} className="lux-panel p-6">
                    <d.icon className="h-5 w-5 text-gold" />
                    <dt className="eyebrow mt-4">{d.label}</dt>
                    <dd className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
                      {d.lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lux-panel p-8 md:p-10">
              <p className="eyebrow">Contact form</p>
              <h2 className="mt-4 text-2xl text-ivory">Send us a message</h2>
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                <div>
                  <Label className="eyebrow">Full name</Label>
                  <Input className="mt-3" name="name" maxLength={100} placeholder="Your name" />
                  {errors["name"] && (
                    <p className="mt-2 text-xs text-destructive">{errors["name"]}</p>
                  )}
                </div>
                <div>
                  <Label className="eyebrow">Email address</Label>
                  <Input
                    className="mt-3"
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder="you@email.com"
                  />
                  {errors["email"] && (
                    <p className="mt-2 text-xs text-destructive">{errors["email"]}</p>
                  )}
                </div>
                <div>
                  <Label className="eyebrow">Subject</Label>
                  <Input
                    className="mt-3"
                    name="subject"
                    maxLength={120}
                    placeholder="What is this about?"
                  />
                  {errors["subject"] && (
                    <p className="mt-2 text-xs text-destructive">{errors["subject"]}</p>
                  )}
                </div>
                <div>
                  <Label className="eyebrow">Message</Label>
                  <Textarea
                    className="mt-3"
                    name="message"
                    rows={6}
                    maxLength={1000}
                    placeholder="How can we help?"
                  />
                  {errors["message"] && (
                    <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold px-8 py-4 text-xs tracking-[0.24em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="eyebrow">Our location</p>
            <h2 className="mt-4 text-3xl text-ivory md:text-4xl">
              Shop 14, Rosebank Arcade — Johannesburg
            </h2>
            <div className="mt-8 overflow-hidden border border-border/60">
              <iframe
                title="Map showing LITTY Jewellery in Rosebank, Johannesburg"
                src="https://www.google.com/maps?q=12+Cradock+Avenue,+Rosebank,+Johannesburg&output=embed"
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[35%]"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=12+Cradock+Avenue,+Rosebank,+Johannesburg"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block border border-gold/50 px-7 py-3.5 text-xs tracking-[0.24em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Get directions
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
