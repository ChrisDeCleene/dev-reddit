import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./DropDown.module.css";

const DropDown = ({ subreddits, onSubredditClick, onSubredditDropDown }) => {
  return (
    <div className={classes["drop-down"]}>
      <ul>
        {subreddits.map((subreddit) => (
          <li key={Math.random()} onClick={onSubredditClick}>
            <Link to={"/"}>
              {subreddit}
              </Link>
          </li>
        ))}
      </ul>
      <Button onClick={onSubredditDropDown}>Close (X)</Button>
    </div>
  );
};

export default DropDown;
