import { publicSanityDataset, publicSanityProjectId } from "@/sanity/lib/env";

export const apiVersion = "2026-07-14";
export const dataset = publicSanityDataset;
export const projectId = publicSanityProjectId;

export const isSanityEnabled = Boolean(projectId && dataset);
