import React from "react";
import Card from "../../UI/Card";
import classes from "./LoadingPost.module.css";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";

const LoadingPosts = () => {
  return (
    <Card>
      <div className={classes.rating}>
        <BiUpvote />
        <p>0</p>
        <BiDownvote />
      </div>
      <div>
        <div className={classes["loading-lines"]}>
          <div className={classes.shine}></div>
          <div className={classes.shine}></div>
        </div>
        <div className={classes["post-details"]}>
            <p className={classes["post-author"]}>author</p>
            <p className={classes["post-created-time"]}>
              0 days ago
            </p>
            <div
              className={classes["post-comments"]}
            >
              <FaRegCommentAlt />
              <p>0</p>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default LoadingPosts;
