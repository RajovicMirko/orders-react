import "./Page.scss";
import React from "react";

function Template({ children, onClick, ...rest }) {
  return (
    // <div id="page" onClick={onClick}>
    <div id="page">
      <div className="container">{children}</div>
    </div>
  );
}

export default Template;
