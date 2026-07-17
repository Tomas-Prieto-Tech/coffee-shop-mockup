import { StudioClient } from "@/app/studio/[[...tool]]/studio-client";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <StudioClient />;
}
