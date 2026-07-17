import type { Metadata } from "next";
import { CateringForm } from "@/components/catering/catering-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPagePayload } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Catering",
  description: "Coffee travelers, pastry trays, office catering, and private coffee events from Mesa & Main Coffee Co.",
};

export default async function Page() {
  const data = await getPagePayload("catering");

  return (
    <div className="space-y-12">
      <SectionHeading eyebrow={data.page.eyebrow} title={data.page.title} description={data.page.intro} />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-white/72 p-7 shadow-[0_20px_50px_rgba(45,33,24,0.08)]">
          <h2 className="font-serif text-3xl text-espresso">Services</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-charcoal/78">
            <li>Coffee travelers and full condiment kits</li>
            <li>Pastry trays for office breakfasts and workshops</li>
            <li>Private evening tastings and guided coffee flights</li>
            <li>Small event buyouts for launches, study nights, and community gatherings</li>
          </ul>
        </div>
        <CateringForm />
      </div>
    </div>
  );
}
