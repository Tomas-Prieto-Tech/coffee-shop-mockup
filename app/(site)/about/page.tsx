import type { Metadata } from "next";
import { CallToAction } from "@/components/shared/call-to-action";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPagePayload } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "About",
  description: "Learn the fictional story, values, and Bakersfield roots behind Mesa & Main Coffee Co.",
};

export default async function Page() {
  const data = await getPagePayload("about");

  return (
    <div className="space-y-12">
      <SectionHeading eyebrow={data.page.eyebrow} title={data.page.title} description={data.page.intro} />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-espresso p-8 text-oat-milk">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">Values</p>
          <ul className="mt-5 space-y-3 text-sm text-oat-milk/80">
            <li>Hospitality that feels relaxed, not scripted.</li>
            <li>Thoughtfully sourced coffee with approachable flavor profiles.</li>
            <li>Space for local creators, neighbors, and recurring community rituals.</li>
          </ul>
        </div>
        <div className="space-y-4 text-base leading-8 text-charcoal/80">
          {data.page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <CallToAction
        eyebrow="See the space"
        title="Independent, modern, and grounded in place."
        description="This page demonstrates how an owner can update longer-form brand copy without changing the design system underneath it."
        primaryHref="/gallery"
        primaryLabel="Browse the Gallery"
        secondaryHref="/visit"
        secondaryLabel="Plan Your Visit"
      />
    </div>
  );
}
