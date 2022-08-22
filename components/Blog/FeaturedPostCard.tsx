import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BsArrowRight } from "react-icons/bs";
import { BlogPost } from "../../features/blog/blogTypes";

/* Extending the dayjs library with the relativeTime plugin. */
dayjs.extend(relativeTime);

/* Defining the props that the component will receive. */
interface FeaturedPostCardProps {
  post: BlogPost;
  index: number;
}

export default function FeaturedPostCard({
  post,
  index,
}: FeaturedPostCardProps) {
  return (
    <div
      className={`mb-6 lg:mb-10 ${
        index % 4 === 0 && index !== 0
          ? "sm:break-before-column xl:break-before-avoid"
          : ""
      } ${index % 3 === 0 && index !== 0 ? "xl:break-before-column" : ""} `}
    >
      <Link href={`/blog/post/${post.slug}`}>
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}/blog/photo/${post.slug}`}
          alt={post.title}
          className="cursor-pointer"
        />
      </Link>
      <h2 className="text-xl font-semibold leading-6 mt-8 text-gray-800">
        {post.title}
      </h2>
      <div className="mt-6 flex items-center cursor-pointer">
        <Link href={`/blog/post/${post.slug}`}>
          <>
            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
              continue reading
            </p>
            <BsArrowRight className="text-base text-gray-600" />
          </>
        </Link>
      </div>
      <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
        {dayjs(post.updatedAt).fromNow()}
      </p>
    </div>
  );
}
