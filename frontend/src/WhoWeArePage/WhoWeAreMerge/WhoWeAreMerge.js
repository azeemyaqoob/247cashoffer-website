import React, { useEffect, useState } from "react";
import Navbar from "../../Homepage/Navbar/Navbar";
import WhatOurClientSay from "../../Homepage/WhatOurClientSay/WhatOurClientSay";
import ReadyToGetStarted from "../../Homepage/ReadyToGetStarted/ReadyToGetStarted";
import About247cashoffer from "../About247cashoffer/About247cashoffer";
import CashOfferDifference from "../CashOfferDifference/CashOfferDifference";
import AllRightReserved from "../../Homepage/AllRightReserved/AllRightReserved";

function WhoWeAreMerge() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <About247cashoffer />
      <CashOfferDifference />
      <WhatOurClientSay />
      <ReadyToGetStarted />
      <AllRightReserved />
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
    </div>
  );
}

export default WhoWeAreMerge;
