import "./Links.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Links() {
  const linksArr = [
    {
      id: 1,
      to: "/partners",
      name: "Partners",
      caption: "Partners preview",
      avatar: "fas fa-user-friends",
    },
    {
      id: 2,
      to: "/orders",
      name: "Orders",
      caption: "Orders preview",
      avatar: "fas fa-boxes",
    },
  ];

  return (
    <ul className="nav-links">
      {linksArr.map((link) => (
        <li key={link.id}>
          <NavLink className="nav-link" to={link.to} activeClassName="active">
            <div className="avatar">
              <i className={link.avatar} />
            </div>
            <div className="text">
              {link.name}
              <span className="nav-caption">{link.caption}</span>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Links;
