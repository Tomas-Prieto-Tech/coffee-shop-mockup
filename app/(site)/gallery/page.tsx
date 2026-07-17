import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/gallery-page";
import { getGalleryPagePayload } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the drinks, food, space, and community moments that shape Mesa & Main Coffee Co.",
};

export default async function Page() {
  const data = await getGalleryPagePayload();

  return <GalleryPage data={data} />;
}
