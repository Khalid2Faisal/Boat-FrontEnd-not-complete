import type { NextPage } from "next";
import { useEffect } from "react";

import {
  getPosts,
  getFeaturedPosts,
  getBlogSize,
} from "../features/blog/blogThunk";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import Layout from "../components/Layout";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedPostsSkeleton from "../components/FeaturedPostsSkeleton";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  const { featuredPostsIsLoading, skip, limit } = useAppSelector(
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
        {featuredPostsIsLoading ? <FeaturedPostsSkeleton /> : <FeaturedPosts />}
      </div>
      <div className="mt-4">
        <Posts />
      </div>
    </Layout>
  );
};

export default Home;
