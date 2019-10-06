import React from 'react'
import './sidebar.scss';

export const SideBar = props => {
  return (
    <div className="sidemenu d-none d-md-block">
      <div className="logo">
        Todoeer
        <hr className="divider"></hr>
      </div>
      <div className="menu-item active-menu-item">
        Dashboard
      </div>
      <div className="menu-item">
        Tasks
      </div>
    </div>
  )
}


