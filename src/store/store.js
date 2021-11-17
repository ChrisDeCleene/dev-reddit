import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/postsSlice";
import commentsReducer from "../slice/commentsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});

export default store;