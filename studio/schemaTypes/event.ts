import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Event Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "description", title: "Full Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "startDateTime", title: "Start Date & Time", type: "datetime" }),
    defineField({ name: "endDateTime", title: "End Date & Time", type: "datetime" }),
    defineField({ name: "locationName", title: "Location Name", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "registrationUrl", title: "Registration URL", type: "url" }),
    defineField({ name: "registrationLabel", title: "Registration Label", type: "string" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({
      name: "eventStatus",
      title: "Event Status",
      type: "string",
      options: {
        list: ["Upcoming", "Sold out", "Canceled", "Completed"],
      },
    }),
    defineField({ name: "capacity", title: "Capacity", type: "number" }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number" }),
  ],
});
