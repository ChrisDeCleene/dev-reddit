import React, { Fragment, useEffect } from "react";
import classes from "./PostsPage.module.css";
import Post from "../Post/Post";
import LoadingPosts from "../LoadingPosts/LoadingPost";
import { useDispatch, useSelector } from "react-redux";
import { currentSubredditSelector, fetchPosts, loadingSelector, postsSelector } from "../../../slice/postsSlice";

const PostsPage = () => {
  const dispatch = useDispatch();
  const subreddit = useSelector(currentSubredditSelector);
  const loading = useSelector(loadingSelector);
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts(subreddit))
  }, [dispatch, subreddit]);

  return (
    <div className={classes.posts}>
      <h1>LearnProgramming</h1>
      {loading && <p>Loading posts, please wait...</p>}
      {loading ? (
        <Fragment>
          <LoadingPosts />
          <LoadingPosts />
          <LoadingPosts />
        </Fragment>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostsPage;
