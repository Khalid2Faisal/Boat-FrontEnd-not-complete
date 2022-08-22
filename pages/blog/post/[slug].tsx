import React from "react";
import { NextPage, GetServerSideProps } from "next";

import { useAppSelector } from "../../../app/hooks";
import blogService from "../../../services/blog";
import { BlogPost, Category } from "../../../features/blog/blogTypes";
import Layout from "../../../components/Layout";
import PostContent from "../../../components/Blog/PostContent";
import RelatedPosts from "../../../components/Blog/RelatedPosts";
// import DisqusThread from "../../../components/DisqusThread";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const Post: NextPage<Props> = ({ post, relatedPosts }) => {
  const { showMobileMenu } = useAppSelector((state) => state.navigation.layout);

  return (
    <Layout>
      <section className={`${showMobileMenu ? "mt-28" : ""}`}>
        <PostContent post={post} />
      </section>
      <section>
        <RelatedPosts posts={relatedPosts} />
      </section>
      {/* <section className="p-4">
        <DisqusThread slug={post.slug} title={post.title} />
      </section> */}
    </Layout>
  );
};

/**
 * It's a function that returns an object with a property called props, which is an object with two
 * properties: post and relatedPosts.
 * The post property is the result of calling the blogService.getSinglePost function, which returns a
 * single post.
 * The relatedPosts property is the result of calling the blogService.getRelatedPosts function, which
 * returns an array of related posts.
 *
 * @param context - An object containing the following properties:
 * @returns The return value of the function is an object with a props property. The props property is
 * an object that will be passed to the page component as props.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const post = await blogService.getSinglePost(slug as string);
  const relatedPosts = await blogService.getRelatedPosts({
    _id: post._id as string,
    categories: post.categories as Category[],
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, relatedPosts }, // will be passed to the page component as props
  };
};

export default Post;
