import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "alt", title: "Alternative Text", type: "string" }),
    defineField({ name: "caption", title: "Caption", type: "text" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Drinks", "Food", "Our Space", "Community", "Events"],
      },
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number" }),
    defineField({ name: "associatedEvent", title: "Associated Event", type: "reference", to: [{ type: "event" }] }),
  ],
});
