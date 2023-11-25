import React from "react";
import Ellipse53 from "../assets/Ellipse53.svg";
import Ellipse54 from "../assets/Ellipse54.svg";
import Ellipse55 from "../assets/Ellipse55.svg";
import Subtract4 from "../assets/Subtract4.svg";
import Subtract5 from "../assets/Subtract5.svg";
import Maskgroup from "../assets/Maskgroup.png";

const FifthComp = () => {
  return (
    <div className="fifthcomp">
      <div className="fifthcomp-1">
        <div className="fifthcomp-1-img-container">
          <img className="fifthcomp-1-img1" src={Ellipse53} />
          <img className="fifthcomp-1-img2" src={Subtract4} />
        </div>
        <div className="fifthcomp-1-content">
          <p className="fifthcomp-1-content-para">Get 20% off for student</p>
          <h3 className="fifthcomp-1-content-heading1">
            Student discounts available.
          </h3>
          <h4 className="fifthcomp-1-content-heading2">
            Get ready for some fun in the sun!
          </h4>
          <ul className="fifthcomp-1-content-lists">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitantt</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="fifthcomp-1-content-btn">Explore More</button>
          <img className="fifthcomp-1-content-Ellipse54" src={Ellipse54} />
        </div>
      </div>

      <div className="fifthcomp-2">
        <img className="fifthcomp-2-img1" src={Ellipse55} />
        <img className="fifthcomp-2-img2" src={Maskgroup} />
        <img src={Subtract5} className="fifthcomp-2-img3" />
      </div>
    </div>
  );
};

export default FifthComp;
