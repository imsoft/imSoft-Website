import { getDictionary } from "@/app/i18n/dictionary";
import { Posts } from "@/components/blog/Posts";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { Lang } from "@/types/Lang";
import { SanityDocument } from "next-sanity";

const BlogPage = async ({ params }: { params: Promise<{ lang: Lang }> }) => {
  const lang = (await params).lang;
  const t = await getDictionary(lang);

  const { title, description } = t.content.blogPage;

  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });

  return (
    <>
      <main
        className="max-w-7xl min-h-screen mx-auto px-4 pt-16"
        aria-label="Página del blog con artículos recientes y contenido actualizado"
      >
        <div className="py-8" aria-label="Encabezado del blog de imSoft">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2
                className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
                aria-label="Título del blog: Nuestro Blog"
              >
                {title}
              </h2>
              <p className="mt-2 text-lg/8 text-foreground">{description}</p>
            </div>
          </div>
        </div>
        <Posts
          posts={posts}
          aria-label="Lista de artículos y publicaciones del blog"
          lang={lang}
        />
      </main>
    </>
  );
};

export default BlogPage;
