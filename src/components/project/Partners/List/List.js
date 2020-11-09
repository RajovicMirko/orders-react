import "./List.scss";
import React from "react";
import Header from "./Header";
import Item from "./Item";

function PartnersList({ partners, ...rest }) {
  return (
    <>
      <Header title="Partners">
        <button>test</button>
      </Header>
      <ul id="list">
        {partners.map((partner) => (
          <Item key={partner.id} partner={partner} />
        ))}
      </ul>
    </>
  );
}

export default PartnersList;
