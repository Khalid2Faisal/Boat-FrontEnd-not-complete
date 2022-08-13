import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getMorePosts } from "../../features/blog/blogThunk";
import { setMorePostsIsLoading } from "../../features/blog/blogSlice";

import PostCard from "./PostCard";

export default function Posts() {
  const dispatch = useAppDispatch();
  const { posts, count, size, morePostsIsLoading } = useAppSelector(
    (state) => state.blog
  );

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
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          {count < size && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  dispatch(getMorePosts());
                  dispatch(setMorePostsIsLoading(true));
                }}
                type="button"
                disabled={morePostsIsLoading}
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 inline-flex items-center mt-6 md:mt-10"
              >
                {morePostsIsLoading ? (
                  <>
                    <svg
                      role="status"
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
