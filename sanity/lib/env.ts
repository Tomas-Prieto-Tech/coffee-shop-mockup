export const publicSanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const publicSanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const studioSanityDataset =
  process.env.SANITY_STUDIO_DATASET || publicSanityDataset;

export const studioSanityProjectId =
  process.env.SANITY_STUDIO_PROJECT_ID || publicSanityProjectId;
