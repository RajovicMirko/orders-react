import "./Links.scss";
import React from "react";
import Link from "./Link";

function Links() {
  const linksArr = [
    {
      to: "/partners",
      name: "Partners",
      caption: "Partners preview",
      avatar: "fas fa-user-friends",
    },
    {
      to: "/orders",
      name: "Orders",
      caption: "Orders preview",
      avatar: "fas fa-boxes",
    },
  ];

  return (
    <ul className="nav-links">
      {linksArr.map((link) => (
        <li key={link.name}>
          <Link {...link} />
        </li>
      ))}
    </ul>
  );
}

export default Links;
