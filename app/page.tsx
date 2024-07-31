import type { Metadata } from "next";
import { getAllPosts } from "@/lib/postService";

import { BLOG } from "@/constants";
import { Container } from "@/components/Container";
import { Posts } from "@/components/Posts";

export const metadata: Metadata = {
  title: BLOG.title,
  description: BLOG.description,
};

export default function Main() {
  const posts = getAllPosts({ limit: 3 });

  return (
    <Container as="main">
      <Posts>
        {posts.map((item) => (
          <Posts.Item key={item.toString()}>{JSON.stringify(item)} </Posts.Item>
        ))}
      </Posts>
    </Container>
  );
}
