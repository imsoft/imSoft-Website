import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { Post } from "@/components/blog/Post";

export const revalidate = 60;

export const generateStaticParams = async () => {
  const posts = await client.fetch(postPathsQuery);
  return posts;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateMetadata = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });

  return {
    title: post.title,
    description: post.description,
    image: post.mainImage,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostPage = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });

  return <Post post={post} />;
};

export default PostPage;
