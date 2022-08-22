import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import blogService from "../../services/blog";
import { setSkip } from "../blog/blogSlice";

// get featured posts thunk.
export const getFeaturedPosts = createAsyncThunk(
  "blog/getFeaturedPosts",
  async () => {
    try {
      const data = await blogService.getFeaturedPosts();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// get posts thunk.
export const getPosts = createAsyncThunk(
  "blog/getPosts",
  async ({ skip, limit }: { skip: number; limit: number }) => {
    try {
      const data = await blogService.listAllPosts(skip, limit);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// get more posts thunk.
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

// get post thunk.
export const getBlogSize = createAsyncThunk("blog/getBlogSize", async () => {
  try {
    const data = await blogService.getSize();
    return data;
  } catch (error) {
    console.log(error);
  }
});

// get posts for each category thunk.
export const getCategoryPosts = createAsyncThunk(
  "blog/getCategoryPosts",
  async ({
    slug,
    skip,
    limit,
  }: {
    slug: string;
    skip?: number;
    limit?: number;
  }) => {
    try {
      const data = await blogService.getCategoryPosts(slug, skip, limit);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
