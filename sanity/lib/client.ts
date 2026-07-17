import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/config";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
  stega: {
    studioUrl,
  },
});
