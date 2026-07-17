import Image from "next/image";
import { EventCard } from "@/components/cards/event-card";
import { MenuItemCard } from "@/components/cards/menu-item-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Button } from "@/components/shared/button";
import { BusinessHours } from "@/components/shared/business-hours";
import { LocationCard } from "@/components/shared/location-card";
import { SectionHeading } from "@/components/shared/section-heading";
import type { HomePagePayload } from "@/types/sanity";

export function HomePage({ data }: { data: HomePagePayload }) {
  return (
    <div className="space-y-20 pb-10 sm:space-y-24">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
            {data.homePage.eyebrow}
          </p>
          <h1 className="mt-5 text-balance font-serif text-5xl leading-none text-espresso sm:text-6xl">
            {data.homePage.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/80">{data.homePage.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/menu">Explore the Menu</Button>
            <Button href="/visit" variant="secondary">
              Plan Your Visit
            </Button>
          </div>
          <div className="mt-8 grid gap-4 rounded-[2rem] border border-espresso/10 bg-white/70 p-5 text-sm text-charcoal/75 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-espresso">Fresh pastries daily</p>
              <p className="mt-1">Savory breakfast, counter bakes, and grab-and-go options.</p>
            </div>
            <div>
              <p className="font-semibold text-espresso">Community events</p>
              <p className="mt-1">Run club mornings, tasting nights, and local makers.</p>
            </div>
            <div>
              <p className="font-semibold text-espresso">Laptop friendly</p>
              <p className="mt-1">Reliable Wi-Fi, outlets, and seating that invites longer stays.</p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="relative h-[24rem] overflow-hidden rounded-[2.4rem] sm:h-[32rem]">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
              alt="Barista pouring espresso"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="space-y-5 sm:pt-16">
            <div className="relative h-48 overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
                alt="Friends talking at a cafe table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
            <div className="rounded-[2rem] bg-espresso p-6 text-oat-milk">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">Bakersfield mornings</p>
              <p className="mt-4 font-serif text-3xl">Coffee, conversation, and a slower start.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[2.4rem] border border-espresso/10 bg-white/72 p-7 shadow-[0_24px_60px_rgba(45,33,24,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem]">
          <Image
            src={data.seasonalDrink.heroImage}
            alt={data.seasonalDrink.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">Summer at Mesa & Main</p>
          <h2 className="mt-3 font-serif text-4xl text-espresso">{data.seasonalDrink.name}</h2>
          <p className="mt-4 text-base leading-7 text-charcoal/78">{data.seasonalDrink.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
              Limited time
            </span>
            <span className="rounded-full bg-sage/12 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage">
              {data.seasonalDrink.price}
            </span>
          </div>
          <p className="mt-5 text-sm text-charcoal/70">{data.seasonalDrink.customizationNote}</p>
          <div className="mt-7">
            <Button href="/menu#seasonal-drinks">{data.seasonalDrink.buttonLabel}</Button>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Welcome"
          title="More than a coffee stop."
          description="From weekend pop-ups to weeknight study sessions, the space is designed to bring Bakersfield together without feeling over-produced."
        />
        <div className="space-y-4 text-base leading-8 text-charcoal/80">
          {data.homePage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            The layout, copy structure, and content management model are built so a real client can update announcements, menu items, events, and seasonal features without touching code.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Popular Menu Items"
          title="House favorites that give the menu page range."
          description="These featured cards show how the CMS can spotlight signature drinks and food without rebuilding the layout."
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {data.featuredMenuItems.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="A coffee shop that feels active, local, and worth revisiting."
            description="The next three events are surfaced here, with detail pages ready for SEO and social sharing."
          />
          <Button href="/events" variant="secondary">
            View All Events
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {data.upcomingEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Gallery"
          title="The atmosphere deserves more than a feed."
          description="Portrait crops, detail shots, and wider scenes help the business feel more dimensional than Yelp or Instagram alone."
          align="center"
        />
        <GalleryGrid images={data.galleryImages} />
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <TestimonialCard testimonial={data.testimonial} />
        <div className="grid gap-6">
          <LocationCard settings={data.settings} />
          <BusinessHours hours={data.settings.hours} />
        </div>
      </section>
    </div>
  );
}
