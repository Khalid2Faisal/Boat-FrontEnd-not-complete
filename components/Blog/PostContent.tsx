import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

import { BlogPost } from "../../features/blog/blogTypes";

export default function PostContent({ post }: { post: BlogPost }) {
  const { title, categories, tags, body, slug, postedBy } = post;
  const categoryName = categories?.map((category) => category.name);
  const categorySlug = categories?.map((category) => category.slug);

  return (
    <div className="max-w-screen-lg mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {title}
            </h2>
            {categories && (
              <Link href={`/blog/category/${categorySlug?.at(0)}`}>
                <a className="py-2 text-indigo-700 inline-flex items-center justify-center mb-2">
                  {categoryName?.at(0)}
                </a>
              </Link>
            )}
          </div>
          {slug && (
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/blog/photo/${slug}`}
              className="w-full object-cover"
              style={{ height: "28em" }}
            />
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {body && (
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              {parse(body as string)}
            </div>
          )}

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm p-2">
            {postedBy && (
              <div className="p-4 border">
                <div className="flex items-center py-2">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/user/photo/${postedBy?._id}`}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {postedBy?.name}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 py-3">{postedBy?.about}</p>
              </div>
            )}

            {tags && (
              <div className="p-4 border mt-6">
                <h3 className="text-xl text-gray-700 font-bold">Tags</h3>
                <ul>
                  {tags?.map((tag) => (
                    <Link key={tag.slug} href={`/blog/tag/${tag.slug}`}>
                      <li className="py-2 text-lg text-indigo-500 underline hover:text-indigo-600">
                        #{tag.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* main ends here   */}
    </div>
  );
}
