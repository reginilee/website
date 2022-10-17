import React from 'react';
import './BlogPost.css';

export default function BlogPost(props) {
  return (
    <div className="blogpost">
      <div className="blogpost__image">
        <img src={props.img_src} alt={props.img_alt_text} />
      </div>
      <div className="blogpost__date">
        <p>{props.date}</p>
      </div>
      <div className="blogpost__caption">
        <p>{props.caption}</p>
      </div>
    </div>
  );
}
