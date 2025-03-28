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
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru`,
        },
      },
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contacto`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/contacto`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contacto`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/contacto`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/historia`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/historia`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/historia`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/historia`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/portafolio`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/portafolio`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/portafolio`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/servicios`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/servicios`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/servicios`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/aviso-de-privacidad`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/aviso-de-privacidad`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/aviso-de-privacidad`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/aviso-de-privacidad`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/analisis-de-datos`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/analisis-de-datos`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/analisis-de-datos`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/analisis-de-datos`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/aplicaciones-moviles`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/aplicaciones-moviles`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/aplicaciones-moviles`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/aplicaciones-moviles`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/aplicaciones-web`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/aplicaciones-web`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/aplicaciones-web`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/aplicaciones-web`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/campanas-en-google-ads`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/campanas-en-google-ads`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/campanas-en-google-ads`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/campanas-en-google-ads`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/desarrollo-de-sitios-web`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/desarrollo-de-sitios-web`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/desarrollo-de-sitios-web`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/desarrollo-de-sitios-web`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posicionamiento-seo`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/posicionamiento-seo`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/posicionamiento-seo`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/posicionamiento-seo`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tienda-en-linea`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/tienda-en-linea`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/tienda-en-linea`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/tienda-en-linea`,
        },
      },
      priority: 0.8,
      changeFrequency: "weekly",
    },
    ...postEntries,
  ];
}
