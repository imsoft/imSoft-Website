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
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/blog/${post.slug.current}`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blog/${post.slug.current}`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/blog/${post.slug.current}`,
          zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh/blog/${post.slug.current}`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    })
  );

  const staticPages = [
    { path: "", priority: 1 },
    { path: "contacto", priority: 0.8 },
    { path: "historia", priority: 0.8 },
    { path: "portafolio", priority: 0.8 },
    { path: "servicios", priority: 0.8 },
    { path: "aviso-de-privacidad", priority: 0.8 },
    { path: "analisis-de-datos", priority: 0.8 },
    { path: "aplicaciones-moviles", priority: 0.8 },
    { path: "aplicaciones-web", priority: 0.8 },
    { path: "campanas-en-google-ads", priority: 0.8 },
    { path: "desarrollo-de-sitios-web", priority: 0.8 },
    { path: "posicionamiento-seo", priority: 0.8 },
    { path: "tienda-en-linea", priority: 0.8 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${page.path}`;
    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        alternates: {
          languages: {
            es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/${page.path}`,
            en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/${page.path}`,
            ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/${page.path}`,
            zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh/${page.path}`,
          },
        },
        priority: page.priority,
        changeFrequency: "weekly",
      },
    ];
  });

  return [...staticEntries, ...postEntries];
}
