import moment from "moment";
import React, { useEffect, useState } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegCommentAlt, FaReddit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postsSelector } from "../../store/redditSlice";
import ReactMarkdown from "react-markdown";

import classes from "./PostDetail.module.css";
import Comment from "../../components/Comments/Comment";

function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector(postsSelector);
  const [post, setPost] = useState({});
  const [postIndex, setPostIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const tempPostIndex = posts.findIndex((post) => post.id === postId);
    setPostIndex(tempPostIndex);
    setPost(posts[postIndex]);
    setIsLoading(false);
  }, [post, postId, postIndex, posts]);


  if (isLoading) {
    return <p>Loading, please wait...</p>;
  }

  if (!post && !isLoading) {
    return (
      <p>
        Could not find post! Please return to <Link to={"/"}>homepage</Link>.
      </p>
    );
  }

  if (post && !isLoading) {
    console.log(post);
    return (
      <>
        <div className={classes.rating}>
          <BiUpvote />
          <p>{post.ups}</p>
          <BiDownvote />
          <hr />
          <a href={post.url} target="_blank" rel="noreferrer">
            <FaReddit />
          </a>
        </div>
        <div className={classes.post}>
          <h2>{post.title}</h2>
          <ReactMarkdown children={post.selftext} />
        </div>
        <div className={classes["post-details"]}>
          <section>
            <p className={classes["post-author"]}>{post.author}</p>
            <p className={classes["post-created-time"]}>
              {moment.unix(post.created_utc).fromNow()}
            </p>
            <div className={classes["post-comments"]}>
              <FaRegCommentAlt />
              <p>{post.num_comments}</p>
            </div>
          </section>
          {/* fetch and render comments here */}
          <div className={classes.comments}>
            {post.comments && post.comments &&
              post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
          </div>
        </div>
      </>
    );
  }

  return <div></div>;
}

export default PostDetail;
