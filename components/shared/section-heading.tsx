type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-espresso sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-charcoal/78">{description}</p>
      ) : null}
    </div>
  );
}
