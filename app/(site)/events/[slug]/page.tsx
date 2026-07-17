import type { Metadata } from "next";
import { EventDetailPage } from "@/components/events/event-detail-page";
import { getEventDetailPayload } from "@/sanity/lib/fetch";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getEventDetailPayload(slug);

  if (!data.event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: data.event.title,
    description: data.event.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getEventDetailPayload(slug);

  return <EventDetailPage data={data} />;
}
