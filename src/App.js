import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Project from "./Project.js";
import { Project_01, Project_02, Project_03, Project_04, Project_05, Project_06 } from "./Project_Data";
import Footer from './Footer.js';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Menu />
      <Header />
      <Project {...Project_01} />
      <Project {...Project_02} />
      <Project {...Project_03} />
      <Project {...Project_04} />
      <Project {...Project_05} />
      <Project {...Project_06} />
      <Footer />
    </div>
  );
}

export default App;
