import React, { useRef, useState } from "react";
import List from "components/global/List";
import Item from "components/global/List/Item";
import Column from "components/global/List/Item/Column";
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
          <Button className="flat white" onClick={handleAddPartner}>
            <i className="fas fa-plus"></i>
          </Button>
        </>
      }
    >
      {filteredPartners.map((item) => (
        <Item
          key={item.id}
          actionsLeft={
            <>
              <Button onClick={handleAddPartner}>
                <i className="fas fa-trash-alt"></i>
              </Button>
              <Button className="danger " onClick={handleAddPartner}>
                <i className="fas fa-trash-alt"></i>
              </Button>
              <Button className="success " onClick={handleAddPartner}>
                <i className="fas fa-trash-alt"></i>
              </Button>
              <Button className="round" onClick={handleAddPartner}>
                <i className="fas fa-trash-alt"></i>
              </Button>
              <Button className="danger round" onClick={handleAddPartner}>
                <i className="fas fa-trash-alt"></i>
              </Button>
              <Button className="success round" onClick={handleAddPartner}>
                <i className="fas fa-trash-alt"></i>
              </Button>
            </>
          }
          actionsRight={
            <>
              <Button className="flat" onClick={handleAddPartner}>
                <i className="fas fa-pencil-alt"></i>
              </Button>
              <Button className="flat danger" onClick={handleAddPartner}>
                <i className="fas fa-pencil-alt"></i>
              </Button>
              <Button className="flat success" onClick={handleAddPartner}>
                <i className="fas fa-pencil-alt"></i>
              </Button>
            </>
          }
        >
          <Column caption="Id" text={item.id} />
          <Column caption="Name" text={item.name} />
          <Column caption="Test" text={"Test text"} />
        </Item>
      ))}
    </List>
  );
}

export default PartnersList;
