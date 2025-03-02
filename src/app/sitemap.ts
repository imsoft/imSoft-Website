import { MetadataRoute } from "next";
import { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });

  const postEntries: MetadataRoute.Sitemap = posts.map(
    (post: SanityDocument) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug.current}`,
      lastModified: post._updatedAt
        ? new Date(post._updatedAt).toISOString()
        : new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "weekly",
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contacto`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/historia`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/aviso-de-privacidad`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/analisis-de-datos`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/aplicaciones-moviles`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/aplicaciones-web`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/campanas-en-google-ads`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/desarrollo-de-sitios-web`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posicionamiento-seo`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tienda-en-linea`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    ...postEntries,
  ];
}
