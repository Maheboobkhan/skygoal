import React from "react";
import Ellipse46 from "../assets/Ellipse46.svg";
import Ellipse48 from "../assets/Ellipse48.svg";
import Ellipse49 from "../assets/Ellipse49.svg";
import Ellipse47 from "../assets/Ellipse47.svg";
import Subtract from "../assets/Subtract.svg";
import Subtract2 from "../assets/Subtract2.svg";
import SecondCompImg from "../assets/secondcomp.png";

const SecondComp = () => {
  return (
    <div className="secondcomp-container">
      <div className="secondcomp-container-1">
        <img src={Ellipse46} />
        <p className="secondcomp-para-1">Discover the beauty of the tropics</p>
        <h1 className="secondcomp-typography-1">Tropical Destinations</h1>
        <h1 className="secondcomp-student-1">For Students</h1>
        <p className="secondcomp-lorem-para-1">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
        <img className="secondcomp-container-1-img" src={Subtract2} />
        <button className="secondcomp-btn-1">SIGN UP</button>
        <img className="secondcomp-container-2-img" src={Ellipse47} />
      </div>
      <div className="secondcomp-container-2">
        <img className="container-2-1" src={Ellipse48} />
        <div className="secondcomp-container-2-1">
          <img className="secondcomp-container-2-1-1-img" src={Ellipse49} />
          <img className="secondcomp-container-2-1-2-img" src={SecondCompImg} />
        </div>
        <img className="secondcomp-container-2-1-3-img" src={Subtract} />
      </div>
    </div>
  );
};

export default SecondComp;
