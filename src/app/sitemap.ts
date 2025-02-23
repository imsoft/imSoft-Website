import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  ];
}
