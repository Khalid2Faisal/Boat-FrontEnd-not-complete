import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import navigationReducer from "../features/navigation/navigationSlice";
import authReducer from "../features/auth/authSlice";

/* Creating a store with the reducers. */
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    navigation: navigationReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
