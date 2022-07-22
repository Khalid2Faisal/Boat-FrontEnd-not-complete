import type { NextPage } from "next";
import { useEffect } from "react";

import {
  getPosts,
  getFeaturedPosts,
  getMorePosts,
  getBlogSize,
} from "../features/blog/blogThunk";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import Layout from "../components/Layout";
import { ifWholeNumber } from "../utilities";

const Home: NextPage = () => {
  const { posts, featuredPosts, skip, limit, size, count } = useAppSelector(
    (state) => state.blog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts({ skip, limit }));
    dispatch(getFeaturedPosts());
    dispatch(getBlogSize());
  }, []);

  const isWholeNumber = ifWholeNumber(size, limit);

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

      {count < size && (
        <button
          onClick={() => dispatch(getMorePosts())}
          className="mt-8 text-white bg-indigo-600 py-2 px-4"
        >
          load more
        </button>
      )}
    </Layout>
  );
};

export default Home;
