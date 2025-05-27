import type { MetadataRoute } from "next";
import { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

export const revalidate = 60;
const languages = ["es", "en", "ru", "zh"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPostEntries: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    const posts = await sanityFetch<SanityDocument[]>({
      query: postsQuery,
      params: { lang },
    });

    const entries = posts.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/blog/${post.slug.current}`,
      lastModified: post._updatedAt
        ? new Date(post._updatedAt).toISOString()
        : new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "daily" as const,
    }));

    allPostEntries.push(...entries);
  }

  const staticPages = [
    { path: "", priority: 1 },
    { path: "contact", priority: 0.8 },
    { path: "our-story", priority: 0.8 },
    { path: "portfolio", priority: 0.8 },
    { path: "services", priority: 0.8 },
    { path: "privacy-notice", priority: 0.8 },
    { path: "data-analysis", priority: 0.8 },
    { path: "mobile-apps", priority: 0.8 },
    { path: "web-applications", priority: 0.8 },
    { path: "google-ads-campaigns", priority: 0.8 },
    { path: "website-development", priority: 0.8 },
    { path: "seo-optimization", priority: 0.8 },
    { path: "online-store", priority: 0.8 },
    { path: "ai-and-ml-consulting", priority: 0.8 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => {
    const lastModified = new Date().toISOString();

    return languages.map((lang) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/${page.path}`,
      lastModified,
      priority: page.priority,
      changeFrequency: "monthly" as const,
    }));
  });

  return [...staticEntries, ...allPostEntries];
}
