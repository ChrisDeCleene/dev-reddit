import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./redditSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer
  },
});

export default store;