import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://stablebuild.tech",
    sitemap: "https://stablebuild.tech/sitemap.xml",
  };
}
