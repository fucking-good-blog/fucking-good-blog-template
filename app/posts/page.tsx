import type { Metadata } from "next";
import { BLOG } from "@/constants";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: BLOG.title,
  description: BLOG.description,
};

export default async function PostsPage() {
  return <Container as="article"></Container>;
}
