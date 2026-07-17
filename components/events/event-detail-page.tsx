import Image from "next/image";
import { notFound } from "next/navigation";
import { EventCard } from "@/components/cards/event-card";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { formatEventDate, formatEventTimeRange } from "@/lib/utils";
import type { EventDetailPayload } from "@/types/sanity";

export function EventDetailPage({ data }: { data: EventDetailPayload }) {
  if (!data.event) {
    notFound();
  }

  const event = data.event;

  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
            {formatEventDate(event.startsAt)}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-espresso">{event.title}</h1>
          <p className="mt-5 text-lg leading-8 text-charcoal/78">{event.summary}</p>
          <div className="mt-7 grid gap-3 text-sm text-charcoal/75 sm:grid-cols-2">
            <p><strong className="text-espresso">Time:</strong> {formatEventTimeRange(event.startsAt, event.endsAt)}</p>
            <p><strong className="text-espresso">Price:</strong> {event.price}</p>
            <p><strong className="text-espresso">Location:</strong> {event.locationName}</p>
            <p><strong className="text-espresso">Address:</strong> {event.address}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={event.registrationUrl}>{event.registrationLabel}</Button>
            <Button
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.summary)}`}
              variant="secondary"
            >
              Add to Calendar
            </Button>
          </div>
        </div>
        <div className="relative min-h-[24rem] overflow-hidden rounded-[2.4rem]">
          <Image src={event.image} alt={event.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading title="Event Details" description="Each event route is structured so a real client could promote workshops, pop-ups, or weekly events without developer help." />
        <div className="space-y-4 text-base leading-8 text-charcoal/80">
          {event.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-espresso">Related Events</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {data.relatedEvents.map((relatedEvent) => (
            <EventCard key={relatedEvent._id} event={relatedEvent} />
          ))}
        </div>
      </section>
    </div>
  );
}
