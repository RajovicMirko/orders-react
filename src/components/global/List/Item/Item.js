import "./Item.scss";
import React from "react";

function Item({ children, actionsLeft, actionsRight, ...rest }) {
  return (
    <li className="list-custom-item" {...rest}>
      <div className="left">
        <div className="actions">{actionsLeft}</div>
        <div className="items">{children}</div>
      </div>
      <div className="actions">{actionsRight}</div>
    </li>
  );
}

export default Item;
