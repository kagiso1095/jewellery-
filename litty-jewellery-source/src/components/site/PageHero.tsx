export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border/60 bg-surface/30">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-5 text-4xl leading-tight text-ivory md:text-6xl">{title}</h1>
        <p className="fade-up mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
