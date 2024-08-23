import React, { useEffect, useRef } from "react";
import "./../WhatOurClientSay/WhatOurClientsayStyle.css";
import icon from "./../../Assets/ourclientsayicon.svg";
import Slider from "react-slick";
function WhatOurClientSay() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const iconRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the icon is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideInFromLeft'); // Add animation class when icon is visible
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, options);

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current); // Cleanup
      }
    };
  }, []); // Run only on mount

  return (
    <div className="main_whatourclientsay">
      <div className="d-flex justify-content-center">
        <p className="heading_what_our">WHAT OUR CLIENTS ARE SAYING</p>
      </div>
      <div className="container">
        <div className="row p-0 m-0">
          <div className="col-lg-6 col-md-6 col-12">
          <div className="d-flex justify-content-end" ref={iconRef}>
          <img src={icon} className="clientsayicon" alt="Client Icon" />
        </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <Slider {...settings}>
              <div className="main_div_slider">
                <p className="para_review">
                  247CASHOFFER is the best in Georgia. They do what they say
                  they will do. Their team is experienced and professional. They
                  all are truth. If you are looking to sell your home quickly
                  with full transparency give 247CASHOFFER a chance
                </p>
                <p className="heading_review">MELLISA JOSERT</p>
              </div>
              <div className="main_div_slider">
                <p className="para_review">
                  247CASHOFFER is the best in Georgia. They do what they say
                  they will do. Their team is experienced and professional. They
                  all are truth. If you are looking to sell your home quickly
                  with full transparency give 247CASHOFFER a chance
                </p>
                <p className="heading_review">MELLISA JOSERT</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatOurClientSay;
