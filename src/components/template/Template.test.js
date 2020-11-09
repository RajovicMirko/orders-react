import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

import Template from "./";

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

test("App component - renders without crashing", () => {
  render(<Template />, container);
});
