import appAxios from "../appAxios";
import { Category } from "../../features/blog/blogTypes";

/**
 * It takes a post object as an argument and returns an array of related posts.
 * @param post - {_id: string;categories: Category[];}
 * @returns An array of posts
 */
export default async function getRelatedPosts(post: {
  _id: string;
  categories: Category[];
}) {
  try {
    const res = await appAxios.post("/blogs/related", { post });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
