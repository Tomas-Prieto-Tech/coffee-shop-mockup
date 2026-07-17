import { announcementType } from "@/sanity/schemaTypes/announcement";
import { eventType } from "@/sanity/schemaTypes/event";
import { galleryImageType } from "@/sanity/schemaTypes/galleryImage";
import { menuCategoryType } from "@/sanity/schemaTypes/menuCategory";
import { menuItemType } from "@/sanity/schemaTypes/menuItem";
import { pageContentType } from "@/sanity/schemaTypes/pageContent";
import { seasonalDrinkType } from "@/sanity/schemaTypes/seasonalDrink";
import { siteSettingsType } from "@/sanity/schemaTypes/siteSettings";
import { testimonialType } from "@/sanity/schemaTypes/testimonial";

export const schemaTypes = [
  siteSettingsType,
  announcementType,
  menuCategoryType,
  menuItemType,
  seasonalDrinkType,
  eventType,
  galleryImageType,
  testimonialType,
  pageContentType,
];
