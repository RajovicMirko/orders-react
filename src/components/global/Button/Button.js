// ref - https://blog.teamtreehouse.com/create-a-themable-button-set-with-sass
import "./Button.scss";
import React from "react";

function Button({ children, ...rest }) {
  return <button {...rest}>{children && <span>{children}</span>}</button>;
}

export default Button;
