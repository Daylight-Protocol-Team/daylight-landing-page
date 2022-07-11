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
          <div
            className="hero--left-title"
            data-aos="fade-up-down"
            data-aos-delay="200"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          >
            <u style={{ textDecorationThickness: "3px" }}>
              BUILT FOR SUSTAINABILITY
            </u>
            <br />
            DEFI 3.0 REDEFINED
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
            className="hero--left-description-a"
          >
            Daylight was created with the intention to stabilize the DeFi 3.0
            space by ascertaining measures in place to mitigate price
            manipulation, depreciating value and combat sustainability issues
            faced by other protocols in the space.
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
            className="hero--left-description-a"
          >
            Daylight Protocol is a decentralized income mechanism on Avalanche
            (AVAX) that rewards holders at a set APY of 160,589.28 percent that
            is sustainable and calculated with efficiency in parallel to RFV
            sustainability and survivability.
          </div>
          <Button
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          >
            Buy Now
          </Button>
          <Button
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
          >
            dApp Launching Soon
          </Button>
        </div>
        <div className="hero--right wave2 aic">
          <img
            data-aos="fade-up-left"
            data-aos-delay="400"
            data-aos-offset="-100"
            data-aos-easing="ease-in-out"
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
