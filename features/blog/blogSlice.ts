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
  limit: 7,
  size: 0,
  count: 0,
  featuredPostsIsLoading: true,
  postsIsLoading: true,
  morePostsIsLoading: false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
    setMorePostsIsLoading: (state, action) => {
      state.morePostsIsLoading = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFeaturedPosts.pending, (state) => {
      state.featuredPostsIsLoading = true;
    }),
      builder.addCase(getFeaturedPosts.fulfilled, (state, action) => {
        state.featuredPosts = action.payload.blogs;
        state.featuredPostsIsLoading = false;
      }),
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload.blogs;
        state.categories = action.payload.categories;
        state.tags = action.payload.tags;
        state.count = action.payload.count;
      }),
      builder.addCase(getMorePosts.pending, (state) => {
        state.morePostsIsLoading = true;
      }),
      builder.addCase(getMorePosts.fulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload.blogs];
        state.categories = action.payload.categories;
        state.tags = action.payload.tags;
        state.count += action.payload.count;
        state.morePostsIsLoading = false;
      }),
      builder.addCase(getBlogSize.fulfilled, (state, action) => {
        state.size = action.payload;
      });
  },
});

export const { setSkip, setMorePostsIsLoading, setLimit } = blogSlice.actions;

export default blogSlice.reducer;
