import React, { Component } from "react";
import { SideBar } from "../../components/SideBar";
import { Card } from "../../components/Card";
import "./dashboard.scss";
export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <div className="mainWrapper">
          <div className="container">
            <Card title="Dashboard" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default index;
