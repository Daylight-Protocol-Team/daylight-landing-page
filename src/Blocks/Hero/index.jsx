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
            <u style={{ textDecorationThickness: "3px" }}>
              BUILT FOR SUSTAINABILITY
            </u>{" "}
            DEFI 3.0 REDEFINED
          </div>
          <div className="hero--left-description-a">
            Daylight was created with the intention to stabilize the DeFi 3.0
            space by ascertaining measures in place to mitigate price
            manipulation, depreciating value and combat sustainability issues
            faced by other protocols in the space.
          </div>
          <div className="hero--left-description-a">
            Daylight Protocol is a decentralized income mechanism on Avalanche
            (AVAX) that rewards holders at a set APY of 160,589.28 percent that
            is sustainable and calculated with efficiency in parallel to RFV
            sustainability and survivability.
          </div>
          <Button>Buy Now</Button>
          <Button>dApp Launching Soon</Button>
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
