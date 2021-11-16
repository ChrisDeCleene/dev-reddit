import React, { useState } from "react";
import classes from "./Post.module.css";
import Card from "../../UI/Card";
import UpArrow from "../../assets/vote_up.png";
import DownArrow from "../../assets/vote_down.png";
import Comments from "../Comments/Comments";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
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
          <p>{post.selftext.substring(0, 300)}</p>
        </div>
        <div onClick={() => setShowComments(!showComments)}>Comments</div>
        {showComments && <Comments />}
      </div>
    </Card>
  );
};

export default Post;
