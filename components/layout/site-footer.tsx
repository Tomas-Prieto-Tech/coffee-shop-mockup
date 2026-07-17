import Link from "next/link";
import type { SiteSettings } from "@/types/sanity";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="mt-24 border-t border-espresso/8 bg-[#f3ebdf]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <h2 className="font-serif text-3xl text-espresso">{settings.businessName}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/75">{settings.footerMessage}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">Visit</p>
          <div className="mt-4 space-y-2 text-sm text-charcoal/75">
            <p>{settings.address}</p>
            <p>{settings.city}</p>
            <p>{settings.phone}</p>
            <p>{settings.email}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">Links</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-charcoal/75">
            {settings.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-terracotta">
                {link.title}
              </Link>
            ))}
            <Link href="/studio" className="hover:text-terracotta">
              Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
