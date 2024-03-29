/* Defining the shape of the data that will be used in the application. */
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
  about?: string;
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

// Defining the shape of the blog state.
export interface BlogState {
  featuredPosts: BlogPost[];
  posts: BlogPost[];
  categoryPosts: { [key: string]: BlogPost[] };
  categories: Category[];
  tags: Tag[];
  skip: number;
  limit: number;
  size: number;
  count: number;
  featuredPostsIsLoading: boolean;
  postsIsLoading: boolean;
  morePostsIsLoading: boolean;
  categoryPostsIsLoading: boolean;
}
