import appAxios from "../appAxios";
import { Category } from "../../features/blog/blogTypes";

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
