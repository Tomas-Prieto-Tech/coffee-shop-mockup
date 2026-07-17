import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import type { GalleryPagePayload } from "@/types/sanity";

export function GalleryPage({ data }: { data: GalleryPagePayload }) {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Gallery"
        title="Visual storytelling that feels more premium than a template."
        description="The masonry-style grid shows how a local coffee shop can communicate mood, scale, and community more effectively than a simple photo strip."
      />
      <GalleryGrid images={data.images} />
    </div>
  );
}
