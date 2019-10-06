import React, { Component } from 'react';
import {Card} from '../../components/Card';

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mt-2">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <Card title="Recent Activity"/>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6">
            <Card title="Pending tasks"/>
          </div>
          <div className="col-lg-12 col-sm-12 col-md-12 mt-5">
            <Card title="Productivity"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default index
