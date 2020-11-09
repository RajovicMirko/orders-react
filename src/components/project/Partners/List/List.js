import "./List.scss";
import React, { useRef, useState } from "react";
import Header from "./Header";
import Item from "./Item";

function PartnersList({ partners = [], ...rest }) {
  const searchRef = useRef();
  const [filteredPartners, setFilteredPartners] = useState(partners);

  const handleKeyUp = (event) => {
    switch (event.keyCode) {
      case 27:
        searchRef.current.value = "";
        handleSearch();
        break;
      default:
        break;
    }
  };
  const handleSearch = () => {
    setFilteredPartners(
      partners.filter((partner) => {
        return (
          partner.name
            .toLowerCase()
            .indexOf(searchRef.current.value.toLowerCase()) !== -1
        );
      })
    );
  };

  return (
    <>
      <Header title="Partners">
        <input
          placeholder="Search"
          onChange={handleSearch}
          onKeyUp={handleKeyUp}
          ref={searchRef}
        ></input>
        <button>test</button>
      </Header>
      <ul id="list">
        {filteredPartners.map((partner) => (
          <Item key={partner.id} partner={partner} />
        ))}
      </ul>
    </>
  );
}

export default PartnersList;
