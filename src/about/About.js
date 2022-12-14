import React from "react";
import "./About.css";
import Footer from "../footer/Footer";

function About() {
  return (
    <>
      <section className="about">
        <div className="author__image">
          <img
            src={require("../image/Regini_Lee.jpg")}
            alt="Website owner Regini Lee wearing graduation gown from the National University of Singapore."
          ></img>
        </div>
        <div className="author__bio">
          <p>
            Hello there! I am Regini.
            <br />
            <br />I am from Malaysia. I pursued my Bachelor of Computing
            (Information Systems) at the National University of Singapore. I am
            currently working at UOB Singapore as a software developer.
            <br />
            <br />
            As a developer, I have experience in object-oriented programming
            (Java, C#), frontend development (ReactJS, Material UI, Bootstrap,
            Ant Design, jQuery, ASP.NET), and backend development (SQL, Spring,
            MariaDB, SharePoint Server).
            <br />
            <br />
            As a designer, I have experience in UIUX design, graphic design
            (event marketing materials, content marketing materials, vector
            graphics, branding guideline), and theatre set design.
            <br />
            <br />
            Outside of development and design, I enjoy taking photos, playing
            the piano and ukulele, and cooking healthy meals.
            Recently, I just started a food blog at
            {" "}
            <b>
              <a href="https://www.caloriecounts.net/" target="_blank">
                caloriecounts.net{" "}
                <i class="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </b>
            {" "}
            as well.
            <br />
            <br />I would like to improve my programming and designing skills. I
            enjoy building digital solutions that serve a meaningful purpose, so
            if my creation can solve my client's problem, it is a win-win
            situation.
            <br />
            <br />
            My journey as a developer and designer has just started. I am
            excited about what lies ahead! Feel free to connect with me.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
