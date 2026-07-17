import {
  publicSanityDataset as dataset,
  publicSanityProjectId as projectId,
} from "@/sanity/lib/env";

export const apiVersion = "2026-07-14";
export const studioUrl = "/studio";

export const isSanityEnabled = Boolean(projectId && dataset);
