import { defineField, defineType } from "sanity";

export const announcementType = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "internalTitle", title: "Internal Title", type: "string" }),
    defineField({ name: "text", title: "Announcement Text", type: "text" }),
    defineField({ name: "linkLabel", title: "Link Label", type: "string" }),
    defineField({ name: "linkUrl", title: "Link URL", type: "string" }),
    defineField({ name: "enabled", title: "Enabled", type: "boolean", initialValue: true }),
    defineField({ name: "startDateTime", title: "Start", type: "datetime" }),
    defineField({ name: "endDateTime", title: "End", type: "datetime" }),
    defineField({ name: "dismissible", title: "Dismissible", type: "boolean", initialValue: true }),
    defineField({ name: "displayPriority", title: "Display Priority", type: "number", initialValue: 1 }),
    defineField({
      name: "style",
      title: "Style",
      type: "string",
      options: {
        list: ["standard", "seasonal", "urgent", "event"],
      },
      initialValue: "standard",
    }),
  ],
});
