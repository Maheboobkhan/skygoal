import React from "react";
import Sixthgroup from "../assets/Sixthgroup.png";
import Subtract6 from "../assets/Subtract6.svg";
import Dec from "../assets/dec.svg";
import Inc from "../assets/inc.svg";

const SixthComp = () => {
  return (
    <div className="sixthcomp">
      <div className="sixthcomp-1">
        <img src={Sixthgroup} className="sixthcomp-1-img1" />
        <img src={Subtract6} className="sixthcomp-1-img2" />
        <div className="sixthcomp-1-rect"></div>
      </div>

      <div className="sixthcomp-2">
        <h4 className="sixthcomp-2-heading">Book now</h4>
        <p className="sixthcomp-2-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="sixthcomp-2-form">
          <label className="sixthcomp-2-form-label">CITY</label>
          <input
            className="sixthcomp-2-form-input1"
            placeholder="Placeholder"
          />
          <div className="input12-container">
            <div className="sixthcomp-2-form-input1-container">
              <label className="sixthcomp-2-form-label">ARRIVAL</label>
              <input
                className="sixthcomp-2-form-input2"
                placeholder="10 October"
              />
            </div>
            <div className="sixthcomp-2-form-input2-container">
              <label className="sixthcomp-2-form-label">DEPARTURE</label>
              <input
                className="sixthcomp-2-form-input2"
                placeholder="11 October"
              />
            </div>
          </div>

          <div className="star-room-container">
            <div className="star">
              <label className="sixthcomp-2-form-label">STAR</label>
              <div className="dec-num-inc">
                <img src={Dec} className="dec" />
                <p className="num">4</p>
                <img src={Inc} className="inc" />
              </div>
            </div>
            <div className="room">
              <label className="sixthcomp-2-form-label">ROOM</label>
              <div className="dec-num-inc">
                <img src={Dec} className="dec" />
                <p className="num">1</p>
                <img src={Inc} className="inc" />
              </div>
            </div>
          </div>
        </div>
        <button className="sixthcomp-book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default SixthComp;
