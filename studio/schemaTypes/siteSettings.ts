import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "mapsUrl", title: "Google Maps URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "tiktokUrl", title: "TikTok URL", type: "url" }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "day", title: "Day", type: "string" }),
            defineField({ name: "open", title: "Open", type: "string" }),
            defineField({ name: "close", title: "Close", type: "string" }),
            defineField({ name: "closed", title: "Closed", type: "boolean" }),
          ],
        },
      ],
    }),
    defineField({ name: "footerMessage", title: "Footer Message", type: "text" }),
  ],
  preview: {
    select: {
      title: "businessName",
      subtitle: "tagline",
    },
  },
});
