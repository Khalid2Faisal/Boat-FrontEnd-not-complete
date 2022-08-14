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
