import React from "react";
import { BsImageAlt } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export default function PostSkeletonCard() {
  return (
    <div className="relative animate-pulse sm:flex p-6 bg-white items-center gap-x-2 shadow-md rounded-md sm:h-56 w-full">
      <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-[30%] dark:bg-gray-400">
        <BsImageAlt className="text-4xl text-gray-300 dark:text-gray-600" />
      </div>
      <div className="md:pl-6 w-[70%]">
        <div className="title">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 mb-4 mt-6 w-[100%]"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-[50%] mb-4 mt-6"></div>
        </div>
        <div className="lg:mt-5 mt-8">
          <div className="flex items-end justify-between">
            <div className="flex flex-row items-center">
              <FaRegUser className="text-xl lg:text-2xl text-gray-300 dark:text-gray-400 block" />
              <div className="h-2 lg:h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 lg:w-32 mb-2 ml-3 mt-2"></div>
            </div>
            <div className="hidden sm:flex space-x-1 items-center justify-end">
              <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-400 w-16 lg:w-32 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
