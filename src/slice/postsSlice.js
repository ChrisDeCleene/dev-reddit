import { createSlice } from "@reduxjs/toolkit";

const API_ROOT = "https://www.reddit.com/r/";

const initialState = {
  // Add a separate fetch for the search query paramater instead of subreddit search /r/search.json?q=""
  searchTerm: "",
  currentSubreddit: "learnprogramming",
  subredditTitle: "LearnProgramming",
  loading: false,
  error: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    getPosts: (state) => {
      state.loading = true;
      state.error = false;
    },
    getPostsSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
    },
    setSubredditTitle: (state, action) => {
      state.subredditTitle = action.payload;
    }
  },
});

export const {
  setSearchTerm,
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  setCurrentSubreddit,
  setSubredditTitle
} = postsSlice.actions;

export const subredditTitleSelector = (state) => state.posts.subredditTitle;
export const searchTermSelector = (state) => state.posts.searchTerm;
export const currentSubredditSelector = (state) => state.posts.currentSubreddit;
export const postsSelector = (state) => state.posts.posts;
export const loadingSelector = (state) => state.posts.loading;
export default postsSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(getPosts());
    const response = await fetch(`${API_ROOT}${subreddit}/.json`);
    const json = await response.json();
    dispatch(getPostsSuccess(json.data.children.map((post) => post.data)));
  } catch (err) {
    dispatch(getPostsFailure());
  }
};
