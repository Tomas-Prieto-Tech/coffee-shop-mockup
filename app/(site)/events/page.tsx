import type { Metadata } from "next";
import { EventsPage } from "@/components/events/events-page";
import { getEventsPagePayload } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Events",
  description: "See upcoming coffee tastings, makers pop-ups, workshops, and community events at Mesa & Main Coffee Co.",
};

export default async function Page() {
  const data = await getEventsPagePayload();

  return <EventsPage data={data} />;
}
