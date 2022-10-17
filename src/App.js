import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Project from "./Project";
import { Project_01, Project_02, Project_03, Project_04, Project_05, Project_06 } from "./Project_Data";
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => (
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  <ReactFullpage
  licenseKey = {''}
  scrollingSpeed = {5000}
   render={({ state, fullpageApi }) => {
    return (
      <ReactFullpage.Wrapper>
        <div className="section">
          <Header />
        </div>
        <div className="section">
          <Project {...Project_01} />
        </div>
        <div className="section">
          <Project {...Project_02} />
        </div>
        <div className="section">
          <Project {...Project_03} />
        </div>
        <div className="section">
          <Project {...Project_04} />
        </div>
        <div className="section">
          <Project {...Project_05} />
        </div>
        <div className="section">
          <Project {...Project_06} />
        </div>
      </ReactFullpage.Wrapper>
    );
   }}
  />

  // return (
  //   <div className="App">
  //     <Header />
  //     <Project {...Project_01} />
  //     <Project {...Project_02} />
  //     <Project {...Project_03} />
  //     <Project {...Project_04} />
  //     <Project {...Project_05} />
  //     <Project {...Project_06} />
  //   </div>
  // );
);

export default App;
