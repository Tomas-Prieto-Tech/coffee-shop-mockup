import { defineCliConfig } from "sanity/cli";

const dataset = process.env.SANITY_STUDIO_DATASET;
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const appId = process.env.SANITY_STUDIO_APP_ID;

export default defineCliConfig({
  api: {
    projectId: projectId || "",
    dataset: dataset || "production",
  },
  ...(appId
    ? {
        deployment: {
          appId,
          autoUpdates: true,
        },
      }
    : {}),
});
