import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="social-media">
        <a href="https://www.behance.net/reginilee" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-behance" />
        </a>
        <a href="https://www.linkedin.com/in/reginilee/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="mailto:reginileejn@gmail.com">
        <i className="fa-regular fa-envelope" />
        </a>
      </div>
      <div className="copyright">
        Copyright © {currentYear} Regini Lee. All Rights Reserved.
      </div>
    </footer>
  );
}
