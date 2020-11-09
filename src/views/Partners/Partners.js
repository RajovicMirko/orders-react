import React, { Component } from "react";
import PartnersList from "../../components/project/Partners/List";

export class Partners extends Component {
  constructor() {
    super();
    this.state = {
      partners: Array.from({ length: 100 }, (val, i) => ({
        id: `${i}`,
        name: `Test partner ${i}`,
        isActive: Math.round(Math.random()),
      })),
    };
  }
  render() {
    const { partners } = this.state;
    return (
      <div className="page">
        <PartnersList partners={partners} />
      </div>
    );
  }
}

export default Partners;
