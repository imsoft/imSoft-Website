// ✅ src/app/[lang]/(website)/(contenido)/blog/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import { postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Post } from "@/components/blog/Post";
import { Lang } from "@/types/Lang";

export const revalidate = 60;

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) => {
  const { lang, slug } = await params;

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug, lang },
  });

  return {
    title: post.title,
    description: post.description,
    image: post.mainImage,
  };
};

const PostPage = async ({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) => {
  const { lang, slug } = await params;

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug, lang },
  });

  return <Post post={post} aria-label="Contenido del artículo seleccionado" />;
};

export default PostPage;
