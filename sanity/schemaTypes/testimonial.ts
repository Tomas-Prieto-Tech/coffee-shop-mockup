import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "customerName", title: "Customer Name", type: "string" }),
    defineField({ name: "customerPhoto", title: "Customer Photo", type: "image" }),
    defineField({ name: "source", title: "Source", type: "string" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
  ],
});
