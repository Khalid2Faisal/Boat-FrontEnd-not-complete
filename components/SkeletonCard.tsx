import React from "react";
import { BsImageAlt } from "react-icons/bs";

export default function SkeletonCard({
  imageHeightClass,
}: {
  imageHeightClass?: string;
}) {
  return (
    <div role="status" className="animate-pulse mb-6 lg:mb-10 w-full">
      <div
        className={`flex justify-center items-center mb-4 bg-gray-300 dark:bg-gray-700 w-full ${
          imageHeightClass ? imageHeightClass : "h-56"
        }`}
      >
        <BsImageAlt className="text-4xl text-gray-200 dark:text-gray-600" />
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
      <div className="flex items-center justify-center w-full mb-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
      </div>
      <div className="h-2 bg-gray-200 w-1/4 rounded-full dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
