import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "@/sanity/lib/config";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: Image) {
  return builder.image(source);
}
