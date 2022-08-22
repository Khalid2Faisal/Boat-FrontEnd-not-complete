import { createSlice } from "@reduxjs/toolkit";
import { BlogState } from "./blogTypes";
import {
  getFeaturedPosts,
  getPosts,
  getMorePosts,
  getBlogSize,
  getCategoryPosts,
} from "./blogThunk";

/* Defining the initial state of the reducer. */
const initialState: BlogState = {
  featuredPosts: [],
  posts: [],
  categoryPosts: {},
  categories: [],
  tags: [],
  skip: 0,
  limit: 7,
  size: 0,
  count: 0,
  featuredPostsIsLoading: true,
  postsIsLoading: true,
  morePostsIsLoading: false,
  categoryPostsIsLoading: true,
};

/* Creating a blog slice of the redux store. */
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
    builder
      .addCase(getFeaturedPosts.pending, (state) => {
        state.featuredPostsIsLoading = true;
      })
      .addCase(getFeaturedPosts.fulfilled, (state, action) => {
        state.featuredPosts = action.payload.blogs;
        state.featuredPostsIsLoading = false;
      })
      .addCase(getPosts.pending, (state) => {
        state.postsIsLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload.blogs;
        state.categories = action.payload.categories;
        state.tags = action.payload.tags;
        state.count = action.payload.count;
        state.postsIsLoading = false;
      })
      .addCase(getMorePosts.pending, (state) => {
        state.morePostsIsLoading = true;
      })
      .addCase(getMorePosts.fulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload.blogs];
        state.categories = action.payload.categories;
        state.tags = action.payload.tags;
        state.count += action.payload.count;
        state.morePostsIsLoading = false;
      })
      .addCase(getBlogSize.fulfilled, (state, action) => {
        state.size = action.payload;
      })
      .addCase(getCategoryPosts.pending, (state) => {
        state.categoryPostsIsLoading = true;
      })
      .addCase(getCategoryPosts.fulfilled, (state, action) => {
        state.categoryPosts[action.payload.category.slug] =
          action.payload.blogs;
        state.categoryPostsIsLoading = false;
      });
  },
});

export const { setSkip, setMorePostsIsLoading, setLimit } = blogSlice.actions;

export default blogSlice.reducer;
