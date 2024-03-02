import React from "react";
import "../home.css";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <div className="box-lg">
        <div className="header-content">
          <div className="header-left">
            <h4>Family Blog</h4>
          </div>
          <div className="header-middle">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#trips">Trip</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="header-right">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
