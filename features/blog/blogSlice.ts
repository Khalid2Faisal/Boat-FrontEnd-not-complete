import { createSlice } from "@reduxjs/toolkit";
import { BlogState } from "./blogTypes";
import {
  getFeaturedPosts,
  getPosts,
  getMorePosts,
  getBlogSize,
} from "./blogThunk";

const initialState: BlogState = {
  featuredPosts: [],
  posts: [],
  categories: [],
  tags: [],
  skip: 0,
  limit: 3,
  size: 0,
  count: 0,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload.blogs;
      state.categories = action.payload.categories;
      state.tags = action.payload.tags;
      state.count = action.payload.count;
    }),
      builder.addCase(getFeaturedPosts.fulfilled, (state, action) => {
        state.featuredPosts = action.payload.blogs;
      }),
      builder.addCase(getMorePosts.fulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload.blogs];
        state.categories = action.payload.categories;
        state.tags = action.payload.tags;
        state.count += action.payload.count;
      }),
      builder.addCase(getBlogSize.fulfilled, (state, action) => {
        state.size = action.payload;
      });
  },
});

export const { setSkip } = blogSlice.actions;

export default blogSlice.reducer;
