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
            (Information Systems) at the National University of Singapore and
            have worked at UOB Singapore as a software developer since June
            2022.
            <br />
            <br />
            As a developer, I have experience in object-oriented programming
            (Java, C#), frontend development (ReactJS, Material UI, Bootstrap,
            Ant Design, jQuery, ASP.NET), backend development (SQL, Spring,
            SharePoint), and responsive web development (i.e, ensuring the
            website looks good on both your laptop and on your mobile phone).
            <br />
            <br />
            As a designer, I have experience in designing UXUI (responsive web
            design), designing graphics (event marketing materials, content
            marketing materials, vector graphics, branding guideline), and
            designing as well as building theatre sets.
            <br />
            <br />
            Outside of development and design, I enjoy taking photos, walking in
            the park, playing the piano (although not very good at it), painting
            by numbers (a newfound hobby), cooking a healthy meal, building
            miniature dollhouses, and drinking latte.
            <br />
            <br />I would like to improve my designing skills, particularly in
            UXUI. I enjoy building digital solutions that serve a meaningful
            purpose, so if my creation can solve my client's problem, it's a
            win-win situation.
            <br />
            <br />
            Fresh out of university, my journey as a developer and designer has
            just started. I am excited about what lies ahead! Feel free to
            connect with me; I am always open to meeting new people.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
