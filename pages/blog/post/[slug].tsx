import React from "react";
import { GetServerSideProps } from "next";

import blogService from "../../../services/blog";
import { BlogPost, Category } from "../../../features/blog/blogTypes";
import Layout from "../../../components/Layout";
import PostContent from "../../../components/PostContent";
import RelatedPosts from "../../../components/RelatedPosts";
import DisqusThread from "../../../components/DisqusThread";

const Post = ({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) => {
  return (
    <Layout>
      <section>
        <PostContent post={post} />
      </section>
      <section>
        <RelatedPosts posts={relatedPosts} />
      </section>
      <section className="p-4">
        <DisqusThread slug={post.slug} title={post.title} />
      </section>
    </Layout>
  );
};

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
