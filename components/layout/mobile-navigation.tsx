"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/sanity";

export function MobileNavigation({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-espresso/10 bg-white/80 p-3 text-espresso"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      <div
        className={cn(
          "absolute left-4 right-4 top-[calc(100%+0.75rem)] rounded-[1.75rem] border border-espresso/10 bg-white/95 p-5 shadow-[0_24px_60px_rgba(45,33,24,0.14)]",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-4 text-base text-espresso">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
