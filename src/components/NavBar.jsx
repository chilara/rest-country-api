import React from "react";
import "../styles/Navbar.css";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2>
        <strong>Where in the world?</strong>
      </h2>
      <div className="dark">
        <BsMoon className="moon" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default NavBar;
