import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

const dataset = process.env.SANITY_STUDIO_DATASET;
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;

export default defineConfig({
  name: "default",
  title: "Mesa & Main Coffee Co. Studio",
  projectId: projectId || "",
  dataset: dataset || "production",
  basePath: "/",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
