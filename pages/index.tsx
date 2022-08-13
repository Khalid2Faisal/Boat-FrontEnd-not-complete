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
import FeaturedPosts from "../components/Blog/FeaturedPosts";
import FeaturedPostsSkeleton from "../components/Skeletons/FeaturedPostsSkeleton";
import Posts from "../components/Blog/Posts";
import PostsSkeleton from "../components/Skeletons/PostsSkeleton";
import CategoryPosts from "../components/Blog/CategoryPosts";
import CategoryPostsSkeleton from "../components/Skeletons/CategoryPostsSkeleton";

const Home: NextPage = () => {
  const {
    featuredPostsIsLoading,
    postsIsLoading,
    categoryPostsIsLoading,
    skip,
    limit,
  } = useAppSelector((state) => state.blog);
  const { showMobileMenu } = useAppSelector((state) => state.navigation.layout);
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
      <div className={`${showMobileMenu ? "mt-20" : ""}`}>
        {featuredPostsIsLoading ? <FeaturedPostsSkeleton /> : <FeaturedPosts />}
      </div>
      <div className="mt-4">
        {postsIsLoading ? <PostsSkeleton /> : <Posts />}
      </div>
      <div className="mt-4">
        {categoryPostsIsLoading ? <CategoryPostsSkeleton /> : <CategoryPosts />}
      </div>
    </Layout>
  );
};

export default Home;
