import React, { useState, useEffect } from "react";
import "./home.css";
import bgImg1 from "./assets/bg-img.jpg";
import bgImg2 from "./assets/bg-img2.jpg";
import bgImg3 from "./assets/bg-img3.jpg";
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
import TourImg2 from "./assets/paris.avif";
import TourImg3 from "./assets/australia.jpg";
import TourImg4 from "./assets/maldives.jpeg";

import TeamCard from "./teamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Pagination } from "swiper/modules";
import {
  BsEnvelopeFill,
  BsFillHouseFill,
  BsFillTelephoneFill,
  BsStarFill,
} from "react-icons/bs";

const backgrounds = [bgImg1, bgImg2, bgImg3];

const h1Texts = [
  "WORLD EXPLORER",
  "ADVENTURE AWAITS",
  "FATHER AND GRANDFATHER",
];

function App() {
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
        <section
          className="hero-header-box"
          style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
        >
          <div className="box">
            <header>
              <div className="header-content">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Team</a>
                <a href="">Trip</a>
                <a href="">Contact</a>
              </div>
            </header>
            <div className="hero-section">
              <h4>GEORGE MARGOLIN</h4>
              <h1>{h1Texts[currentBackground]}</h1>
            </div>
          </div>
        </section>
        <section className="about-us">
          <div className="box">
            <div className="about-us-content">
              <div className="au-left">
                <div className="heading-sec">
                  <h3>About Us</h3>
                  <span></span>
                </div>
                <h5>WELCOME TO OUR FAMILY!</h5>
                <h6>
                  Currently, We Are 3 Margolins, 5 Rotaches, And 1 Sokolov
                </h6>
                <p>
                  Our Family Hails From Saint Petersburg, Russia And Moved To
                  New York City. Our First Wave Of Immigrants Came In August Of
                  1995. <br /> <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  hic alias deleniti necessitatibus, velit fuga provident?
                  Labore ad, cumque illo molestias omnis soluta, quisquam quos
                  repellendus suscipit, beatae fuga aliquam! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Atque, odit! Ab
                  nostrum aliquid fuga <br />
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
        <section className="team-section">
          <div className="box">
            <div className="team-content">
              <div className="heading-sec">
                <h3>Our Team</h3>
                <span></span>
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
        <section className="team-section">
          <div className="box">
            <div className="team-content">
              <div className="heading-sec">
                <h3>Recent Trips</h3>
                <span></span>
              </div>
              <div className="recent-swiper-box">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={3}
                  freeMode={true}
                  pagination={true}
                  modules={[Pagination]}
                  loop={true}
                  className="recent-trips-swiper"
                >
                  <SwiperSlide>
                    <div className="rt-swiper-content">
                      <img src={TourImg1} alt="" />
                      <div className="rt-swiper-bottom">
                        <div className="rating-stars">
                          <div className="rating-svg-box">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <p>4.99 Rating</p>
                        </div>
                        <h4>LONDON</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="rt-swiper-content">
                      <img src={TourImg2} alt="" />
                      <div className="rt-swiper-bottom">
                        <div className="rating-stars">
                          <div className="rating-svg-box">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <p>4.99 Rating</p>
                        </div>
                        <h4>PARIS</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="rt-swiper-content">
                      <img src={TourImg3} alt="" />
                      <div className="rt-swiper-bottom">
                        <div className="rating-stars">
                          <div className="rating-svg-box">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <p>4.99 Rating</p>
                        </div>
                        <h4>AUSTRALIA</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="rt-swiper-content">
                      <img src={TourImg4} alt="" />
                      <div className="rt-swiper-bottom">
                        <div className="rating-stars">
                          <div className="rating-svg-box">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <p>4.99 Rating</p>
                        </div>
                        <h4>MALDIVES</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="rt-swiper-content">
                      <img src={TourImg1} alt="" />
                      <div className="rt-swiper-bottom">
                        <div className="rating-stars">
                          <div className="rating-svg-box">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <p>4.99 Rating</p>
                        </div>
                        <h4>LONDON</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button className="main-btn">View All Trips</button>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="box">
            <div className="about-us-content cu-content">
              <div className="au-left cu-left">
                <div className="heading-sec">
                  <h3>Contact Us</h3>
                  <span></span>
                </div>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
