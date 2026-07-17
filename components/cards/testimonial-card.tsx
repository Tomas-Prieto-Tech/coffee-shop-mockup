import type { Testimonial } from "@/types/sanity";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[2rem] border border-espresso/10 bg-white/70 p-8 shadow-[0_22px_55px_rgba(45,33,24,0.08)]">
      <p className="font-serif text-3xl leading-relaxed text-espresso">“{testimonial.quote}”</p>
      <div className="mt-6 text-sm text-charcoal/75">
        <p className="font-semibold text-charcoal">{testimonial.customerName}</p>
        <p>{testimonial.source}</p>
      </div>
    </article>
  );
}
