import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./style.css";
import mountainBG from "../../assets/img/backgrounds/hero-mountain.svg";
import mountainSingleBG from "../../assets/img/backgrounds/hero-mountain-single.svg";
import mountainFenixBG from "../../assets/img/backgrounds/hero-mountain-fenix.svg";

const HeroSection = ({ offsetY }) => {
  return (
    <div className="hero--shell aic">
      <div
        className="hero--background"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
        }}
      >
        <img
          className="icon--imgbg"
          src={mountainBG}
          alt="brand animation"
          draggable="false"
        />
      </div>
      <div
        className="hero--single"
        style={{
          transform: `translateY(-${offsetY * 0.3}px)`,
          transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
        }}
      >
        <img
          className="icon--imgbg"
          src={mountainSingleBG}
          alt="brand animation"
          draggable="false"
        />
      </div>
      <div
        className="hero--fenix"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
        }}
      >
        <img
          className="icon--imgbg"
          src={mountainFenixBG}
          alt="brand animation"
          draggable="false"
        />
      </div>
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
              <div className="not-underline">DEFI 3.0 REDEFINED</div>
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
              (AVAX) that rewards holders at a set APY of 160,589.28 percent
              that is sustainable and calculated with efficiency in parallel to
              RFV sustainability and survivability.
            </div>
            <div className="hero--left-buttons">
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
          </div>
          <div className="hero--right  aic"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
