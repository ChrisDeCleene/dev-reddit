import React, { useState } from "react";
import classes from "./Post.module.css";
import Card from "../../UI/Card";
import UpArrow from "../../assets/vote_up.png";
import DownArrow from "../../assets/vote_down.png";
import Comment from "../Comment/Comment";
import ReactMarkdown from "react-markdown";
import LoadingComments from "../LoadingPosts/LoadingComments";

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
        <img src={UpArrow} alt="Arrow pointing down" />
        <p>{post.ups}</p>
        <img src={DownArrow} alt="Arrow pointing down" />
      </div>
      <div>
        <div className={classes.details}>
          <h2>{post.title}</h2>
          <ReactMarkdown children={post.selftext.substring(0, 500) + '...'} />
        </div>
        <div onClick={commentsClickHandler}>Comments</div>
        {renderComments()}
      </div>
    </Card>
  );
};

export default Post;
