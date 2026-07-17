import { Button } from "@/components/shared/button";

type CallToActionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CallToAction({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CallToActionProps) {
  return (
    <section className="rounded-[2.25rem] bg-gradient-to-br from-espresso via-roast to-[#8b654f] p-8 text-oat-milk shadow-[0_28px_70px_rgba(45,33,24,0.28)] sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl font-serif text-3xl sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-oat-milk/80">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={primaryHref} className="bg-oat-milk text-espresso hover:bg-white">
          {primaryLabel}
        </Button>
        {secondaryHref && secondaryLabel ? (
          <Button href={secondaryHref} variant="secondary" className="border-white/20 bg-white/8 text-oat-milk hover:border-sand hover:text-white">
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
