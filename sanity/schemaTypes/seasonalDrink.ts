import { defineField, defineType } from "sanity";

export const seasonalDrinkType = defineType({
  name: "seasonalDrink",
  title: "Seasonal Drink",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "additionalImage", title: "Additional Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "availabilityStart", title: "Availability Start", type: "date" }),
    defineField({ name: "availabilityEnd", title: "Availability End", type: "date" }),
    defineField({ name: "featuredOnHomepage", title: "Featured on Homepage", type: "boolean", initialValue: true }),
    defineField({ name: "ingredients", title: "Ingredients", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "customizationNote", title: "Customization Note", type: "string" }),
    defineField({ name: "buttonLabel", title: "Button Label", type: "string" }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number" }),
  ],
});
