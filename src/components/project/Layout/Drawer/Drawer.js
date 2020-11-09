import "./Drawer.scss";
import React from "react";

import Links from "./Links";

function Drawer({ showDrawer, ...rest }) {
  const style = {};

  if (showDrawer) {
    return (
      showDrawer && (
        <div id="drawer" style={style}>
          <div className="container">
            <h4>Navigation</h4>
          </div>
          <Links />
        </div>
      )
    );
  } else {
    return null;
  }
}

export default Drawer;
