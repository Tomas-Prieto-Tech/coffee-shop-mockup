import { MenuItemCard } from "@/components/cards/menu-item-card";
import { SectionHeading } from "@/components/shared/section-heading";
import type { MenuPagePayload } from "@/types/sanity";

export function MenuPage({ data }: { data: MenuPagePayload }) {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Coffee Menu"
        title="Built to be browsed quickly on mobile."
        description="Category jump links, strong spacing, and clear dietary tags make the menu feel useful on a phone, not just attractive on desktop."
      />
      <nav className="sticky top-24 z-30 overflow-x-auto rounded-full border border-espresso/10 bg-white/80 px-4 py-3 backdrop-blur">
        <div className="flex min-w-max gap-3 text-sm text-charcoal/75">
          {data.categories.map((category) => (
            <a key={category.slug} href={`#${category.slug}`} className="rounded-full bg-oat-milk px-4 py-2 hover:bg-terracotta hover:text-white">
              {category.name}
            </a>
          ))}
        </div>
      </nav>
      <section id="seasonal-drinks" className="rounded-[2rem] border border-terracotta/20 bg-terracotta/8 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">Seasonal Feature</p>
        <h2 className="mt-3 font-serif text-3xl text-espresso">{data.seasonalDrink.name}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/80">{data.seasonalDrink.description}</p>
      </section>
      {data.categories.map((category) => (
        <section key={category._id} id={category.slug} className="space-y-6 scroll-mt-36">
          <SectionHeading title={category.name} description={category.description} />
          <div className="grid gap-6 lg:grid-cols-2">
            {data.items
              .filter((item) => item.categorySlug === category.slug)
              .map((item) => (
                <MenuItemCard key={item._id} item={item} compact />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
