import React, { Fragment, useEffect, useState } from "react";
import classes from "./PostsPage.module.css";
import Post from "../Post/Post";
import LoadingPosts from "../LoadingPosts/LoadingPost";

const post = {
  author: "michael0x2a",
  author_fullname: "t2_aoqnb",
  created: 1490569654,
  created_utc: 1490569654,
  id: "61oly8",
  name: "t3_61oly8",
  num_comments: 14,
  num_crossposts: 8,
  permalink: "/r/learnprogramming/comments/61oly8/new_read_me_first/",
  score: 828,
  selftext:
    "How do guys who say they program 8 hours a day manage to sit there all day? I feel like doing something else after 1 hour of being on even when doing something I somewhat enjoy like gaming... I don't know if it is because I have low attention span or uncomfortable cheap office chair and desk or maybe a combo of both.",
  title: "How to sit at PC for long periods of time?",
  ups: 828,
  upvote_ratio: 0.98,
  url: "https://www.reddit.com/r/learnprogramming/comments/61oly8/new_read_me_first/",
};

const posts = [post, post, post, post, post, post];

const PostsPage = () => {
  const [loading, setLoading] = useState(true);

  // REMOVE THIS ONCE API CONNECTED
  useEffect(() => {
    const updateLoading = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(updateLoading);
    };
  }, []);
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
        posts.map((post) => <Post key={post.id + Math.random()} post={post} />)
      )}
    </div>
  );
};

export default PostsPage;
