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
  `*[_type == "seasonalDrink" && featuredOnHomepage == true] | order(displayOrder asc)[0]{
    _id,
    name,
    description,
    price,
    "heroImage": coalesce(heroImage.asset->url, ""),
    "imageAlt": name,
    "ingredients": coalesce(ingredients, []),
    customizationNote,
    "buttonLabel": coalesce(buttonLabel, "See seasonal drinks")
  }`,
);
export const eventsQuery = defineQuery(
  `*[_type == "event"] | order(startDateTime asc){
    _id,
    title,
    "slug": slug.current,
    summary,
    "description": coalesce(description[].children[].text, []),
    "image": coalesce(mainImage.asset->url, ""),
    "imageAlt": title,
    "startsAt": startDateTime,
    "endsAt": endDateTime,
    locationName,
    address,
    price,
    registrationLabel,
    registrationUrl,
    "status": lower(replace(coalesce(eventStatus, "Upcoming"), " ", "-")),
    featured,
    capacity
  }`,
);
export const eventBySlugQuery = defineQuery(
  `*[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    "description": coalesce(description[].children[].text, []),
    "image": coalesce(mainImage.asset->url, ""),
    "imageAlt": title,
    "startsAt": startDateTime,
    "endsAt": endDateTime,
    locationName,
    address,
    price,
    registrationLabel,
    registrationUrl,
    "status": lower(replace(coalesce(eventStatus, "Upcoming"), " ", "-")),
    featured,
    capacity
  }`,
);
export const galleryImagesQuery = defineQuery(
  `*[_type == "galleryImage"] | order(displayOrder asc){
    _id,
    "image": coalesce(image.asset->url, ""),
    "imageAlt": coalesce(alt, caption, "Gallery image"),
    caption,
    category,
    featured
  }`,
);
export const testimonialQuery = defineQuery(`*[_type == "testimonial" && featured == true][0]`);
export const pageContentQuery = defineQuery(`*[_type == "pageContent" && slug == $slug][0]`);
