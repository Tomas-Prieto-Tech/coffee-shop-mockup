import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-espresso text-oat-milk hover:-translate-y-0.5 hover:bg-roast",
  secondary: "border border-espresso/15 bg-white/70 text-espresso hover:border-terracotta hover:text-terracotta",
  ghost: "text-espresso underline decoration-terracotta/50 underline-offset-4 hover:text-terracotta",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
