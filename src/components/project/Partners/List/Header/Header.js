import "./Header.scss";
import React from "react";

function Header({ children, title }) {
  return (
    <div id="list-header">
      <div className="left">
        <span className="title">{title}</span>
      </div>
      <div className="right">{children}</div>
    </div>
  );
}

export default Header;
