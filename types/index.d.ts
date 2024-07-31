export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  ogImage: string;
  content: string;
  tags: string[];
};

export type ComponentPropsWithAs<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;
