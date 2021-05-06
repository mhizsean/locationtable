import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sider, close }) => {
  return (
    <div
      className={`side-nav ${sider ? "sider" : ""}`}
      onClick={(e) => e.stopPropagation()}>
      <div className="nav-cont">
        <NavLink to="/" activeClassName="activeRoute" onClick={() => close()}>
          Dashboard
        </NavLink>
      </div>
      <div className="nav-cont">
        <NavLink
          to="/add-contact"
          activeClassName="activeRoute"
          onClick={() => close()}>
          Add Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
