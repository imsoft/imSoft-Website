import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

interface PostsProps {
  posts: SanityDocument[];
  lang: string;
}

export const Posts = ({ posts = [], lang }: PostsProps) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString(
      lang === "en"
        ? "en-US"
        : lang === "ru"
        ? "ru-RU"
        : lang === "zh"
        ? "zh-CN"
        : "es-MX",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <>
      <div
        className="py-10 mx-auto grid grid-cols-1"
        aria-label="Lista de publicaciones del blog"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/${lang}/blog/${post.slug.current}`}
              className="p-4 flex flex-row items-center justify-between hover:opacity-90"
              aria-label={`Leer más sobre el post: ${post.title}`}
            >
              <div>
                <h2 className="font-medium text-xl text-primary">
                  {post.title}
                </h2>
                <p className="py-2 text-primary text-xs font-light uppercase">
                  {convertDate(post._createdAt)} • {post.authorName}
                </p>
              </div>
              {post?.mainImage && (
                <Image
                  className="w-32 object-fill rounded-lg"
                  src={post.imageURL}
                  alt={post.mainImage.alt}
                  width={350}
                  height={350}
                  priority
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
