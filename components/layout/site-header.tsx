import Link from "next/link";
import { Button } from "@/components/shared/button";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import type { SiteSettings } from "@/types/sanity";

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  return (
    <header className="sticky top-0 z-40 border-b border-espresso/8 bg-oat-milk/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <p className="font-serif text-2xl text-espresso sm:text-3xl">{settings.businessName}</p>
          <p className="text-xs uppercase tracking-[0.24em] text-roast">{settings.tagline}</p>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-charcoal/80 lg:flex">
          {settings.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-terracotta">
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/visit">Plan Your Visit</Button>
        </div>
        <MobileNavigation links={settings.navLinks} />
      </div>
    </header>
  );
}
