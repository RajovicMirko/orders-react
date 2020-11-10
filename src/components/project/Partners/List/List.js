import "./List.scss";
import React, { useRef, useState } from "react";
import Header from "./Header";
import Item from "./Item";
import Input from "components/global/Input";
import Button from "components/global/Button";

function PartnersList({ partners = [], ...rest }) {
  let searchRef = useRef();
  const [filteredPartners, setFilteredPartners] = useState(partners);

  const handleKeyUp = (event) => {
    switch (event.keyCode) {
      case 27:
        searchRef.value = "";
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
          partner.name.toLowerCase().indexOf(searchRef.value.toLowerCase()) !==
          -1
        );
      })
    );
  };

  const handleAddPartner = () => {
    console.log("add new partner");
  };

  return (
    <>
      <Header title="Partners">
        <Input
          placeholder="Search"
          onChange={handleSearch}
          onKeyUp={handleKeyUp}
          forwardRef={(ref) => (searchRef = ref)}
        ></Input>
        <Button className="btn btn-primary flat" onClick={handleAddPartner}>
          <i className="fas fa-plus"></i>
        </Button>
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
