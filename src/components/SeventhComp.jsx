import React from "react";
import SeventhAvatar1 from "../assets/SeventhAvatar1.svg";
import SeventhAvatar2 from "../assets/SeventhAvatar2.svg";
import SeventhAvatar3 from "../assets/SeventhAvatar3.svg";
import HorLine from "../assets/HorLine.svg";

const SeventhComp = () => {
  return (
    <div className="seventhcomp">
      <h2 className="seventhcomp-heading">Testimonials</h2>
      <div className="seventhcomp-card-container">
        <div className="seventhcomp-card">
          <img className="seventhcomp-avatar" src={SeventhAvatar1} />
          <p className="seventhcomp-para1">Corey Korsgaard</p>
          <img className="seventhcomp-line" src={HorLine} />
          <p className="seventhcomp-para2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="seventhcomp-card">
          <img className="seventhcomp-avatar" src={SeventhAvatar2} />
          <p className="seventhcomp-para1">Jakob Aminoff</p>
          <img className="seventhcomp-line" src={HorLine} />
          <p className="seventhcomp-para2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="seventhcomp-card">
          <img className="seventhcomp-avatar" src={SeventhAvatar3} />
          <p className="seventhcomp-para1">Carla Press</p>
          <img className="seventhcomp-line" src={HorLine} />
          <p className="seventhcomp-para2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeventhComp;
