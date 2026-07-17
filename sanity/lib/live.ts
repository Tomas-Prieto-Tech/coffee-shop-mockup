import { createElement } from "react";
import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";
import {
  apiVersion,
  dataset,
  isSanityEnabled,
  projectId,
  studioUrl,
} from "@/sanity/lib/config";

const liveClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
  stega: { studioUrl },
});

export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
});

export function SanityLiveBridge() {
  return isSanityEnabled ? createElement(SanityLive) : null;
}
