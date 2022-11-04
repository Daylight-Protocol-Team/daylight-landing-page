import React from "react";
import Icon from "../../components/Icon";
import "./style.css";
import icon1 from "../../assets/img/icons/stoneB.svg";
import icon6 from "../../assets/img/icons/stone6.svg";
import icon7 from "../../assets/img/icons/stone7.svg";
import robotArm from "../../assets/img/icons/robotArm.svg";
import security from "../../assets/img/icons/security.svg";
import Button from "../../components/Button";
import Card from "./Card";

const whydaylight = () => {
  return (
    <div className="whydaylight-container aic" id="whydaylight">
      <div className="whydaylight--left aic">
        <Icon
          imgsrc={icon1}
          classnamestyle="whydaylight--left-img aic"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        />
        <div
          className="whydaylight--left-title"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          Why Daylight
        </div>
        <div
          className="whydaylight--left-description"
          data-aos="fade-up-down"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          Project Daylight's innovative $DAYL token is the first ever true wealth generation cryptocurrency that enables token holders to accumulate rewards over time while ensuring an EVER APPRECIATING GUARANTEED FLOOR PRICE to support long term sustainability and a protocol that operates via decentralization in perpetuity.
        </div>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://presale.daylightprotocol.com"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            style={{ width: "100%" }}
            data-aos="fade-up-down"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
          >
            Pledge for the Public PreSale
          </Button>
        </a>
      </div>
      <div className="whydaylight--right aic">
        <Card
          img={icon6}
          title="Deep Liquidity"
          desc="To boost token liquidity and lower price volatility, swaps with dynamic fees are included. The sustainability of our rewards and mission is significantly increased as a result."
        />
        <Card
          img={icon7}
          title="Ever Appreciating Floor Price"
          desc="Daylight utilizes its very own collateralized asset backing to drive floor price and increase the value of $DAYL. Daylight's floor price is 100% collateralized by $BUSD, giving it a minimum floor value that appreciates in value as a result of transactional volume."
        />
        <Card
          img={robotArm}
          title="Ecosystem Evolution"
          desc="Daylight Protocol is DeFi's first ever true wealth generation ecosystem with incentivized extensions that has been strategically created to disrupt decentralized earning and propel freedom of financial limitations, while rewarding users for contributions to the ecosystem with an appreciated earning over time."
        />
        <Card
          img={security}
          title="Deflationary Mechanisms"
          desc="Daylight Protocol has implemented certain transaction fees to ensure minimum dump impact and also to contribute towards further ecosystem extension while sustaining price and protocol survivability. This is purely to uphold on liquidity, permanent floor value and also to enhance deflation in order to provide sustainable funds to continue ignition on further development and extension."
        />
      </div>
    </div>
  );
};

export default whydaylight;
