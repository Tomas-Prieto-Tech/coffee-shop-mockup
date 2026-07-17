import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mesa-and-main-demo.vercel.app"),
  title: {
    default: "Mesa & Main Coffee Co. | Coffee Shop in Bakersfield, CA",
    template: "%s | Mesa & Main Coffee Co.",
  },
  description:
    "A polished Bakersfield coffee shop demo site with editable announcements, events, seasonal drinks, and local SEO foundations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
