import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { getPosts, getFeaturedPosts } from "../features/blog/blogThunk";

import { useAppSelector, useAppDispatch } from "../app/hooks";

const Home: NextPage = () => {
  const { posts, featuredPosts } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts({ skip: 0, limit: 10 }));
    dispatch(getFeaturedPosts());
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {posts.map((post) => (
          <p key={post.title}>{post.title}</p>
        ))}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        I am Footer
      </footer>
    </div>
  );
};

export default Home;
