import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-container">
        <img src="https://ahimay.com/images/Newahimaylogowhite1.png" />
      </div>
      <nav className="primary-nav">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="candidate-finder">CANDIDATE FINDER</NavLink>
        <NavLink to="contact-us">CONTACT US</NavLink>
        <NavLink to="login">LOGIN</NavLink>


      </nav>
    </>
  );
}

export default Header;
