import type { Metadata } from "next";
import { BLOG } from "@/constants";
import { getPostBySlug } from "@/lib/postService";
import { Container } from "@/components/Container";

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
