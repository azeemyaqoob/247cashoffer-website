import React from "react";
import "./WanToBuyYourHouseAStyle.css";
import { NavLink } from "react-router-dom";
function WanToBuyYourHouse() {
  return (
    <div className="main_div_WanToBuyYourHouse">
      <div className="d-flex justify-content-center">
        <div className="black_div">
          <p className="iwanttobuyheading">I WANT TO BUY YOUR HOUSE!</p>
          <p className="iwanttobuypara">
            We’ll give you an offer within 24 hours, just click the button
            below.
          </p>
           <NavLink to="/getacashoffer">
          <button className="get_your_free_offer_button">
          Get a Cash Offer
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WanToBuyYourHouse;
