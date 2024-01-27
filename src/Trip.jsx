import React from "react";
import "./home.css";
import TourImg1 from "./assets/london.webp";
import TourImg2 from "./assets/paris.avif";
import TourImg3 from "./assets/australia.jpg";
import TourImg4 from "./assets/maldives.jpeg";

import { BsStarFill } from "react-icons/bs";

const trip = () => {
  return (
    <div className="eugene">
      <main className="trip-page">
        <section className="team-section" id="trips">
          <div className="box">
            <div className="team-content">
              <div className="heading-sec">
                <h3>Recent Trips</h3>
                <span></span>
              </div>
              <div className="recent-trip-container">
                <div className="rt-swiper-content">
                  <img src={TourImg1} alt="" />
                  <div className="rt-swiper-bottom">
                    <h4>LONDON</h4>
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
                    <p>
                      <b>Days:</b> 09
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, nulla quidem dolores molestiae ducimus qui animi alias
                      sed nobis non.
                    </p>
                  </div>
                </div>
                <div className="rt-swiper-content">
                  <img src={TourImg1} alt="" />
                  <div className="rt-swiper-bottom">
                    <h4>LONDON</h4>
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
                    <p>
                      <b>Days:</b> 09
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, nulla quidem dolores molestiae ducimus qui animi alias
                      sed nobis non.
                    </p>
                  </div>
                </div>
                <div className="rt-swiper-content">
                  <img src={TourImg2} alt="" />
                  <div className="rt-swiper-bottom">
                    <h4>PARIS</h4>
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
                    <p>
                      <b>Days:</b> 09
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, nulla quidem dolores molestiae ducimus qui animi alias
                      sed nobis non.
                    </p>
                  </div>
                </div>
                <div className="rt-swiper-content">
                  <img src={TourImg3} alt="" />
                  <div className="rt-swiper-bottom">
                    <h4>AUSTRALIA</h4>
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
                    <p>
                      <b>Days:</b> 09
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, nulla quidem dolores molestiae ducimus qui animi alias
                      sed nobis non.
                    </p>
                  </div>
                </div>
                <div className="rt-swiper-content">
                  <img src={TourImg4} alt="" />
                  <div className="rt-swiper-bottom">
                    <h4>MALDIVES</h4>
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
                    <p>
                      <b>Days:</b> 09
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, nulla quidem dolores molestiae ducimus qui animi alias
                      sed nobis non.
                    </p>
                  </div>
                </div>
                <div className="rt-swiper-content">
                  <img src={TourImg1} alt="" />
                  <div className="rt-swiper-bottom">
                    <h4>LONDON</h4>
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
                    <p>
                      <b>Days:</b> 09
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At, nulla quidem dolores molestiae ducimus qui animi alias
                      sed nobis non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-section">
          <div className="box">
            <div className="footer-content">
              <p>© 2017 Road Travel. All Rights Reserved</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default trip;
