import { EventCard } from "@/components/cards/event-card";
import { SectionHeading } from "@/components/shared/section-heading";
import type { EventsPagePayload } from "@/types/sanity";

export function EventsPage({ data }: { data: EventsPagePayload }) {
  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="Events"
        title="Built for recurring community moments."
        description="Upcoming events and archive pages make the fictional business feel active while also demonstrating the SEO value of individual event routes."
      />
      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-espresso">Upcoming</h2>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {data.upcomingEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-espresso">Archive</h2>
        <div className="grid gap-4">
          {data.pastEvents.map((event) => (
            <article
              key={event._id}
              className="rounded-[1.8rem] border border-espresso/10 bg-white/70 p-5 shadow-[0_14px_38px_rgba(45,33,24,0.06)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage">{new Date(event.startsAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                  <h3 className="mt-2 font-serif text-2xl text-espresso">{event.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/75">{event.summary}</p>
                </div>
                <a href={`/events/${event.slug}`} className="text-sm font-medium text-espresso hover:text-terracotta">
                  View recap
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
