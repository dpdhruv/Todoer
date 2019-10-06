import React, { Component } from "react";
import { SideBar } from "../components/SideBar";
import "./desktop.scss";

export class desktop extends Component {
  render() {
    return (
      <div className="layout">
        <SideBar />
        <div className="app-content d-none d-md-block">
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <div className="d-md-none">Mobile Screen</div>
      </div>
    );
  }
}

export default desktop;
