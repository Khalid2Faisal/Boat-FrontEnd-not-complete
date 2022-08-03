import React from "react";
import { BlogPost } from "../features/blog/blogTypes";
import CategoryPostCard from "./CategoryPostCard";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="max-w-screen-lg mx-auto mt-10 xl:mt-16">
      <h3 className="pl-2 text-xl xl:text-2xl text-gray-800 font-bold mb-4 xl:mb-6">
        Related Posts
      </h3>
      <div className="grid justify-center p-2 grid-columns-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <CategoryPostCard index={index} key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
