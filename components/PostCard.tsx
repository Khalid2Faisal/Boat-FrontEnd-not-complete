import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiTime } from "react-icons/bi";

import smartTrim from "../helpers/smartTrim";
import { BlogPost } from "../features/blog/blogTypes";

dayjs.extend(relativeTime);

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="relative md:flex p-6 bg-white items-center gap-x-2 shadow-md rounded-md md:h-56">
      <Link href={`/blog/${post.slug}`}>
        <img
          role="img"
          src={`${process.env.NEXT_PUBLIC_API_URL}/blog/photo/${post.slug}`}
          alt={post.title}
          className="focus:outline-none sm:w-auto w-full md:h-full rounded-md cursor-pointer object-cover min-w-[30%]"
        />
      </Link>
      <div className="md:pl-6 w-full">
        <Link
          href={`/blog/${post.slug}`}
          className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
        >
          <h3 className="focus:outline-none f-m-m lg:text-2xl text-xl font-semibold leading-8 mt-6">
            {smartTrim(post.title, 50, " ", "...")}
          </h3>
        </Link>
        <div className="lg:mt-5 mt-8">
          <div className="flex items-end justify-between">
            <div className="flex items-center">
              {post.postedBy && (
                <>
                  <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                    <Link href={`/profile/${post.postedBy.username}`}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/user/photo/${post.postedBy._id}`}
                        alt="Ellipse-1"
                        role="img"
                        className="rounded-full cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="pl-2">
                    <Link
                      href={`/profile/${post.postedBy.username}`}
                      className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
                    >
                      <h3 className="f-f-l text-xs md:text-base">
                        {post.postedBy.name}
                      </h3>
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div className="flex space-x-1 items-center justify-end  text-gray-500">
              <BiTime className="text-lg" />
              <p className="md:text-sm text-xs leading-3 text-gray-500">
                {dayjs(post.updatedAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
