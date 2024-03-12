import React from "react";
import "../home.css";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Tripcard = ({ trip, TourImg, className }) => {
  return (
    <Link to="#" className={`rt-swiper-content ${className}`}>
      <img src={TourImg} alt="" />
      <div className="rt-swiper-bottom">
        <div className="rtb-left">
          <h4>{trip}</h4>
          <div className="rating-stars">
            <div className="rating-svg-box">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <span>(15)</span>
            </div>
          </div>
        </div>
        <p>
          <b>Days:</b> 09
        </p>
      </div>
    </Link>
  );
};

export default Tripcard;
