import React, { useEffect, useState } from "react";
import Privacypolicycontent from "../Privacypolicycontent/Privacypolicycontent";
import ReadyToGetStarted from "../../Homepage/ReadyToGetStarted/ReadyToGetStarted";
import AllRightReserved from "../../Homepage/AllRightReserved/AllRightReserved";
import Navbar from "../../Homepage/Navbar/Navbar";
import PrivacyPolicyHeader from "../PrivacyPolicyHeader/PrivacyPolicyHeader";

function PrivacypolicypageMerge() {
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
      <PrivacyPolicyHeader />
      <Privacypolicycontent />
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

export default PrivacypolicypageMerge;
