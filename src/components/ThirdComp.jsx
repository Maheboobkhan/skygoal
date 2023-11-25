import React from "react";
import third1 from "../assets/third1.png";
import third2 from "../assets/third2.png";
import third3 from "../assets/third3.png";
import Subtract3 from "../assets/Subtract3.svg";
import Ellipse46 from "../assets/Ellipse46.svg";

const ThirdComp = () => {
  return (
    <div className="thirdcomp">
      <div className="thirdcomp-1">
        <div className="thirdcomp-1-1">
          <img src={third1} className="thirdcomp-1-img" alt="avatar" />
          <div className="thirdcomp-1-head-para">
            <h5 className="thirdcomp-1-heading">Jenny Wilson</h5>
            <p className="thirdcomp-1-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>

        <div className="thirdcomp-1-1">
          <img src={third2} className="thirdcomp-1-img" alt="avatar" />
          <div className="thirdcomp-1-head-para">
            <h4 className="thirdcomp-1-heading">Jenny Wilson</h4>
            <p className="thirdcomp-1-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>

        <div className="thirdcomp-1-1">
          <img src={third3} className="thirdcomp-1-img" alt="avatar" />
          <div className="thirdcomp-1-head-para">
            <h5 className="thirdcomp-1-heading">Jenny Wilson</h5>
            <p className="thirdcomp-1-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
      </div>

      <div className="thirdcomp-2">
        <div className="thirdcomp-2-img-container">
          <img src={Ellipse46} alt="ellipse" className="thirdcomp-2-img1" />
          <img src={Subtract3} alt="subtract" className="thirdcomp-2-img2" />
        </div>
        <div className="thirdcomp-2-content">
          <h3 className="thirdcomp-2-heading-1">Tropical Adventure</h3>
          <h3 className="thirdcomp-2-heading-2">for Students.</h3>
          <p className="thirdcomp-2-para">
            Student Tropical Vacation: Relax and Recharge
          </p>
          <ul className="thirdcomp-2-lists">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="thirdcomp-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default ThirdComp;
