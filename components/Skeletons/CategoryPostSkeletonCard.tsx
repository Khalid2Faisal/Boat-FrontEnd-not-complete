import React from "react";

export default function CategoryPostSkeletonCard({ index }: { index: number }) {
  return (
    <div
      className={`flex flex-col justify-between p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md shadow-blue-500 h-72 ${
        index > 1 ? "hidden sm:flex" : ""
      }`}
    >
      <div className="title">
        <div className="h-3 bg-gray-300 dark:bg-gray-400 rounded-full mb-1 tracking-tight"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-400 rounded-full mb-1 tracking-tight"></div>
        <div className="flex justify-center items-center mb-3">
          <div className="h-3 bg-gray-300 dark:bg-gray-400 rounded-full tracking-tight w-[50%]"></div>
        </div>
      </div>
      <div className="description">
        <div className="h-2.5 bg-gray-300 dark:bg-gray-400 rounded-full mb-2"></div>
        <div className="h-2.5 bg-gray-300 dark:bg-gray-400 rounded-full mb-2"></div>
        <div className="h-2.5 bg-gray-300 dark:bg-gray-400 rounded-full mb-2"></div>
        <div className="h-2.5 bg-gray-300 dark:bg-gray-400 rounded-full mb-3"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-22 h-8 bg-gray-300 dark:bg-gray-400 rounded-md"></div>
      </div>
    </div>
  );
}
