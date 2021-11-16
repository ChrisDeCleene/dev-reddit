import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import PostsPage from "../components/Layout/PostsPage/PostsPage";
import classes from "./App.module.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <PostsPage />
      </main>
    </Fragment>
  )
}

export default App;