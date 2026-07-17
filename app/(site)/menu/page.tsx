import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/menu-page";
import { getMenuPagePayload } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse espresso, coffee, matcha, pastries, and seasonal drinks at Mesa & Main Coffee Co. in Bakersfield.",
};

export default async function Page() {
  const data = await getMenuPagePayload();

  return <MenuPage data={data} />;
}
