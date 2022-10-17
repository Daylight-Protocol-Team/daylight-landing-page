import React, { useRef, useCallback } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import Icon from "../../components/Icon";
import icon1 from "../../assets/img/icons/stoneE.svg";

import leftArrow from "../../assets/img/icons/leftArrow.svg";
import rightArrow from "../../assets/img/icons/rightArrow.svg";
import FeatureCard from "../../components/FeatureCard";

import tokencard from "../..//assets/animations//Daylight-Token-Card.json";
import compound from "../..//assets/animations//Auto-Compound-Card.json";
import dynamic from "../..//assets/animations//Dynamic-Card.json";
import rfv from "../..//assets/animations//RFV-Card.json";
import diamond from "../..//assets/animations//Diamonds-Card.json";
const Features = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="features-container aic" id="mechanics">
      <Icon imgsrc={icon1} classnamestyle="features-icon" />
      <div
        className="features--title"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        Sustainability and Longevity Driven
      </div>
      <div className="aic">
        <div
          data-aos="fade-up-down"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once={true}
          className="aic hover-effect"
          onClick={() => handlePrev()}
        >
          <Icon imgsrc={leftArrow} classnamestyle="features--arrow aic" />
        </div>
        <div
          data-aos="fade-up-down"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          data-aos-once={true}
          className="aic hover-effect"
          onClick={() => handleNext()}
        >
          <Icon imgsrc={rightArrow} classnamestyle="features--arrow aic" />
        </div>
      </div>
      <Swiper
        ref={sliderRef}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={true}
        className="features--cards"
        breakpoints={{
          850: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 4,
          },
          1650: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            title="Daylight Token"
            lottie={tokencard}
            description="Project Daylight's Daylight Token is the world's first ever true wealth generation token that sustains an ever appreciating floor value by utilizing transaction finality and ecosystem utilities. "
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            lottie={compound}
            title="Staking and Farming Rewards"
            description="Token holders can stake $DAYL or LP-Tokens in order to accumulate greater rewards over time, enabling the protocol to continue to reproduce lucrative wealth generation to holders. "
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            lottie={rfv}
            title="Extreme Sustainability"
            description="Our protocol utilizes fractional liquidity as well as redeemable assets which act as collaterals for the floor price. This ensures that even in the event of shallow liquidity, holders would still be able to redeem the floor price value by employing a sell-burn to the token contract."
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            lottie={dynamic}
            title="Taxes to Raise Floor Price"
            description="The price floor appreciation procedure relies on Daylight token's purchase and sell taxes. They offer funds for important protocol operations as well as general sustainability and long-term ongoing growth."
          />
        </SwiperSlide>
        <SwiperSlide className="aic">
          <FeatureCard
            data-aos="fade-up-down"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
            // img={icon6}
            lottie={diamond}
            title="Daylight Vault"
            description="The Daylight Vault is a revenue reserve used to prolong development, feed floor price appreciation, buyback and burn the token, and to extend the ecosystem and invest in ideas for sustainability."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Features;
