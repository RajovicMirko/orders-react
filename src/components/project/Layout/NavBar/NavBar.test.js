import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

import NavBar from "./";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("NavBar component - renders without crashing", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
    container
  );
});
