import "./Page.scss";
import React from "react";

function Template({ children, onClick, ...rest }) {
  return (
    // <div id="page" onClick={onClick}>
    <main id="page">
      <div className="container">{children}</div>
    </main>
  );
}

export default Template;
