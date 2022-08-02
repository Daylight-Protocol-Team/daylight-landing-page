import React from "react";
import Icon from "../../components/Icon";
import "./style.css";
import icon1 from "../../assets/img/icons/stone1.svg";
import icon6 from "../../assets/img/icons/stone6.svg";
import icon7 from "../../assets/img/icons/stone7.svg";
import robotArm from "../../assets/img/icons/robotArm.svg";
import security from "../../assets/img/icons/security.svg";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container aic">
      <div className="tokenomics--left aic">
        <Icon
          imgsrc={icon1}
          classnamestyle="tokenomics--left-img aic"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        />
        <div
          className="tokenomics--left-title"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          Tokenomics
        </div>
        <div
          className="tokenomics--left-description"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          $DAYLIGHT is an elastic supply token that runs on the Avalanche chain
          and rewards holders through conventional, sustained positive rebases,
          with an APY of 160,589.28%. Interest rewards are compounded every 30
          minutes for every web3 wallet holding any $DAYLIGHT tokens.
        </div>
        <Button
          style={{ width: "100%" }}
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
        >
          Buy Now
        </Button>
      </div>
      <div className="tokenomics--right aic">
        <div className="tokenomics--right-section aic">
          <FeatureCard
            style={{ height: "100%", padding: "32px" }}
            cardv2
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            img={robotArm}
            title="Liquidity First"
            description="To boost token liquidity and lower price volatility, swaps with dynamic fees are included. The sustainability of our rewards and mission is significantly increased as a result."
          />
          <FeatureCard
            style={{ height: "100%", padding: "32px" }}
            cardv2
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            img={icon6}
            title="Treasury"
            description="The Treasury contract is a simple vault implementation holding all the funds collected by the protocol. If for instance a user purchases a token amount, the token amount swapped is fully taken in by the treasury and converted to stable-coin into the Treasury. New tokens will be minted based on the RFV of the treasury assets.
              "
          />
        </div>
        <div className="tokenomics--right-section aic">
          <FeatureCard
            style={{ height: "100%", padding: "32px" }}
            cardv2
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            img={security}
            title="Risk Free Value"
            description="Risk Free Value – is a standalone vault that collects funds to support and stabilize the Liquidity pool. This is particularly utilized in the event of a sharp sell-off that might drain the Daylight liquidity pool. The RFV provides a liquidity reserve and prevents this from happening during a sharp sell-off.
            "
          />
          <FeatureCard
            style={{ height: "100%", padding: "32px" }}
            cardv2
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            img={icon7}
            title="Ecosystem Evolution"
            description="Daylight Protocol is a decentralized auto-staking ecosystem with incentivized extensions that has been strategically created to disrupt decentralized earning and propel freedom of financial limitations, while rewarding users for contributions to the ecosystem with an appreciated earning over time. "
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
