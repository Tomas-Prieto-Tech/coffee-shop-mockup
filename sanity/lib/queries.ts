import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`);
export const activeAnnouncementQuery = defineQuery(
  `*[_type == "announcement" && enabled == true] | order(displayPriority desc)[0]`,
);
export const menuCategoriesQuery = defineQuery(
  `*[_type == "menuCategory" && enabled == true] | order(displayOrder asc, name asc){
    _id,
    name,
    "slug": slug.current,
    description,
    "order": coalesce(displayOrder, 999)
  }`,
);
export const menuItemsQuery = defineQuery(
  `*[_type == "menuItem"] | order(name asc){
    _id,
    name,
    "slug": slug.current,
    "description": coalesce(description, shortDescription, ""),
    price,
    "categorySlug": category->slug.current,
    "image": coalesce(image.asset->url, ""),
    "imageAlt": name
  }`,
);
export const seasonalDrinkQuery = defineQuery(
  `*[_type == "seasonalDrink" && featuredOnHomepage == true] | order(displayOrder asc)[0]`,
);
export const eventsQuery = defineQuery(`*[_type == "event"] | order(startDateTime asc)`);
export const eventBySlugQuery = defineQuery(`*[_type == "event" && slug.current == $slug][0]`);
export const galleryImagesQuery = defineQuery(
  `*[_type == "galleryImage"] | order(displayOrder asc)`,
);
export const testimonialQuery = defineQuery(`*[_type == "testimonial" && featured == true][0]`);
export const pageContentQuery = defineQuery(`*[_type == "pageContent" && slug == $slug][0]`);
