import { HomePage } from "@/components/home/home-page";
import { getHomePagePayload } from "@/sanity/lib/fetch";

export default async function Page() {
  const data = await getHomePagePayload();

  return <HomePage data={data} />;
}
