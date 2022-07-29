import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { BlogPost } from "../features/blog/blogTypes";

export default function CategoryPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md shadow-indigo-500">
      <Link href={`/blog/${post.slug}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>
      </Link>
      {post.mdesc && (
        <p className="mb-3 font-normal text-gray-700">{post.mdesc}</p>
      )}
      <Link href={`/blog/${post.slug}`}>
        <button className="inline-flex items-center text-sm font-medium text-center text-indigo-700 hover:text-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
          <span className="inline-block">Read more</span>
          <BsArrowRight className="text-base text-indigo-700 hover:text-indigo-800 h-full ml-1 mt-[4px] cursor-pointer" />
        </button>
      </Link>
    </div>
  );
}
