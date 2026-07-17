import { defineField, defineType } from "sanity";

export const pageContentType = defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Page Key",
      type: "string",
      options: {
        list: ["home", "about", "visit", "catering"],
      },
    }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
  ],
});
