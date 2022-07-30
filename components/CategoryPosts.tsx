import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { useAppSelector } from "../app/hooks";
import CategoryPostCard from "./CategoryPostCard";

export default function CategoryPosts() {
  const { categoryPosts } = useAppSelector((state) => state.blog);

  return (
    <div className="category-posts__container p-6 px-10">
      <h2 className="px-8 sm:px-0 text-3xl md:text-4xl focus:outline-none text-center f-m-w text-gray-800 font-bold pt-0">
        Popular Categories
      </h2>
      <div>
        {Object.keys(categoryPosts).map((category) => {
          return (
            <div className="mt-6" key={category}>
              <div className="flex justify-between items-baseline">
                <h2 className="sm:px-0 text-2xl md:text-3xl focus:outline-none text-start text-gray-700 font-bold pt-0 mb-4 capitalize xl:mt-8">
                  {category}
                </h2>
                <Link href={`/blog/category/${category}`}>
                  <p className="inline-flex items-center text-blue-700 hover:text-blue-800 cursor-pointer">
                    See More
                    <BsArrowRight className="ml-1 mt-[4px] text-blue-700 hover:text-blue-800 cursor-pointer" />
                  </p>
                </Link>
              </div>
              <div className="category-posts__posts grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {categoryPosts[category].map((post, index) => {
                  return (
                    <CategoryPostCard
                      key={post.slug}
                      post={post}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
