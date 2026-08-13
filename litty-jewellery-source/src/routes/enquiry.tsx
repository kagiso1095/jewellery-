import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const searchSchema = z.object({
  item: z.string().max(60).optional(),
});

export const Route = createFileRoute("/enquiry")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Enquiry — Ask About a Piece | LITTY Jewellery" },
      {
        name: "description",
        content:
          "Any visitor can send an enquiry to LITTY Jewellery: ask about availability, pricing, sizing, repairs or a bespoke commission. No account needed.",
      },
      { property: "og:title", content: "Enquiry — Ask About a Piece | LITTY Jewellery" },
      {
        property: "og:description",
        content: "Open enquiry form for availability, sizing, repairs and bespoke commissions.",
      },
    ],
  }),
  component: Enquiry,
});

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(1000),
});

const interests = ["Necklaces", "Chains", "Watches", "Rings", "Earrings", "Repair / resize", "Bespoke"];

function Enquiry() {
  const { item } = Route.useSearch();
  const [interest, setInterest] = useState(item ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      interest,
      budget: form.get("budget"),
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
    setSent(true);
    toast.success("Enquiry received — we reply within one business day.");
    e.currentTarget.reset();
    setInterest("");
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Enquiry"
          title="Ask us anything — no appointment needed"
          description="This form is open to any visitor. Availability, pricing, ring sizing, a repair quote or a bespoke idea: send it through and a real person replies."
        />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="lux-panel p-8 md:p-12">
              {sent && (
                <div className="mb-8 border border-gold/50 bg-gold/10 p-5 text-sm text-ivory">
                  Thank you — your enquiry is with us. Expect a reply within one business day.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" error={errors["name"]}>
                    <Input id="name" name="name" maxLength={100} placeholder="Your name" />
                  </Field>
                  <Field label="Email address" error={errors["email"]}>
                    <Input id="email" name="email" type="email" maxLength={255} placeholder="you@email.com" />
                  </Field>
                  <Field label="Phone (optional)" error={errors["phone"]}>
                    <Input id="phone" name="phone" maxLength={30} placeholder="+27 ..." />
                  </Field>
                  <Field label="Budget range (optional)" error={errors["budget"]}>
                    <Input id="budget" name="budget" maxLength={40} placeholder="e.g. R5 000 – R15 000" />
                  </Field>
                </div>

                <div>
                  <Label className="eyebrow">What are you interested in?</Label>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {interests.map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setInterest(interest === i ? "" : i)}
                        className={`border px-4 py-2 text-xs tracking-[0.18em] uppercase transition-colors ${
                          interest === i
                            ? "border-gold bg-gold text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
                        }`}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Your enquiry" error={errors["message"]}>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={1000}
                    placeholder="Tell us what you are looking for — style, size, occasion, timing."
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full bg-gold px-8 py-4 text-xs tracking-[0.24em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send enquiry
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  We use your details only to answer this enquiry. Nothing is shared or added to a
                  mailing list without your say-so.
                </p>
              </form>
            </div>

            <aside className="space-y-8">
              <div className="lux-panel p-8">
                <p className="eyebrow">What to expect</p>
                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>A written reply within one business day, Monday to Saturday.</li>
                  <li>Photos and weights of anything currently in the case.</li>
                  <li>A free quote for repairs, resizing, engraving or re-polishing.</li>
                  <li>Optional 45-minute private viewing, held for 72 hours.</li>
                </ul>
              </div>
              <div className="lux-panel p-8">
                <p className="eyebrow">Prefer to talk?</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Call the store on{" "}
                  <a href="tel:+27114470182" className="text-gold hover:underline">
                    +27 11 447 0182
                  </a>{" "}
                  or WhatsApp{" "}
                  <a href="tel:+27829914408" className="text-gold hover:underline">
                    +27 82 991 4408
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="eyebrow">{label}</Label>
      <div className="mt-3">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
