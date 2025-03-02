import { Header } from "@/components/blog/Header";
import { Posts } from "@/components/blog/Posts";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

const BlogPage = async () => {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });

  return (
    <>
      <main
        className="max-w-7xl min-h-screen mx-auto px-4 pt-16"
        aria-label="Página del blog con artículos recientes y contenido actualizado"
      >
        <Header aria-label="Encabezado del blog con título y descripción" />
        <Posts
          posts={posts}
          aria-label="Lista de artículos y publicaciones del blog"
        />
      </main>
    </>
  );
};

export default BlogPage;
