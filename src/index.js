import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Blog from "./Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Menu />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
