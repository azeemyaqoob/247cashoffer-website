import React from "react";
import "./../HowItWorks/HowItWorksStyle.css";
import submityouraddressicon from "./../../Assets/submityouraddress.png";
import submityouraddressicon1 from "./../../Assets/submityouraddress2.png";
import submityouraddressicon2 from "./../../Assets/submityouraddress3.png";
import submityouraddressicon3 from "./../../Assets//submityouraddress4.png";
import { NavLink } from "react-router-dom";
function HowItWork() {
  return (
    <div className="main_div_HowItWorksStyle">
      <div className="d-flex justify-content-center">
        <p className="how_it_work_para">HOW IT WORKS</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="heading_haveanoffer">
          HAVE AN OFFER IN HAND WITHIN 7-DAYS
        </p>
      </div>
      <div className="main_div_card_upper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="main_div_card">
                <img className="elipse_icon" src={submityouraddressicon} />
                <p className="submityouraddressheading">Submit property address</p>
                <p className="submityouraddresspara">
                  Provide our team with some basic information about your
                  property.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="main_div_card">
                <img className="elipse_icon" src={submityouraddressicon1} />
                <p className="submityouraddressheading">
                  Receive and offer in 24-hours
                </p>
                <p className="submityouraddresspara">
                  After we assess the current value of your home, our team will
                  reach out with a fair market offer.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="main_div_card">
                <img className="elipse_icon" src={submityouraddressicon2} />
                <p className="submityouraddressheading">
                  We visit your property
                </p>
                <p className="submityouraddresspara">
                  Our team will meet with you and do a full walkthrough of the
                  property.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="main_div_card">
                <img className="elipse_icon" src={submityouraddressicon3} />
                <p className="submityouraddressheading">
                  You choose a close date
                </p>
                <p className="submityouraddresspara">
                  Lastly, you tell us when you want to sell! Pick a date and
                  we’ll have an offer in hand ready for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <NavLink to="/getacashoffer">
          <button className="get_free_offer_button_howitwork">
          Get a Cash Offer
          </button>
        </NavLink>
      </div>
      <div className="d-flex justify-content-center">
        <p className="takesalessthanpara">Takes less than 30-seconds</p>
      </div>
    </div>
  );
}

export default HowItWork;
