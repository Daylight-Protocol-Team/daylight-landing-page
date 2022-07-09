import React from "react";
import "./style.css";
import Button from "../../components/Button";
import HeroImg from "../../assets/img/brand/ourVision.svg";
const OurVision = () => {
  return (
    <div className="ourvision-container">
      <div className="ourvision-container2">
        <div className="ourvision-container3">
          <div className="hero--left">
            <div className="hero--left-title">
              ENGINEERED TO LAST DESIGNED TO REWARD
            </div>
            <div className="hero--left-description-a">
              We at Echtano have measures in place to ensure sustainability and
              credibility for the benefit of our investors. Making this an ideal
              and safe long-term investment.
            </div>
            <div className="hero--left-description-a">
              Simply hold $DAYLIGHT and watch the tokens grow in your wallet,
              thanks to our unique Hold & Burn Algorithm.
            </div>
            <Button>Buy Now</Button>
          </div>
          <div className="hero--right wave2 aic">
            <img
              className="icon--img"
              src={HeroImg}
              alt="brand animation"
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
