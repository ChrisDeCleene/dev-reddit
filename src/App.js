import React, { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import PostsPage from "./pages/PostsPage/";
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