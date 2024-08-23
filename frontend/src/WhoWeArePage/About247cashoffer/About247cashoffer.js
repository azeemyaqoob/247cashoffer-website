import React from "react";
import "./../About247cashoffer/About247cashoffer.css";
import cashoffericon from "./../../Assets/ABOUT 247CASHOFFER.svg";
function About247cashoffer() {
  return (
    <div className="main_About247cashoffer">
      <div className="container">
        <p className="heading_aboucashoffer">ABOUT 247CASHOFFER</p>
        <div className="d-flex justify-content-center">
          {/* <img src={cashoffericon} className="cashofferlogoinabout"/> */}
        </div>

        <p className="para_aboutcashoffer">
          We have helped several of homeowners buy and sell properties. Our goal
          is to provide a quick and no hassle solution to selling your home. We
          are proud of the positive effect we have on our local economy. Every
          home we buy creates jobs and opportunities for real estate agents,
          contractors, escrow officers, local home improvement stores, and many
          others in the industry. We also love seeing our neighborhoods
          transformed and revitalized through our purchases! Lastly, even if we
          don’t buy your home, we want to serve you and help you find the best
          solution for your situation.
        </p>
      </div>
    </div>
  );
}

export default About247cashoffer;
