import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import PostsPage from "./pages/PostsPage/";
import PostDetail from "./pages/PostDetail";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/:postId" element={<PostDetail />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
