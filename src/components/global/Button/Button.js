import "./Button.scss";
import React from "react";

function Button({ text, children, ...rest }) {
  return (
    <button id="button" {...rest}>
      {text && text}
      {children}
    </button>
  );
}

export default Button;
