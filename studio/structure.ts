import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Mesa & Main Dashboard")
    .items([
      S.listItem()
        .title("Today's Updates")
        .child(
          S.list()
            .title("Today's Updates")
            .items([
              S.documentTypeListItem("announcement").title("Announcements"),
              S.documentTypeListItem("seasonalDrink").title("Seasonal Drinks"),
              S.documentTypeListItem("event").title("Upcoming Events"),
            ]),
        ),
      S.listItem()
        .title("Menu")
        .child(
          S.list()
            .title("Menu")
            .items([
              S.listItem()
                .title("Items")
                .child(
                  S.documentTypeList("menuItem")
                    .title("Items")
                    .defaultOrdering([{ field: "name", direction: "asc" }]),
                ),
              S.documentTypeListItem("menuCategory").title("Sections"),
            ]),
        ),
      S.listItem()
        .title("Events")
        .child(S.documentTypeList("event").title("Events")),
      S.listItem()
        .title("Photos")
        .child(S.documentTypeList("galleryImage").title("Gallery")),
      S.listItem()
        .title("Website Pages")
        .child(
          S.list()
            .title("Website Pages")
            .items([
              S.listItem()
                .title("Homepage")
                .child(S.document().schemaType("pageContent").documentId("page-home")),
              S.listItem()
                .title("About")
                .child(S.document().schemaType("pageContent").documentId("page-about")),
              S.listItem()
                .title("Visit")
                .child(S.document().schemaType("pageContent").documentId("page-visit")),
              S.listItem()
                .title("Catering")
                .child(S.document().schemaType("pageContent").documentId("page-catering")),
            ]),
        ),
      S.listItem()
        .title("Business Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
