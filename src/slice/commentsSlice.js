import { createSlice } from "@reduxjs/toolkit";

const API_ROOT = "https://www.reddit.com/r/";

const initialState = {
  postId: "",
  loading: false,
  error: false,
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
    getComments: (state) => {
      state.loading = true;
      state.error = false;
    },
    getCommentsSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.comments = action.payload;
    },
    getCommentsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  setPostId,
  getComments,
  getCommentsSuccess,
  getCommentsFailure,
} = commentsSlice.actions;
export const commentsSelector = (state) => state.comments.comments;
export const loadingSelector = (state) => state.comments.loading;
export default commentsSlice.reducer;

export const fetchComments = (post) => async (dispatch) => {
  try {
    dispatch(getComments());
    const response = await fetch(`${API_ROOT}${post}/.json`);
    const json = await response.json();
    console.log(json);
    dispatch(getCommentsSuccess(json.data.children.map((post) => post.data)));
  } catch (err) {
    dispatch(getCommentsFailure());
  }
};
