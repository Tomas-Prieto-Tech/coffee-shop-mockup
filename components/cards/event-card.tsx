import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatEventDate, formatEventTimeRange } from "@/lib/utils";
import type { Event } from "@/types/sanity";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="overflow-hidden rounded-[1.9rem] border border-espresso/10 bg-white/75 shadow-[0_20px_50px_rgba(45,33,24,0.08)]">
      <div className="relative h-56">
        <Image src={event.image} alt={event.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">{formatEventDate(event.startsAt)}</p>
        <h3 className="mt-3 font-serif text-2xl text-espresso">{event.title}</h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/78">{event.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-4 text-sm text-charcoal/70">
          <span>{formatEventTimeRange(event.startsAt, event.endsAt)}</span>
          <Link href={`/events/${event.slug}`} className="inline-flex items-center gap-2 font-medium text-espresso hover:text-terracotta">
            View Event <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
