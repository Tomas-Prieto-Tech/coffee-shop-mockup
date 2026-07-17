"use client";

import { NextStudio } from "next-sanity/studio/client-component";
import config from "@/sanity/lib/studio-config";

export function StudioClient() {
  return <NextStudio config={config} />;
}
