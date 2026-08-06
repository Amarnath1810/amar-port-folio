import { MetadataRoute } from "next";

const BASE_URL = "https://amarnathreddy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
{
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/experience`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/skills`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
