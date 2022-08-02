import React from "react";
import { GetServerSideProps } from "next";

import blogService from "../../../services/blog";
import { BlogPost } from "../../../features/blog/blogTypes";
import Layout from "../../../components/Layout";
import PostContent from "../../../components/PostContent";

const Post = ({ post }: { post: BlogPost }) => {
  return (
    <Layout>
      <PostContent post={post} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const post = await blogService.getSinglePost(slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post }, // will be passed to the page component as props
  };
};

export default Post;
