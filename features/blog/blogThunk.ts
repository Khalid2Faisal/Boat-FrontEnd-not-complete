import { createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "../../services/blog";

export const getPosts = createAsyncThunk(
  "blog/getPosts",
  async ({ skip, limit }: { skip: number; limit: number }, thunkAPI) => {
    const data = await blogService.listAllPosts(skip, limit);
    return data;
  }
);
export const getFeaturedPosts = createAsyncThunk(
  "blog/getFeaturedPosts",
  async () => {
    const data = await blogService.getFeaturedPosts();
    return data;
  }
);
