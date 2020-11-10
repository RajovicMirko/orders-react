import "./List.scss";
import React from "react";
import Header from "./Header";

function PartnersList({ title, header, children, ...rest }) {
  return (
    <>
      <Header title={title}>{header}</Header>
      <ul id="list">{children}</ul>
    </>
  );
}

export default PartnersList;
