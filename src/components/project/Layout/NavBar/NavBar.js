import "./NavBar.scss";
import React from "react";
import { Link } from "react-router-dom";

function NavBar({ onClick, ...rest }) {
  return (
    <nav>
      <div id="banner">
        <span className="menu-btn" onClick={onClick}>
          <i className="fas fa-bars"></i>
        </span>
        <Link className="title" to="/">
          Orders control
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
