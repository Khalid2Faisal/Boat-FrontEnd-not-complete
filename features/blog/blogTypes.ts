export interface Category {
  _id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Tag {
  _id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  _id: string;
  name: string;
  username: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  photo?: object;
  body?: string;
  isFeatured?: boolean;
  excrept?: string;
  mdesc?: string;
  categories?: Category[];
  tags?: Tag[];
  postedBy?: User;
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogState {
  featuredPosts: BlogPost[];
  posts: BlogPost[];
  categories: Category[];
  tags: Tag[];
  skip: number;
  limit: number;
  size: number;
  count: number;
}
