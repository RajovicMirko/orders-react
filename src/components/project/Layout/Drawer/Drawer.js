import "./Drawer.scss";
import React from "react";

function Drawer({ showDrawer, ...rest }) {
  const style = {};

  if (showDrawer) {
    return (
      showDrawer && (
        <div id="drawer" style={style}>
          <div className="container">Drawer component</div>
        </div>
      )
    );
  } else {
    return null;
  }
}

export default Drawer;
