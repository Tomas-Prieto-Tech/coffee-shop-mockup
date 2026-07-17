import {
  demoAnnouncement,
  demoCategories,
  demoEvents,
  demoGalleryImages,
  demoMenuItems,
  demoPages,
  demoSeasonalDrink,
  demoSettings,
  demoTestimonial,
} from "@/lib/demo-content";
import { isSanityEnabled } from "@/sanity/lib/config";
import { client } from "@/sanity/lib/client";
import {
  activeAnnouncementQuery,
  eventBySlugQuery,
  eventsQuery,
  galleryImagesQuery,
  menuCategoriesQuery,
  menuItemsQuery,
  pageContentQuery,
  seasonalDrinkQuery,
  siteSettingsQuery,
  testimonialQuery,
} from "@/sanity/lib/queries";
import type {
  AboutVisitPayload,
  Announcement,
  EventDetailPayload,
  Event,
  EventsPagePayload,
  GalleryPagePayload,
  GalleryImage,
  HomePagePayload,
  MenuCategory,
  MenuItem,
  MenuPagePayload,
  PageContent,
  SeasonalDrink,
  SiteSettings,
  Testimonial,
} from "@/types/sanity";

async function safeFetch<T>(query: string, params?: Record<string, string>) {
  if (!isSanityEnabled) {
    return null;
  }

  try {
    return params
      ? await client.fetch<T>(query, params)
      : await client.fetch<T>(query);
  } catch {
    return null;
  }
}

export async function getHomePagePayload(): Promise<HomePagePayload> {
  const [settings, announcement, seasonalDrink, testimonial, homePage, menuItems] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<Announcement>(activeAnnouncementQuery),
    safeFetch<SeasonalDrink>(seasonalDrinkQuery),
    safeFetch<Testimonial>(testimonialQuery),
    safeFetch<PageContent>(pageContentQuery, { slug: "home" }),
    safeFetch<MenuItem[]>(menuItemsQuery),
  ]);

  const resolvedMenuItems = menuItems?.length ? menuItems : demoMenuItems;

  return {
    announcement: announcement || demoAnnouncement,
    settings: settings || demoSettings,
    seasonalDrink: seasonalDrink || demoSeasonalDrink,
    featuredMenuItems: resolvedMenuItems.slice(0, 4),
    upcomingEvents: demoEvents.filter((event) => event.status === "upcoming").slice(0, 3),
    galleryImages: demoGalleryImages.slice(0, 6),
    testimonial: testimonial || demoTestimonial,
    homePage: homePage || demoPages.home,
  };
}

export async function getGlobalSiteData(): Promise<{
  settings: SiteSettings;
  announcement: Announcement | null;
}> {
  const [settings, announcement] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<Announcement>(activeAnnouncementQuery),
  ]);

  return {
    settings: settings || demoSettings,
    announcement: announcement || demoAnnouncement,
  };
}

export async function getMenuPagePayload(): Promise<MenuPagePayload> {
  const [settings, categories, items, seasonalDrink] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<MenuCategory[]>(menuCategoriesQuery),
    safeFetch<MenuItem[]>(menuItemsQuery),
    safeFetch<SeasonalDrink>(seasonalDrinkQuery),
  ]);

  return {
    settings: settings || demoSettings,
    categories: categories || demoCategories,
    items: items || demoMenuItems,
    seasonalDrink: seasonalDrink || demoSeasonalDrink,
  };
}

export async function getEventsPagePayload(): Promise<EventsPagePayload> {
  const [settings, events] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<Event[]>(eventsQuery),
  ]);

  const allEvents = events || demoEvents;

  return {
    settings: settings || demoSettings,
    upcomingEvents: allEvents.filter((event) => event.status === "upcoming"),
    pastEvents: allEvents.filter((event) => event.status === "completed"),
  };
}

export async function getEventDetailPayload(slug: string): Promise<EventDetailPayload> {
  const [settings, event] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<Event>(eventBySlugQuery, { slug }),
  ]);

  const resolvedEvent = event || demoEvents.find((item) => item.slug === slug) || null;

  return {
    settings: settings || demoSettings,
    event: resolvedEvent,
    relatedEvents: demoEvents
      .filter((item) => item.slug !== slug && item.status === "upcoming")
      .slice(0, 3),
  };
}

export async function getGalleryPagePayload(): Promise<GalleryPagePayload> {
  const [settings, images] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<GalleryImage[]>(galleryImagesQuery),
  ]);

  return {
    settings: settings || demoSettings,
    images: images || demoGalleryImages,
  };
}

export async function getPagePayload(
  slug: "about" | "visit" | "catering",
): Promise<AboutVisitPayload> {
  const [settings, page] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<PageContent>(pageContentQuery, { slug }),
  ]);

  return {
    settings: settings || demoSettings,
    page: page || demoPages[slug],
  };
}
