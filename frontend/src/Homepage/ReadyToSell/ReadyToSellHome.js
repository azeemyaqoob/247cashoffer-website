import React from "react";
import "./../ReadyToSell/ReadyToSellStyle.css";
import bigicon from "./../../Assets/biglogo247cashoffer.svg";
import { NavLink, useLocation } from "react-router-dom";

function ReadyToSellHome() {
  return (
    <div className="main_ready_to_sell">
      <div className="row p-0 m-0">
        <div className="col-lg-1 col-md-1 col-1"></div>
        <div className="col-lg-5 col-md-5 col-12">
          <p className="ready_to_sell_heading">READY TO SELL YOUR HOME ?</p>
          <p className="ready_tosell_desp">
            We’ve helped several people get a fair offer for their home. Click
            the button below and our team will give you an obligation-free
            offer.
          </p>
          <NavLink to="/getacashoffer">
            <button className="get_your_free_offer_button_readytosell">
            Get a Cash Offer
            </button>
          </NavLink>
        </div>

        <div className="col-lg-5 col-md-5 col-12">
          <img src={bigicon} className="bigiconstyle" />
        </div>
        <div className="col-lg-1 col-md-1 col-1"></div>
      </div>
    </div>
  );
}

export default ReadyToSellHome;
