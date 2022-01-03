import React from "react";
import classes from "./LoadingPost.module.css";

const LoadingComments = () => {
  return (
        <div>
          <lines className={classes.shine}></lines>
          <lines className={classes.shine}></lines>
        </div>
  );
};

export default LoadingComments;
