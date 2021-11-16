import React, { useState } from "react";
import DropDown from "./DropDown/DropDown";
import classes from "./Header.module.css";

const SUBREDDITS = [
  "Programming",
  "WebDev",
  "PHP",
  "Python",
  "JavaScript",
  "LearnPython",
  "AskProgramming",
  "LearnProgramming",
  "LearnJavaScript",
  "Coding",
  "FrontEnd",
  "BadCode",
  "CSS",
  "CodingHelp",
  "WordPress",
];

const Header = () => {
  const [hideSubreddits, setHideSubreddits] = useState(true);

  // MOVE TO REDUX STATE
  const [searchTerm, setSearchTerm] = useState("");

  const subredditClickHandler = (event) => {
    console.log(event.target.innerHTML.toLowerCase());
    // const parameter = `/r/${event.target.innerHTML.toLowerCase()}/`;
    // dispatch(setSelectedSubreddit(parameter));
  };

  const searchHandler = () => {
    if (!searchTerm) {
      alert("Please enter a value in the searchbar");
      return;
    }
    console.log(searchTerm);
    // const parameter = `/r/${searchTerm.replace(/ /g, "").toLowerCase()}/`;
    // dispatch(setSelectedSubreddit(parameter));
  };

  const handleSubredditDropDown = () => {
    setHideSubreddits(!hideSubreddits);
  };

  return (
    <header className={classes.header}>
      <h1>
        <span>Dev</span>Reddit
      </h1>
      <div className={classes.search}>
        <input
          id="search-bar"
          className={classes.searchbar}
          type="text"
          placeholder="Search Reddit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchHandler}>Go</button>
      </div>
      <h2 onClick={handleSubredditDropDown}>Subreddits</h2>
      <ul className={classes.hamburgerMenu} onClick={handleSubredditDropDown}>
        <li className={hideSubreddits ? classes.bar : classes['bar-one-active']}></li>
        <li className={hideSubreddits ? classes.bar : classes['bar-two-active']}></li>
        <li className={hideSubreddits ? classes.bar : classes['bar-three-active']}></li>
      </ul>
      {hideSubreddits || (
        <DropDown
          subreddits={SUBREDDITS}
          onSubredditClick={subredditClickHandler}
          onSubredditDropDown={handleSubredditDropDown}
        />
      )}
    </header>
  );
};

export default Header;
