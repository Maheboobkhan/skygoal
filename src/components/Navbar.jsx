import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-1">
        <li>Home</li>
        <li>About</li>
        <li>Schedule</li>
        <li>Membership</li>
        <li>Pricing</li>
      </ul>
      <ul className="nav-2">
        <li style={{ color: "grey" }}>Offers</li>
        <li className="nav-btn">Courses</li>
      </ul>
    </div>
  );
};

export default Navbar;
