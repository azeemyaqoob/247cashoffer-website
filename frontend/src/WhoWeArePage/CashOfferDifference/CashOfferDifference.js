import React from "react";
import "./../CashOfferDifference/CashOfferDifference.css";
import cashofferdiff from "./../../Assets/cashooferdiff.svg";
import { NavLink, useLocation } from "react-router-dom";
function CashOfferDifference() {
  return (
    <div className="main_div_cashoffer_diff">
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="d-flex justify-content-end">
              <img src={cashofferdiff} className="cashofferdiff_icon" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="d-flex flex-row">
              <p className="heading_cashoofer_diff">THE 24</p>
              <p className="heading_cashoofer_diff_red">7</p>
              <p className="heading_cashoofer_diff">CASHOFFER DIFFERENCE</p>
            </div>
            <ul>
              <li className="para_ul_li_cash_diff">
                We’ll buy your home cash, as-is.
              </li>
              <li className="para_ul_li_cash_diff">
                You won’t have to list it or show it.
              </li>
              <li className="para_ul_li_cash_diff">
                You won’t have to make repairs.
              </li>
              <li className="para_ul_li_cash_diff">
                No need to worry about buyers coming in and out.
              </li>
              <li className="para_ul_li_cash_diff">
                Have an offer in-hand fast.
              </li>
            </ul>
            <NavLink to="/getacashoffer">
              <button className="get_a_free_offer_btn_cashdiff">
              Get a Cash Offer
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashOfferDifference;
