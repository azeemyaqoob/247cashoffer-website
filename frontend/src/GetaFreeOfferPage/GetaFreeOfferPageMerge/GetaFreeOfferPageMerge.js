import React, { useEffect, useState } from "react";
import Navbar from "../../Homepage/Navbar/Navbar";
import ReadyToGetStarted from "../../Homepage/ReadyToGetStarted/ReadyToGetStarted";
import GetaFreeOfferHeader from "../GetaFreeOfferHeader/GetaFreeOfferHeader";
import GetaFreeOfferForm from "../GetaFreeOfferForm/GetaFreeOfferForm";
import AllRightReserved from "../../Homepage/AllRightReserved/AllRightReserved";

function GetaFreeOfferPageMerge() {
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
      <GetaFreeOfferHeader />
      <GetaFreeOfferForm />
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

export default GetaFreeOfferPageMerge;
