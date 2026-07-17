import { MapPin, Navigation, Wifi } from "lucide-react";
import { Button } from "@/components/shared/button";
import type { SiteSettings } from "@/types/sanity";

export function LocationCard({ settings }: { settings: SiteSettings }) {
  return (
    <div className="rounded-[2rem] bg-espresso p-7 text-oat-milk shadow-[0_28px_60px_rgba(45,33,24,0.25)]">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">Visit Mesa & Main</p>
      <h3 className="mt-3 font-serif text-3xl">Bakersfield mornings, handled.</h3>
      <div className="mt-6 space-y-4 text-sm leading-6 text-oat-milk/85">
        <p className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0" />{settings.address}, {settings.city}</p>
        <p className="flex gap-3"><Navigation className="mt-1 size-4 shrink-0" />{settings.parking}</p>
        <p className="flex gap-3"><Wifi className="mt-1 size-4 shrink-0" />{settings.wifi}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={settings.mapsUrl} className="bg-terracotta text-white hover:bg-[#b55e40]">
          Get Directions
        </Button>
        <Button href="/visit" variant="secondary" className="border-white/25 bg-white/8 text-oat-milk hover:border-sand hover:text-white">
          View All Hours
        </Button>
      </div>
    </div>
  );
}
