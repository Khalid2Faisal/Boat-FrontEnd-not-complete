import React from "react";
import SkeletonCard from "./SkeletonCard";

export default function FeaturedPostsSkeleton() {
  return (
    <>
      <div className="pt-8 xl:pt-16 flex-col items-center justify-center  px-4">
        <h1
          role="heading"
          className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
        >
          Our Featured Articles
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4"
        >
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son
        </p>
        <div className="columns-1 sm:columns-2 xl:columns-3 2xl:px-40 2xl:mx-auto pt-10 xl:pt-14 gap-6 w-full">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
