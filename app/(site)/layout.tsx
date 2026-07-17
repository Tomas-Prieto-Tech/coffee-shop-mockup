import type { ReactNode } from "react";
import { AnnouncementBar } from "@/components/announcements/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getGlobalSiteData } from "@/sanity/lib/fetch";
import { SanityLiveBridge } from "@/sanity/lib/live";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Mesa & Main Coffee Co.",
  telephone: "(661) 555-0148",
  email: "hello@mesaandmaincoffee.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1824 19th Street",
    addressLocality: "Bakersfield",
    addressRegion: "CA",
    postalCode: "93301",
    addressCountry: "US",
  },
};

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const { settings, announcement } = await getGlobalSiteData();

  return (
    <div className="editorial-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <AnnouncementBar announcement={announcement} />
      <SiteHeader settings={settings} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {children}
      </main>
      <SiteFooter settings={settings} />
      <SanityLiveBridge />
    </div>
  );
}
