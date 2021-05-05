import React from "react";

const Header = ({ openSide }) => {
  return (
    <div className="header-cont">
      <div
        className="harmburger pointer"
        onClick={(e) => {
          e.stopPropagation();
          openSide();
        }}>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
      <div className="welcome-cont">
        <span>Hi, User!</span>
      </div>
    </div>
  );
};

export default Header;
