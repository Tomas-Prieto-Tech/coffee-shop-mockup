import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/menu", "/events", "/gallery", "/about", "/visit", "/catering"];

  return pages.map((path) => ({
    url: `https://mesa-and-main-demo.vercel.app${path}`,
    lastModified: new Date("2026-07-14"),
  }));
}
