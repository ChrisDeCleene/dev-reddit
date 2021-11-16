import React from "react";
import Card from "../../UI/Card";
import classes from "./LoadingPost.module.css";
import UpArrow from "../../assets/vote_up.png";
import DownArrow from "../../assets/vote_down.png";

const LoadingPosts = () => {
  return (
    <Card>
      <div className={classes.rating}>
        <img src={UpArrow} alt="Arrow pointing down" />
        <p>0</p>
        <img src={DownArrow} alt="Arrow pointing down" />
      </div>
      <div>
        <div>
          <lines className={classes.shine}></lines>
          <lines className={classes.shine}></lines>
        </div>
        <div>Comments</div>
      </div>
    </Card>
  );
};

export default LoadingPosts;
