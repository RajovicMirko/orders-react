import React from "react";
import { NavLink } from "react-router-dom";

function Link({ to, avatar, name, caption, ...rest }) {
  return (
    <NavLink className="nav-link" to={to} activeClassName="active">
      <div className="avatar">
        <i className={avatar} />
      </div>
      <div className="text">
        {name}
        <span className="nav-caption">{caption}</span>
      </div>
    </NavLink>
  );
}

export default Link;
