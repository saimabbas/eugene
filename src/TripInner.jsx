import React, { useState } from "react";
import Header from "./components/Header";
import {
  BsChevronLeft,
  BsChevronRight,
  BsEnvelopeFill,
  BsFillHouseFill,
  BsFillTelephoneFill,
  BsStarFill,
  BsX,
} from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TourImg1 from "./assets/london.webp";
import TourImg3 from "./assets/australia-min.jpg";
import TourImg4 from "./assets/imgtrip1-min.jpg";
import Footer from "./components/Footer";

const TripInner = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [TourImg1, TourImg3, TourImg4];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const goToPrevious = (event) => {
    // Prevent event propagation to parent element
    event.stopPropagation();
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (event) => {
    // Prevent event propagation to parent element
    event.stopPropagation();
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="eugene">
      <main className="home-page">
        <Header />
        <section className="trip-details-section">
          <div className="box">
            <div className="trip-details-box">
              <h1>London Trip</h1>
              <div className="rtb-left">
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
              </div>
              <div className="trip-details-gallery-container">
                <div className="trip-details-gallery">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      onClick={() => openLightbox(index)}
                    />
                  ))}
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  blanditiis deleniti, tempora rem eveniet quia. Quidem quos
                  quis fugit. Optio magni, saepe blanditiis officiis laboriosam
                  distinctio sed veniam voluptatem?
                </p>
              </div>
              <div className="trip-details-gallery-container tdgc-2">
                <div className="trip-details-gallery">
                  <img src={TourImg1} alt="" />
                  <img src={TourImg3} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  blanditiis deleniti, tempora rem eveniet quia. Quidem quos
                  quis fugit. Optio magni, saepe blanditiis officiis laboriosam
                  distinctio sed veniam voluptatem?
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

      {/* Lightbox */}
      {lightboxIsOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button className="close" onClick={closeLightbox}>
              <BsX />
            </button>
            <img src={images[currentImage]} alt="" />
            <button className="prev" onClick={(e) => goToPrevious(e)}>
              <BsChevronLeft />
            </button>
            <button className="next" onClick={(e) => goToNext(e)}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripInner;
