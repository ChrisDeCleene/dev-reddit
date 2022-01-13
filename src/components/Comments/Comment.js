import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import classes from "./Comment.module.css";

const Comment = ({ comment }) => {
  return (
    <div className={classes.comment}>
      <div className={classes["comment-metadata"]}>
        <p className={classes["comment-author"]}>{comment.author}</p>
        <p className={classes["comment-created-time"]}>
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};

export default Comment;
