import "./NavBar.scss";
import React from "react";

function NavBar({ onClick, ...rest }) {
  return (
    <nav>
      <div id="banner">
        <span className="menu-btn" onClick={onClick}>
          <i className="fas fa-bars"></i>
        </span>
        <span className="title">Orders control</span>
      </div>
    </nav>
  );
}

export default NavBar;
