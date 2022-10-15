import React from "react";
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer>Copyright © {currentYear} Regini Lee. All Rights Reserved.</footer>;
}
