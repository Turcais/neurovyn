import type { MetadataRoute } from "next";
import { site, valueAreas } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/vizyonumuz", priority: 0.8 },
  { path: "/misyonumuz", priority: 0.8 },
  { path: "/ne-yapiyoruz", priority: 0.9 },
  { path: "/alanlarimiz", priority: 0.9 },
  { path: "/hakkimizda", priority: 0.8 },
  { path: "/manifesto", priority: 0.7 },
  { path: "/ilkelerimiz", priority: 0.7 },
  { path: "/yaklasimimiz", priority: 0.8 },
  { path: "/ekibimiz", priority: 0.5 },
  { path: "/blog", priority: 0.7 },
  { path: "/iletisim", priority: 0.7 },
  { path: "/gizlilik-politikasi", priority: 0.3 },
  { path: "/kullanim-kosullari", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...valueAreas.map((area) => ({
      url: `${site.url}/alanlarimiz/${area.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
