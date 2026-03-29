import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/service-details";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://sagatekno.com/",
      lastModified: new Date(),
      alternates: {
        languages: {
          "id-ID": "https://sagatekno.com/",
          en: "https://sagatekno.com/en",
        },
      },
    },
    {
      url: "https://sagatekno.com/en",
      lastModified: new Date(),
      alternates: {
        languages: {
          "id-ID": "https://sagatekno.com/",
          en: "https://sagatekno.com/en",
        },
      },
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getAllServiceSlugs().flatMap((slug) => [
    {
      url: `https://sagatekno.com/services/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "id-ID": `https://sagatekno.com/services/${slug}`,
          en: `https://sagatekno.com/en/services/${slug}`,
        },
      },
    },
    {
      url: `https://sagatekno.com/en/services/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "id-ID": `https://sagatekno.com/services/${slug}`,
          en: `https://sagatekno.com/en/services/${slug}`,
        },
      },
    },
  ]);

  return [...baseRoutes, ...serviceRoutes];
}
