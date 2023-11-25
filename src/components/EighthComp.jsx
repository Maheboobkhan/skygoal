import React from "react";
import VerticalLine from "../assets/VerLine.svg";

const EighthComp = () => {
  return (
    <div className="eighthcomp">
      <div className="eighthcomp-container">
        <h2 className="eighthcomp-heading">
          Student Special: Discounted rates on tropical getaways!
        </h2>
        <p className="eighthcomp-para">
          Let's embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
        <div className="eighthcomp-lists-container">
          <ul className="eighthcomp-lists1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refundsy</li>
            <li>Legal</li>
          </ul>
          <ul className="eighthcomp-lists2">
            <li>About</li>
            <li>Schedules</li>
            <li>Pricing</li>
            <li>Membership</li>
            <li>Joins</li>
          </ul>
          <img src={VerticalLine} />
        </div>
      </div>
    </div>
  );
};

export default EighthComp;
