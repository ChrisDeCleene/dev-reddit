import React, { Fragment, useEffect } from "react";
import classes from "./PostsPage.module.css";
import Post from "../Post/Post";
import LoadingPosts from "../LoadingPosts/LoadingPost";
import { useDispatch, useSelector } from "react-redux";
import {
  currentSubredditSelector,
  fetchComments,
  fetchPosts,
  isLoadingSelector,
  postsSelector,
  subredditTitleSelector,
} from "../../../slice/postsSlice";

const PostsPage = () => {
  const dispatch = useDispatch();
  const subreddit = useSelector(currentSubredditSelector);
  const loading = useSelector(isLoadingSelector);
  const posts = useSelector(postsSelector);
  const subredditTitle = useSelector(subredditTitleSelector);

  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [dispatch, subreddit]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink))
    }

    return getComments;
  }

  return (
    <div className={classes.posts}>
      <h1>{subredditTitle}</h1>
      {loading && <p>Loading posts, please wait...</p>}
      {loading ? (
        <Fragment>
          <LoadingPosts />
          <LoadingPosts />
          <LoadingPosts />
        </Fragment>
      ) : (
        posts.map((post, index) => <Post key={post.id} post={post} onToggleComments={onToggleComments(index)} />)
      )}
    </div>
  );
};

export default PostsPage;
