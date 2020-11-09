import "./Input.scss";
import React from "react";

function Input({ forwardRef, ...rest }) {
  return <input id="input" ref={forwardRef} {...rest}></input>;
}

export default Input;
