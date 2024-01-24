import React from "react";
import "./home.css"; // Assuming you have a separate CSS file
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

const TeamCard = ({ name, role, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="imgbox">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="captionBox">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
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
  );
};

export default TeamCard;