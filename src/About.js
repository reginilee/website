import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="author__image">
        <img src={require("./image/Regini_Lee.jpg")}></img>
      </div>
      <div className="author__bio">
        <p>
          Hello there! I am Regini.
          <br />
          <br />I am born in Malaysia, but I pursued my Bachelor of Computing
          (Information Systems) at the National University of Singapore and have
          been working at UOB Singapore as a software developer since June 2022.
          <br />
          <br />
          As a developer, I have experience in object-oriented programming
          (Java, C#), frontend development (ReactJS, Material UI, Bootstrap, Ant
          Design, jQuery, ASP.NET), backend development (SQL, Spring,
          SharePoint), and responsive web development (i.e, ensuring the website
          looks and feels good on both your laptop and on your mobile phone).
          <br />
          <br />
          As a designer, I have experience in designing UXUI (responsive web
          design), designing graphics (event marketing materials, content
          marketing materials, vector graphics, branding guideline), and
          designing (and building) theatre sets.
          <br />
          <br />
          Outside of development and design, I enjoy photography, walking in the
          park, playing the piano (although not very good at it), painting by
          numbers (a newfound hobby), cooking a healthy meal, building miniature
          dollhouses, and drinking a cup of latte.
          <br />
          <br />I would like to brush up on my designing skills, particularly on
          UXUI. I enjoy building digital solutions that serve a meaningful
          purpose, so if my creation can solve my client's problem, it's a
          win-win situation.
          <br />
          <br />
          Fresh out of university, my journey as a developer and designer has
          just started. I'm excited about what lies ahead! Feel free to connect
          with me as I'm always open to meeting new people.
        </p>
      </div>
    </section>
  );
}
