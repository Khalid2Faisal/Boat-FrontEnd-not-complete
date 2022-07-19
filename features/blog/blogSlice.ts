import { createSlice } from "@reduxjs/toolkit";
import { BlogState } from "./blogTypes";
import { getPosts, getFeaturedPosts } from "./blogThunk";

const initialState: BlogState = {
  posts: [],
  categories: [],
  tags: [],
  featuredPosts: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload.blogs;
      state.categories = action.payload.categories;
      state.tags = action.payload.tags;
    }),
      builder.addCase(getFeaturedPosts.fulfilled, (state, action) => {
        state.featuredPosts = action.payload.blogs;
      });
  },
});

// export const {} = blogSlice.actions;

export default blogSlice.reducer;
