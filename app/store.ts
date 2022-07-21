import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import navigationReducer from "../features/navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
