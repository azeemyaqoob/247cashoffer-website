import React from "react";
import "./../SellYourHouse/SellYourHouseStyle.css";
import sellyourhouse from "./../../Assets/sellyourhousebg.svg";
import { NavLink } from "react-router-dom";
function SellYourHouse() {
  return (
    <div className="main_div_sell_your_house m-0 p-0">
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="d-flex justify-content-end">
              <img src={sellyourhouse} className="sellyourhouseicon" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="main_div_sell_youhouse_description">
              <p className="sell_your_house_heading">
                SELL YOUR HOUSE FAST IT’S
              </p>

              <div className="d-flex flex-row">
                <p className="sell_your_house_heading">REALLY THAT</p>
                <p className="sell_your_house_heading_red">SIMPLE</p>
              </div>

              <ul className="main_ul_li_div">
                <li className="ul_li_para">We’ll buy your home cash, as-is.</li>

                <li className="ul_li_para">
                  You won’t have to list it or show it.
                </li>

                <li className="ul_li_para">You won’t have to make repairs.</li>

                <li className="ul_li_para">
                  No need to worry about buyers coming in and out.
                </li>

                <li className="ul_li_para">Have an offer in-hand fast.</li>
              </ul>

              <NavLink to="/getacashoffer">
                <button className="get_free_offer_sell_your_house">
                Get a Cash Offer
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellYourHouse;
