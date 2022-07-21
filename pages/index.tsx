import type { NextPage } from "next";
import { useEffect } from "react";

import { getPosts, getFeaturedPosts } from "../features/blog/blogThunk";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { posts, featuredPosts } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts({ skip: 0, limit: 10 }));
    dispatch(getFeaturedPosts());
  }, []);

  return (
    <Layout>
      <h1 className="mt-16">Home page</h1>
      <h2 className="mt-8">Featured Posts</h2>
      <div className="mt-4">
        {featuredPosts.map((post) => (
          <p key={post.slug}>{post.title}</p>
        ))}
      </div>
      <h2 className="mt-8">Posts</h2>
      <div className="mt-4">
        {posts.map((post) => (
          <p key={post.slug}>{post.title}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
