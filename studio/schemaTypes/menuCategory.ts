import { defineField, defineType } from "sanity";

export const menuCategoryType = defineType({
  name: "menuCategory",
  title: "Menu Category",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number" }),
    defineField({ name: "enabled", title: "Enabled", type: "boolean", initialValue: true }),
  ],
});
