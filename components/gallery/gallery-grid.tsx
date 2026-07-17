import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types/sanity";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {images.map((item) => (
        <figure
          key={item._id}
          className={cn(
            "overflow-hidden rounded-[2rem] border border-espresso/10 bg-white/70 shadow-[0_16px_45px_rgba(45,33,24,0.07)]",
            item.tall && "xl:row-span-2",
          )}
        >
          <div className={cn("relative h-72", item.tall && "xl:h-full xl:min-h-[34rem]")}>
            <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 33vw" />
          </div>
          <figcaption className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage">{item.category}</p>
            <p className="mt-2 text-sm leading-6 text-charcoal/78">{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
