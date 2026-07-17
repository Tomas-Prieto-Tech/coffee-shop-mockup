import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types/sanity";

export function MenuItemCard({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  const description = item.description || item.shortDescription || "";
  const dietaryLabels = item.dietaryLabels || [];

  return (
    <article className={cn("overflow-hidden rounded-[1.8rem] border border-espresso/10 bg-white/75 shadow-[0_18px_50px_rgba(45,33,24,0.08)]", compact && "lg:grid lg:grid-cols-[160px_1fr]")}>
      <div className={cn("relative h-56", compact && "h-full min-h-44")}>
        <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-espresso">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal/78">{description}</p>
          </div>
          <p className="rounded-full bg-oat-milk px-3 py-1 text-sm font-semibold text-terracotta">{item.price}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.seasonal ? <span className="rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta">Seasonal</span> : null}
          {dietaryLabels.map((label) => (
            <span key={label} className="rounded-full bg-sage/12 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage">
              {label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
