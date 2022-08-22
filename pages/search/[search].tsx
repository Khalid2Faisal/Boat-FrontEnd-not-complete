import { NextPage, GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import PostCard from "../../components/Blog/PostCard";
import blogService from "../../services/blog";
import { BlogPost } from "../../features/blog/blogTypes";

interface Props {
  posts: BlogPost[];
  search: string;
}

const Search: NextPage<Props> = ({ posts, search }) => {
  /**
   * If there are no search results, render a message to the user.
   * @returns A function that returns a div with some text.
   */
  const renderEmptyState = () => {
    return (
      <div className="text-center mt-16 min-h-[20rem] flex flex-col justify-center">
        <h1 className="text-gray-800 text-2xl xl:text-3xl">
          No matching search results.{" "}
        </h1>
        <p className="mt-2 text-gray-500">
          Try again using more general search terms.
        </p>
      </div>
    );
  };

  return (
    <Layout>
      <div className="relative">
        <div
          role="article"
          className="focus:outline-none xl:container xl:mx-auto py-8 px-2 md:px-4"
        >
          <h2 className="px-8 sm:px-0 text-3xl md:text-4xl focus:outline-none text-center f-m-w text-gray-800 font-bold pt-0">
            You Searched for "{search}"
          </h2>
          {posts.length > 0 ? (
            <div className="pt-14 px-4 xl:px-10">
              <div className="grid grid-flow-row xl:grid-cols-2 gap-5 w-full">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ) : (
            renderEmptyState()
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search } = context.query;
  try {
    const posts = await blogService.getSearchPosts(search as string);
    console.log(posts);
    return {
      props: {
        posts,
        search,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default Search;
