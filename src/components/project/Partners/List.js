import React, { useRef, useState } from "react";
import List from "components/global/List";
import Item from "components/global/List/Item";
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
    <List
      title="Partners"
      header={
        <>
          <Input
            placeholder="Search"
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
            forwardRef={(ref) => (searchRef = ref)}
          ></Input>
          <Button className="btn btn-primary flat" onClick={handleAddPartner}>
            <i className="fas fa-plus"></i>
          </Button>
        </>
      }
    >
      {filteredPartners.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </List>
  );
}

export default PartnersList;
