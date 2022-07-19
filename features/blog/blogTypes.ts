interface Category {
  _id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Tag {
  _id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}

interface User {
  _id: string;
  name: string;
  username: string;
}

interface BlogPost {
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
  posts: BlogPost[];
  categories: Category[];
  tags: Tag[];
  featuredPosts: BlogPost[];
}
