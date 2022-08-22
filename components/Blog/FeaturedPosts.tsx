import React from "react";
import { useAppSelector } from "../../app/hooks";

import FeaturedPostCard from "./FeaturedPostCard";

export default function FeaturedPosts() {
  const { featuredPosts } = useAppSelector((state) => state.blog);

  return (
    <>
      <div className="pt-8 xl:pt-16 flex-col items-center justify-center  px-4">
        <h1
          role="heading"
          className="text-center text-3xl  md:text-4xl xl:text-5xl font-bold text-gray-800"
        >
          Our Featured Articles
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4"
        >
          Discover new places, get tips from locals, and find the best things to
          do.
        </p>
        <div className="columns-1 sm:columns-2 xl:columns-3 2xl:px-40 2xl:mx-auto pt-10 xl:pt-14 gap-6">
          {featuredPosts.map((post, index) => (
            <FeaturedPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
