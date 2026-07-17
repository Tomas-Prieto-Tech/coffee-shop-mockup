import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  studioSanityDataset,
  studioSanityProjectId,
} from "@/sanity/lib/env";
import { schemaTypes } from "@/sanity/schemaTypes";
import { studioUrl } from "@/sanity/lib/config";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Mesa & Main Coffee Co. Studio",
  projectId: studioSanityProjectId,
  dataset: studioSanityDataset,
  basePath: studioUrl,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
