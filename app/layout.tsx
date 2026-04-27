import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { PageMotion } from "@/components/page-motion";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const siteUrl = "https://stablebuild.tech";
const siteName = "StableBuild";
const siteDescription =
  "StableBuild is a founder-led full-stack studio shipping secure product systems, AI workflows, and protocol-grade infrastructure without handoffs.";
const ogImage = "/og/stablebuild-og.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | StableBuild",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "full-stack studio",
    "security-first development",
    "AI systems development",
    "smart contract security",
    "Next.js agency",
    "protocol engineering",
    "LangGraph development",
    "Web3 product studio",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title: "StableBuild | Build fast. Build stable. Ship confident.",
    description:
      "A security-first full-stack studio for product systems, AI workflows, and protocol-grade engineering.",
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "StableBuild homepage preview with security-first product and protocol messaging",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f3",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="overflow-x-hidden bg-paper font-sans text-zinc-950 antialiased">
        <div
          id="scroll-progress"
          className="fixed inset-x-0 top-0 z-[80] h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#fa651e,#1f2937)]"
        />
        <SiteHeader />
        {children}
        <PageMotion />
      </body>
    </html>
  );
}
