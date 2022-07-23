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
import FeaturedPosts from "../components/FeaturedPosts";
import Posts from "../components/Posts";

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

  return (
    <Layout>
      <div>
        <FeaturedPosts posts={featuredPosts} />
      </div>
      <div className="mt-4">
        <Posts />
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
