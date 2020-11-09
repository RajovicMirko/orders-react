import "./Layout.scss";
import React, { useState } from "react";

import NavBar from "./NavBar";
import Drawer from "./Drawer";
import Page from "./Page";

function Layout(props) {
  const [showDrawer, setShowDrawer] = useState(true);
  const handleMenuButtonClick = () => setShowDrawer((prevState) => !prevState);

  return (
    <div id="layout">
      <NavBar onClick={handleMenuButtonClick} />
      <div id="router-view">
        <Drawer showDrawer={showDrawer} />
        <Page onClick={handleMenuButtonClick}>{props.children}</Page>
      </div>
    </div>
  );
}

export default Layout;
