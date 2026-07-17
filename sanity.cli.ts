import { defineCliConfig } from "sanity/cli";
import {
  studioSanityDataset as dataset,
  studioSanityProjectId as projectId,
} from "@/sanity/lib/env";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
