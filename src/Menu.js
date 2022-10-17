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
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
