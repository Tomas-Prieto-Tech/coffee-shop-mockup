import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId, studioUrl } from "@/sanity/lib/config";
import { schemaTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Mesa & Main Coffee Co. Studio",
  projectId,
  dataset,
  basePath: studioUrl,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
