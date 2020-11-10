import "./Item.scss";
import React from "react";

function Item({ name }) {
  return (
    <li id="list-item">
      <div className="item-1">
        <span className="caption">Name</span>
        <span className="text">{name}</span>
      </div>
    </li>
  );
}

export default Item;
