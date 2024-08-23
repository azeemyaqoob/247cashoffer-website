import React from "react";
import "./../ReadyToGetStarted/ReadyToGetStartedStyle.css";
import smallicon from "./../../Assets/smallicon247.svg";
import { NavLink, useLocation } from "react-router-dom";
import fb from "./../../Assets/fbLink.png";
import twitter from "./../../Assets/twitterLink.png";
import linkedin from "./../../Assets/linkedinicona.png";
import youtube from "./../../Assets/youtubeLink.png";
function ReadyToGetStarted() {
  return (
    <div className="main_div_ReadyToGetStarted">
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1"></div>

        <div className="col-lg-5 col-md-5 col-12">
          <img src={smallicon} className="small_icon_logo" />
        </div>

        <div className="col-lg-5 col-md-5 col-12">
          <div className="d-flex flex-row">
            <p className="heading_ReadytoGetStarted">Ready to Get Started?</p>
            <NavLink to="/getacashoffer">
              <button className="getreadybtn_getstart">Get a Cash Offer</button>
            </NavLink>
          </div>
        </div>

        <div className="col-lg-1 col-md-1 col-1"></div>
      </div>
      <hr className="hr_line_footer" />

      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1"></div>
        <div className="col-lg-5 col-md-11 col-11">
          <p className="heading_footer">Quick Links</p>
          <NavLink
            to="/"
            exact
            className="nav-link desp_ffoter"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/whoweare"
            className="nav-link desp_ffoter"
            activeClassName="active"
          >
            Who We Are
          </NavLink>

          <NavLink
            to="/contactus"
            className="nav-link desp_ffoter"
            activeClassName="active"
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/blogs"
            className="nav-link desp_ffoter"
            activeClassName="active"
          >
            Blogs
          </NavLink>

          <NavLink
            to="/privacypolicy"
            className="nav-link desp_ffoter"
            activeClassName="active"
          >
            Privacy Policy
          </NavLink>
        </div>
        <div className="col-lg-1 col-md-1 col-1"></div>
        <div className="col-lg-5 col-md-11 col-11">
          <p className="heading_footer">Contact Information</p>
          <p className="desp_ffoter">Name: Ron Garner </p>
          <p className="desp_ffoter">Phone: 470-664-3058</p>
          <p className="desp_ffoter">Email: sellyourhouse@247cashoffer.com</p>

          <div className="d-flex flex-row">
            <a href="https://www.facebook.com/247cashoffer/" target="_blank">
              <img src={fb} className="social_icon_referrals" alt="Facebook" />
            </a>
            <a href="https://linkedin.com/in/cashmoneydeals/" target="_blank">
              <img
                src={linkedin}
                className="social_icon_referrals"
                alt="Instagram"
              />
            </a>
            <a href="https://www.twitter.com/247_offer" target="_blank">
              <img
                src={twitter}
                className="social_icon_referrals"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToGetStarted;
