import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./style.css";
import HeroImg from "../../assets/img/brand/heroImg.svg";

const HeroSection = () => {
  return (
    <div className="hero-container-header">
      <Header />
      <div className="hero-container">
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
  );
};

export default HeroSection;
