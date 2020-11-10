import "./Button.scss";
import React from "react";

function Button({ text, children, ...rest }) {
  return (
    <button id="button" {...rest}>
      {children && <span>{children}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}

export default Button;
