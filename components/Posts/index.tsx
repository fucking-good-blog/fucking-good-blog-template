import { Item } from "./Item";
import { List } from "./List";

type PostsParams = typeof List & {
  Item: typeof Item;
};

const Posts = List as PostsParams;
Posts.Item = Item;

export { Posts };
