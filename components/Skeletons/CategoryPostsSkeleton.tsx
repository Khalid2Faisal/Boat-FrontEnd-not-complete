import React from "react";
import CategoryPostSkeletonCard from "./CategoryPostSkeletonCard";

export default function CategoryPostsSkeleton() {
  return (
    <div className="category-posts__container p-6 px-10">
      <h2 className="px-8 sm:px-0 text-3xl md:text-4xl focus:outline-none text-center f-m-w text-gray-800 font-bold pt-0">
        Popular Categories
      </h2>
      <div className="animate-pulse">
        <div className="mt-6">
          <div className="flex justify-between items-baseline">
            <div className="h-3.5 w-32 bg-gray-300 dark:bg-gray-400 rounded-full px-8 sm:px-0 pt-0 mb-4 xl:mt-8"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-400 inline-flex items-center"></div>
          </div>
          <div className="category-posts__posts grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {[...Array(4)].map((_, index) => {
              return <CategoryPostSkeletonCard key={index} index={index} />;
            })}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-baseline">
            <div className="h-3.5 w-32 bg-gray-300 dark:bg-gray-400 rounded-full px-8 sm:px-0 pt-0 mb-4 xl:mt-8"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-400 inline-flex items-center"></div>
          </div>
          <div className="category-posts__posts grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {[...Array(4)].map((_, index) => {
              return <CategoryPostSkeletonCard key={index} index={index} />;
            })}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-baseline">
            <div className="h-3.5 w-32 bg-gray-300 dark:bg-gray-400 rounded-full px-8 sm:px-0 pt-0 mb-4 xl:mt-8"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-400 inline-flex items-center"></div>
          </div>
          <div className="category-posts__posts grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {[...Array(4)].map((_, index) => {
              return <CategoryPostSkeletonCard key={index} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
