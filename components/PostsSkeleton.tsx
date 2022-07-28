import React from "react";
import PostSkeletonCard from "./PostSkeletonCard";

export default function PostsSkeleton() {
  return (
    <div className="bg-indigo-50 relative">
      <div
        role="article"
        className="focus:outline-none xl:container xl:mx-auto py-8 px-2 md:px-4"
      >
        <h2 className="px-8 sm:px-0 text-3xl md:text-4xl focus:outline-none text-center f-m-w text-gray-800 font-bold pt-0">
          Read Our Latest Articles
        </h2>
        <div className="pt-14 px-4 xl:px-10">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-5 w-full">
            {Array.from({ length: 9 }).map((_, index) => (
              <PostSkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
