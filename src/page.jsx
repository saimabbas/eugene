import React, { useState, useEffect } from "react";
import "./home.css";
// import bgImg1 from "./assets/bg-img.jpg";
// import bgImg2 from "./assets/bg-img2.jpg";
import bgImg3 from "./assets/bg-img3.jpg";
import bgImg4 from "./assets/bg-img-4.jpg";
// import bgImg5 from "./assets/bg-img-5.jpg";
import famImg from "./assets/family.png";
import TeamImg1 from "./assets/george.png";
import TeamImg2 from "./assets/valentina.png";
import TeamImg3 from "./assets/natasha.png";
import TeamImg4 from "./assets/olga.png";
import TeamImg5 from "./assets/vova.png";
import TeamImg6 from "./assets/eugene.png";
import TeamImg7 from "./assets/anton.png";
import TeamImg8 from "./assets/liz.png";
import TeamImg9 from "./assets/julia.png";
import TeamImg10 from "./assets/mocha.png";
import TourImg1 from "./assets/london.webp";
import TourImg5 from "./assets/PARIS-TRIP.jpg";
import TourImg3 from "./assets/australia.jpg";
import TourImg4 from "./assets/imgtrip1.jpg";
import TourImg6 from "./assets/london-1.jpg";
import TeamCard from "./teamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsFillHouseFill,
  BsFillTelephoneFill,
  BsInstagram,
  BsStarFill,
  BsTwitterX,
} from "react-icons/bs";

const backgrounds = [bgImg4];

const h1Texts = [
  "World Explorer",
  "Adventure Awaits",
  "Father and Grandfather",
];

function Page() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackground(
        (prevBackground) => (prevBackground + 1) % backgrounds.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="eugene">
      <main className="home-page">
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
        <section
          className="hero-header-box"
          id="home"
          style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
        >
          <div className="box">
            <div className="hero-section">
              <h4>GEORGE MARGOLIN</h4>
              <h1>{h1Texts[currentBackground]}</h1>
              <button className="hero-btn">Our Trips</button>
            </div>
          </div>
        </section>
        <section className="about-us" id="about">
          <div className="box">
            <div className="about-us-content">
              <div className="au-left">
                <h5>Welcome To Our Family!</h5>
                <h6>
                  Currently, We Are 3 Margolins, 5 Rotaches, And 1 Sokolov
                </h6>
                <p>
                  Our Family Hails From Saint Petersburg, Russia And Moved To
                  New York City. Our First Wave Of Immigrants Came In August Of
                  1995. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Enim hic alias deleniti necessitatibus, velit fuga
                  provident? Labore ad, cumque illo molestias omnis soluta,
                  quisquam quos repellendus suscipit, beatae fuga aliquam! Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                  odit! Ab nostrum aliquid fuga <br />
                  impedit officia quas quis non dignissimos soluta ex tempora
                  ipsam voluptate maiores earum, dicta in quod tenetur
                  voluptatibus sapiente ipsum distinctio ipsa deleniti,
                </p>
                <button className="main-btn">Family Tree</button>
              </div>
              <div className="au-right">
                <img src={famImg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="team-section" id="team">
          <div className="box">
            <div className="team-content">
              <div className="heading-sec">
                <h3>Our Team</h3>
              </div>
              <div className="team-member">
                <TeamCard
                  name="GEORGE"
                  role="Patriach and backbone of the family"
                  imageUrl={TeamImg1}
                />
                <TeamCard
                  name="VALENTINA"
                  role="Commander in Chief"
                  imageUrl={TeamImg2}
                />
                <TeamCard
                  name="NATASHA"
                  role="Family shrink and free spirit"
                  imageUrl={TeamImg3}
                />
                <TeamCard name="OLGA" role="lorem ipsum" imageUrl={TeamImg4} />
                <TeamCard name="VOVA" role="lorem ipsum" imageUrl={TeamImg5} />
                <TeamCard
                  name="EUGENE"
                  role="Innovator and adventure seeker"
                  imageUrl={TeamImg6}
                />
                <TeamCard name="ANTON" role="lorem ipsum" imageUrl={TeamImg7} />
                <TeamCard name="LIZ" role="lorem ipsum" imageUrl={TeamImg8} />
                <TeamCard name="JULIA" role="lorem ipsum" imageUrl={TeamImg9} />
                <TeamCard
                  name="MOCHA"
                  role="Ball rescuer and loves everyone"
                  imageUrl={TeamImg10}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="team-section" id="trips">
          <div className="box">
            <div className="team-content">
              <div className="heading-sec">
                <h3>Recent Trips</h3>
              </div>
              <div className="recent-swiper-box">
                <div className="rs-grid-box">
                  <div className="rt-swiper-content rts-1">
                    <img src={TourImg1} alt="" />
                    <div className="rt-swiper-bottom">
                      <div className="rtb-left">
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
                      </div>
                      <p>
                        <b>Days:</b> 09
                      </p>
                    </div>
                  </div>
                  <div className="rt-swiper-content rts-2">
                    <img src={TourImg4} alt="" />
                    <div className="rt-swiper-bottom">
                      <div className="rtb-left">
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
                      </div>
                      <p>
                        <b>Days:</b> 09
                      </p>
                    </div>
                  </div>
                  <div className="rt-swiper-content">
                    <img src={TourImg3} alt="" />
                    <div className="rt-swiper-bottom">
                      <div className="rtb-left">
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
                      </div>
                      <p>
                        <b>Days:</b> 09
                      </p>
                    </div>
                  </div>
                  <div className="rt-swiper-content">
                    <img src={TourImg5} alt="" />
                    <div className="rt-swiper-bottom">
                      <div className="rtb-left">
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
                      </div>
                      <p>
                        <b>Days:</b> 09
                      </p>
                    </div>
                  </div>
                  <div className="rt-swiper-content">
                    <img src={TourImg6} alt="" />
                    <div className="rt-swiper-bottom">
                      <div className="rtb-left">
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
                      </div>
                      <p>
                        <b>Days:</b> 09
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/trip">
                  <button className="main-btn">View All Trips</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us" id="contact">
          <div className="box">
            <div className="cu-content">
              <div className="heading-sec">
                <h3>Contact Us</h3>
              </div>
              <div className="contact-us-map">
                <div className="au-right cu-right">
                  <form>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Email"
                      required
                    />
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Address"
                      required
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Message"
                    ></textarea>
                    <button className="main-btn-outline">Submit</button>
                  </form>
                </div>
                <div className="au-left cu-left">
                  <div className="map-section">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3035.840729826542!2d-74.27171308756289!3d40.45666197859065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cb98b7c00d93%3A0xe7745914ebf3144c!2sSpinnaker%20Pointe%20Clubhouse!5e0!3m2!1sen!2svi!4v1703189027589!5m2!1sen!2svi"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div className="adp-box">
                    <div className="address-p">
                      <h4>Address</h4>
                      <p>
                        <BsFillHouseFill /> Parlin, NJ 08859, USA
                      </p>
                    </div>
                    <div className="address-p">
                      <h4>Phones:</h4>
                      <p>
                        <BsFillTelephoneFill /> +1 212 961 6426
                      </p>
                    </div>
                    <div className="address-p">
                      <h4>Email:</h4>
                      <p>
                        <BsEnvelopeFill />
                        george.margolin@hotmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3035.840729826542!2d-74.27171308756289!3d40.45666197859065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cb98b7c00d93%3A0xe7745914ebf3144c!2sSpinnaker%20Pointe%20Clubhouse!5e0!3m2!1sen!2svi!4v1703189027589!5m2!1sen!2svi"
            allowfullscreen=""
          ></iframe>
        </div> */}
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
}

export default Page;
