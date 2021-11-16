import React from "react";
import classes from "./Comments.module.css";
import comments from "../../../modules/comments";

const Comments = () => {
  return (
    <div className={classes['comments']}>
      {comments.map((comment) => (
        <div className={classes["comment"]}>
          <h3>{comment.data.author}</h3>
          <p>{comment.data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
