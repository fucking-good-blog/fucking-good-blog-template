import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { BLOG } from "@/constants";
import { getAllPosts, getPostBySlug } from "@/lib/postService";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const post = getPostBySlug(slug);

  return {
    title: `${BLOG.title} - ${post.title}`,
    description: post.description,
    keywords: post.tags.join(","),
    openGraph: {
      images: [post.ogImage],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  return <Container as="article">{post?.content}</Container>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
