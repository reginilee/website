import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <div className="project__image">
        <img src={props.preview_img_src} alt={props.img_alt_text}/>
      </div>
      <div className="project__description">
        <h3>{props.title}</h3>
        <hr/>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
        <div className="project__btn">
          <a href={props.external_link} target="_blank" rel="noreferrer">{props.button_text}</a>
        </div>
      </div>
    </div>
  );
}
