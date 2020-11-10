import "./Column.scss";
import React from "react";

function Column({ text, caption, ...rest }) {
  return (
    <div className="column" {...rest}>
      <span className="caption">{caption}</span>
      <span className="text">{text}</span>
    </div>
  );
}

export default Column;
