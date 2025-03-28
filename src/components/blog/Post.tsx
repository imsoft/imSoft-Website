"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

export const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <article>
      <main
        className="container mx-auto prose dark:prose-invert prose-xl px-4 py-24"
        aria-label={`Publicación del blog: ${post.title}`}
      >
        <h1 aria-label="Título del artículo">{post.title}</h1>
        <p>{post.description}</p>
        {post?.mainImage ? (
          <Image
            src={builder.image(post.mainImage).width(1280).height(720).url()}
            alt={post.mainImage.alt}
            width={1280}
            height={720}
          />
        ) : null}
        {post?.body ? <PortableText value={post.body} /> : null}
      </main>
    </article>
  );
};
