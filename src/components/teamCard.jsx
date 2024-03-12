import React from "react";
import "../home.css";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Teamcard = ({ name, role, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="imgbox">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="captionBox">
        <div className="captiontext">
          <div className="ctcbox">
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
          <div className="social-links">
            <Link to="#">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamcard;
