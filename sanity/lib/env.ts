export const publicSanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const publicSanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

const defaultSiteRevalidateSeconds = 60;

function parseSiteRevalidateSeconds(value: string | undefined) {
  if (!value) {
    return defaultSiteRevalidateSeconds;
  }

  const parsedValue = Number.parseInt(value, 10);

  if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
    return defaultSiteRevalidateSeconds;
  }

  return parsedValue;
}

export const studioSanityDataset =
  process.env.SANITY_STUDIO_DATASET || publicSanityDataset;

export const studioSanityProjectId =
  process.env.SANITY_STUDIO_PROJECT_ID || publicSanityProjectId;

export const siteRevalidateSeconds = parseSiteRevalidateSeconds(
  process.env.SANITY_SITE_REVALIDATE_SECONDS,
);
