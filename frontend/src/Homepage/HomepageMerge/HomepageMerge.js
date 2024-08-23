import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import WanToBuyYourHouse from "../WanToBuyYourHouse/WanToBuyYourHouse";
import HowItWork from "../HowItWorks/HowItWork";
import SellYourHouse from "../SellYourHouse/SellYourHouse";
import HowWecompare from "../HowWeCompare/HowWecompare";
import WhatOurClientSay from "../WhatOurClientSay/WhatOurClientSay";
import WeBuyHouses from "../WeBuyHouses/WeBuyHouses";
import ReadyToSellHome from "../ReadyToSell/ReadyToSellHome";
import ReadyToGetStarted from "../ReadyToGetStarted/ReadyToGetStarted";
import AllRightReserved from "../AllRightReserved/AllRightReserved";

function HomepageMerge() {
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
      <WanToBuyYourHouse />
      <HowItWork />
      <SellYourHouse />
      <HowWecompare />
      <WhatOurClientSay />
      <WeBuyHouses />
      <ReadyToSellHome />
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

export default HomepageMerge;
