"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Announcement } from "@/types/sanity";

const styles = {
  standard: "bg-espresso text-oat-milk",
  seasonal: "bg-terracotta text-white",
  urgent: "bg-[#8d4330] text-white",
  event: "bg-sage text-white",
};

export function AnnouncementBar({ announcement }: { announcement: Announcement | null }) {
  const [dismissed, setDismissed] = useState(false);

  if (!announcement?.enabled || dismissed) {
    return null;
  }

  return (
    <div className={cn("px-4 py-3 text-sm", styles[announcement.style])}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="flex-1 text-center font-medium">
          {announcement.text}{" "}
          {announcement.linkUrl && announcement.linkLabel ? (
            <Link href={announcement.linkUrl} className="underline underline-offset-4">
              {announcement.linkLabel}
            </Link>
          ) : null}
        </p>
        {announcement.dismissible ? (
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => setDismissed(true)}
            className="rounded-full p-1 hover:bg-white/10"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
