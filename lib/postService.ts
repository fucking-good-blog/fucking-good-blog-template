import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join } from "path";

import type { Post } from "@/types";

type GetAllPostsParams = {
  limit?: number;
};

const postsDirectory = join(process.cwd(), "_posts");

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const isExist = fs.existsSync(fullPath);

  /** TODO: 파일이 없는 경우 더 깔-쌈하게 처리하는 방법 고민해보기~ */
  if (!isExist) notFound();

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const description = content.slice(0, 100).replace(/\n/g, "");

  return { ...data, slug: realSlug, content, description } as Post;
}

export function getAllPosts({ limit }: GetAllPostsParams = {}): Post[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return limit ? posts.slice(0, limit) : posts;
}
