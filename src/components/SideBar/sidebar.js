import React from 'react'
import './sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';

export const SideBar = props => {
  return (
    <div className="sidemenu d-none d-md-block">
      <div className="logo">
        Todoeer
        <hr className="divider"></hr>
      </div>
      <div className="menu-item">
      <FontAwesomeIcon className="fa-icons" icon={faUser}/>
        Welcome , Dhruv
      </div>
      <div className="menu-item active-menu-item">
        <FontAwesomeIcon className="fa-icons" icon={faHome}/>
        Dashboard
      </div>
      <div className="menu-item">
      <FontAwesomeIcon className="fa-icons" icon={faTasks}/>
        Tasks
      </div>
    </div>
  )
}


