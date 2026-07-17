import type { Metadata } from "next";
import { BusinessHours } from "@/components/shared/business-hours";
import { Button } from "@/components/shared/button";
import { LocationCard } from "@/components/shared/location-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPagePayload } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Visit",
  description: "Find the address, hours, parking, accessibility details, and FAQs for Mesa & Main Coffee Co. in Bakersfield.",
};

export default async function Page() {
  const data = await getPagePayload("visit");

  return (
    <div className="space-y-12">
      <SectionHeading eyebrow={data.page.eyebrow} title={data.page.title} description={data.page.intro} />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <LocationCard settings={data.settings} />
        <BusinessHours hours={data.settings.hours} />
      </div>
      <section className="rounded-[2rem] border border-espresso/10 bg-white/75 p-7 shadow-[0_20px_50px_rgba(45,33,24,0.08)]">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-7 text-charcoal/78">
            <p><strong className="text-espresso">Holiday hours:</strong> {data.settings.holidayHours}</p>
            <p><strong className="text-espresso">Accessibility:</strong> {data.settings.accessibility}</p>
            <p><strong className="text-espresso">Seating:</strong> {data.settings.seating}</p>
            <div className="pt-2">
              <Button href={data.settings.mapsUrl}>Get Directions</Button>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-espresso">FAQ</h2>
            <div className="mt-5 space-y-5">
              {data.settings.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-espresso">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-charcoal/78">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
