import React from "react";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Card4 from "../assets/Card4.png";
import ThreeDot from "../assets/ThreeDot.svg";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

const Fourthcomp = () => {
  return (
    <div className="fourthcomp">
      <h4 className="common-card-heading">Our Destinations</h4>
      <div className="card-container">
        <div className="card">
          <img className="card-main-img" src={Card1} alt="Card" />
          <h4 className="card-heading">Harvard University</h4>
          <div className="card-para-threedot">
            <p className="card-para">Cambridge, Massachusetts, UK</p>
            <div className="card-threedot-container">
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card-main-img" src={Card2} alt="Card" />
          <h4 className="card-heading">Oxford University</h4>
          <div className="card-para-threedot">
            <p className="card-para">Oxford, England</p>
            <div className="card-threedot-container">
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card-main-img" src={Card3} alt="Card" />
          <h4 className="card-heading">Stanford University</h4>
          <div className="card-para-threedot">
            <p className="card-para">Stanford, California</p>
            <div className="card-threedot-container">
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card-main-img-4" src={Card4} alt="Card" />
          <h4 className="card-heading">Nanyang Technological</h4>
          <div className="card-para-threedot">
            <p className="card-para">Nanyang Ave, Singapura</p>
            <div className="card-threedot-container">
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
              <img className="card-threedot" src={ThreeDot} alt="ThreeDot" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "500px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
        className="left-right-arrow"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            display: "flex",
            width: "12%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img className="left-arrow" src={LeftArrow} />
          <h5 className="arrow-number-1">2</h5>
          <p className="arrow-number-2">/ 140</p>
          <img className="right-arrow" src={RightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Fourthcomp;
