import React from "react";
import "./../WeBuyHouses/WeBuyHouseStyle.css";
import dollaricon from "./.././../Assets/dollaricon.svg";
function WeBuyHouses() {
  return (
    <div className="main_div_webuyhouses">
      <div className="container">
        <div className="row p-0 m-0">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={dollaricon} className="dolariconstyle" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="webuyhouses_desp_div">
              <p className="buyhouses_heading">
                WE BUY HOUSES FAST TO PUT AN OFFER IN YOUR HAND
              </p>
              <p className="buyhouses_desp">
                Selling your house to 247CASHOFFER offers a host of benefits
                that make the process swift, hassle-free, and advantageous. By
                choosing us, you can bypass the complexities of traditional real
                estate transactions, as cash buyers, we eliminate the need for
                financing contingencies and time-consuming appraisals. Enjoy a
                faster closing process, often within days, and avoid costs
                associated with repairs and renovations, we purchase properties
                as-is. The straightforward nature of our fair offers provide
                sellers with the certainty and peace of mind they seek in
                swiftly and successfully selling their property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeBuyHouses;
