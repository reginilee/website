import React from "react";
import Header from "./header/Header";
import Project from "./project/Project";
import { Project_01, Project_02, Project_03, Project_04, Project_05, Project_06 } from "./project/Project_Data";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "./footer/Footer";

const App = () => (
  <ReactFullpage
    licenseKey={""}
    responsiveWidth="800"
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
          <div className="section">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
