import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-nav">
      <div className="nav-cont">
        <NavLink to="/dashb" activeClassName="activeRoute">
          Overview
        </NavLink>
      </div>
      <div className="nav-cont">
        <NavLink to="/add-contact" activeClassName="activeRoute">
          Add Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
