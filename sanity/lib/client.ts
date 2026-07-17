import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/lib/config";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
});
