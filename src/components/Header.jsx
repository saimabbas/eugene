import React, { useState } from "react";
import "../home.css";
import {
  BsFacebook,
  BsInstagram,
  BsList,
  BsTwitterX,
  BsXLg,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header>
      <div className="box-lg">
        <div className="header-content">
          <div className="header-left">
            <h4>Family Blog</h4>
          </div>
          <div className="header-middle">
            <Link to="#home">Home</Link>
            <Link to="#about">About</Link>
            <Link to="#team">Team</Link>
            <Link to="#trips">Trip</Link>
            <Link to="#contact">Contact</Link>
          </div>
          <div className="header-right">
            <Link to="#">
              <BsFacebook />
            </Link>
            <Link to="#">
              <BsInstagram />
            </Link>
            <Link to="#">
              <BsTwitterX />
            </Link>
          </div>
          <BsList className="mob-hamburger" onClick={toggleMobileMenu} />
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-top">
                <h4>Family Blog</h4>
                <BsXLg onClick={closeMobileMenu} />
              </div>
              <div className="mobile-menu-bottom">
                <Link to="#home">Home</Link>
                <Link to="#about">About</Link>
                <Link to="#team">Team</Link>
                <Link to="#trips">Trip</Link>
                <Link to="#contact">Contact</Link>
              </div>
              <div className="header-right-mob">
                <Link to="#">
                  <BsFacebook />
                </Link>
                <Link to="#">
                  <BsInstagram />
                </Link>
                <Link to="#">
                  <BsTwitterX />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
