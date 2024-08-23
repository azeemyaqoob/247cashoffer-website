import React from "react";
import "./../HowWeCompare/HowWecompareStyle.css";
import table from "./../../Assets/table.svg";
function HowWecompare() {
  return (
    <div className="main_div_howwecompare">
      <div className="d-flex justify-content-center">
        <p className="howwecompare_heading">HOW WE COMPARE</p>
      </div>
<div className="container">
<div className="d-flex justify-content-center">
        <img src={table} className="table_style" />
      </div>
</div>
     
    </div>
  );
}

export default HowWecompare;
