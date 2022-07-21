import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import blogService from "../../services/blog";
import { setSkip } from "../blog/blogSlice";

export const getFeaturedPosts = createAsyncThunk(
  "blog/getFeaturedPosts",
  async () => {
    const data = await blogService.getFeaturedPosts();
    return data;
  }
);

export const getPosts = createAsyncThunk(
  "blog/getPosts",
  async ({ skip, limit }: { skip: number; limit: number }) => {
    const data = await blogService.listAllPosts(skip, limit);
    return data;
  }
);

export const getMorePosts = createAsyncThunk(
  "blog/getMorePosts",
  async (_, thunkAPI) => {
    const { blog } = thunkAPI.getState() as RootState;
    const { skip, limit } = blog;
    let toSkip: number = skip + limit;
    try {
      const data = await blogService.listAllPosts(toSkip, limit);
      thunkAPI.dispatch(setSkip(toSkip));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// const loadMore = () => {
//   let toSkip = skip + limit;
//   listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       setLoadedBlogs([...loadedBlogs, ...data.blogs]);
//       setSize(data.size);
//       setSkip(toSkip);
//       console.log(blogsNumber);
//     }
//   });
// };
