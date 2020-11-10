import "./Button.scss";
import React from "react";

function Button({ children, ...rest }) {
  return (
    <button id="button" {...rest}>
      {children && <span>{children}</span>}
    </button>
  );
}

export default Button;
