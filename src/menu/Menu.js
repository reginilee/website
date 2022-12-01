import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <>
      <header>
        {showMenu ? (
          <>
            <div className="menu-btn" onClick={toggleMenu}>
              <span className="menu-btn__burger open"></span>
            </div>

            <nav className="nav open">
              <ul className="menu-nav open">
                <li className="menu-nav__item open">
                  <Link to="/" className={`menu-nav__link ${location.pathname === "/" ? " active" : ""}`} onClick={toggleMenu}>Home</Link>
                </li>
                <li className="menu-nav__item open">
                  <Link to="/about" className={`menu-nav__link ${location.pathname === "/about" ? " active" : ""}`} onClick={toggleMenu}>About</Link>
                </li>
                <li className="menu-nav__item open">
                  {/* <Link to="/blog" className={`menu-nav__link ${location.pathname === "/blog" ? " active" : ""}`} onClick={toggleMenu}>Blog</Link> */}
                  <a href="https://www.caloriecounts.net/" className="menu-nav__link" target="_blank">Blog <i class="fa-solid fa-arrow-up-right-from-square" /></a>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <>
            <div className="menu-btn" onClick={toggleMenu}>
              <span className="menu-btn__burger"></span>
            </div>

            <nav className="nav">
              <ul className="menu-nav">
                <li className="menu-nav__item">
                  <Link to="/" onClick={window.scrollTo(0,0)}>Home</Link>
                </li>
                <li className="menu-nav__item">
                  <Link to="/about" onClick={window.scrollTo(0,0)}>About</Link>
                </li>
                <li className="menu-nav__item web">
                  {/* <Link to="/blog" onClick={window.scrollTo(0,0)}>Blog</Link> */}
                  <a href="https://www.caloriecounts.net/" target="_blank">Blog <i class="fa-solid fa-arrow-up-right-from-square" /></a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
