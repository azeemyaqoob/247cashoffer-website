import React from "react";
import "./../Navbar/NavbarStyle.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./../../Assets/cashofferlogo.svg";

function Navbar() {
  return (
    <div className="main_div_navbar">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-1"></div>
        <div className="col-lg-10 col-md-10 col-10">
          <nav className="navbar navbar-expand-lg p-0 m-0">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                <img className="cashofferlogo" src={logo} alt="cashofferlogo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 main_center_navbar_items">
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/"
                      exact
                      className="nav-link"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/whoweare"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Who we are
                    </NavLink>
                  </li>
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/blogs"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="nav-item nav_item_links_style">
                    <NavLink
                      to="/contactus"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex">
                  <NavLink to="/getacashoffer">
                    <button className="sign_up_button_style">
                    Get a Cash Offer
                    </button>
                  </NavLink>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-lg-1 col-md-1 col-1"></div>
      </div>
    </div>
  );
}

export default Navbar;
