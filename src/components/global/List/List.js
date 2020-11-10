import "./List.scss";
import React from "react";
import Header from "./Header";

function PartnersList({ title, header, children, ...rest }) {
  return (
    <>
      <Header title={title}>{header}</Header>
      <ul className="list-custom">{children}</ul>
    </>
  );
}

export default PartnersList;
