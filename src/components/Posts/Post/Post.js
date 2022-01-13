import React, { useState } from "react";
import moment from "moment";
import classes from "./Post.module.css";
import Card from "../../UI/Card";

import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import Comment from "../../Comments/Comment";
import ReactMarkdown from "react-markdown";
import LoadingComments from "../../Layout/Loading/LoadingComments";

const Post = ({ post, onToggleComments }) => {
  const [showComments, setShowComments] = useState(false);

  const commentsClickHandler = () => {
    setShowComments(!showComments);
    onToggleComments(post.permalink);
  };

  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          <p>Loading comments...</p>
          <LoadingComments />
          <LoadingComments />
          <LoadingComments />
          <LoadingComments />
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <div className={classes.rating}>
        <BiUpvote />
        <p>{post.ups}</p>
        <BiDownvote />
      </div>
      <div className={classes.post}>
        <h2>{post.title}</h2>
        <ReactMarkdown children={post.selftext.substring(0, 500) + "..."} />
      </div>
      <div className={classes["post-details"]}>
        <section>
          <p className={classes["post-author"]}>{post.author}</p>
          <p className={classes["post-created-time"]}>
            {moment.unix(post.created_utc).fromNow()}
          </p>
          <div
            className={classes["post-comments"]}
            onClick={commentsClickHandler}
          >
            <FaRegCommentAlt />
            <p>{post.num_comments}</p>
          </div>
        </section>
        {renderComments()}
      </div>
    </Card>
  );
};

export default Post;
