import React from "react";
import { BsImageAlt } from "react-icons/bs";

export default function SkeletonCard({ index }: { index: number }) {
  return (
    <div
      role="status"
      className={`animate-pulse mb-6 lg:mb-10 w-full ${
        index % 4 === 0 && index !== 0
          ? "sm:break-before-column xl:break-before-avoid"
          : ""
      } ${index % 3 === 0 && index !== 0 ? "xl:break-before-column" : ""}`}
    >
      <div
        className={`flex justify-center items-center mb-4 bg-gray-300 dark:bg-gray-400 w-full ${
          index % 2 === 0 ? "h-110" : "h-64"
        }`}
      >
        <BsImageAlt className="text-4xl text-gray-300 dark:text-gray-600" />
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-full mb-2"></div>
      <div className="flex items-center justify-center w-full mb-4">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-1/2"></div>
      </div>
      <div className="h-2 bg-gray-300 w-1/4 rounded-full dark:bg-gray-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
