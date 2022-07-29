import type { NextPage } from "next";
import { useEffect } from "react";

import {
  getPosts,
  getFeaturedPosts,
  getBlogSize,
  getCategoryPosts,
} from "../features/blog/blogThunk";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import Layout from "../components/Layout";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedPostsSkeleton from "../components/FeaturedPostsSkeleton";
import Posts from "../components/Posts";
import PostsSkeleton from "../components/PostsSkeleton";
import CategoryPosts from "../components/CategoryPosts";

const Home: NextPage = () => {
  const { featuredPostsIsLoading, postsIsLoading, skip, limit, categoryPosts } =
    useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  const firstCategory = { slug: "tourism" };
  const secondCategory = { slug: "travel" };
  const thirdCategory = { slug: "restaurants" };

  useEffect(() => {
    dispatch(getPosts({ skip, limit }));
  }, []);
  useEffect(() => {
    dispatch(getFeaturedPosts());
  }, []);
  useEffect(() => {
    dispatch(getBlogSize());
  }, []);
  useEffect(() => {
    dispatch(getCategoryPosts(firstCategory));
    dispatch(getCategoryPosts(secondCategory));
    dispatch(getCategoryPosts(thirdCategory));
  }, []);

  return (
    <Layout>
      <div>
        {featuredPostsIsLoading ? <FeaturedPostsSkeleton /> : <FeaturedPosts />}
      </div>
      <div className="mt-4">
        {postsIsLoading ? <PostsSkeleton /> : <Posts />}
      </div>
      <div className="mt-4">
        <CategoryPosts />
      </div>
    </Layout>
  );
};

export default Home;
