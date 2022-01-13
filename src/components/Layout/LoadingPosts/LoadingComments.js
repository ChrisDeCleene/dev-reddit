import React from "react";
import classes from "./LoadingPost.module.css";

const LoadingComments = () => {
  return (
        <div className={classes['loading-lines']}>
          <div className={classes.shine}></div>
          <div className={classes.shine}></div>
        </div>
  );
};

export default LoadingComments;
