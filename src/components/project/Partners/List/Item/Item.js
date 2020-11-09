import "./Item.scss";
import React from "react";

function Item({ partner = {} }) {
  return (
    <li id="list-item">
      <div className="item-1">
        <span className="caption">Name</span>
        <span className="text">{partner.name}</span>
      </div>
    </li>
  );
}

export default Item;
