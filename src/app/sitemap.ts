import type { MetadataRoute } from "next";

const siteUrl = "https://mln111.tkp217.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/opengraph-image.jpg`],
    },
  ];
}
