import React from "react";
import "./style.css";
import Icon from "../../components/Icon";
import icon1 from "../..//assets//img//icons/stone1.svg";
import icon2 from "../..//assets//img//icons/stone2.svg";
import icon3 from "../..//assets//img//icons/stone3.svg";
import icon4 from "../..//assets//img//icons/stone4.svg";
import icon5 from "../..//assets//img//icons/stone5.svg";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-container2">
        <Icon imgSrc={icon1} classname="features--top" />
        <div className="features--title">Features</div>
        <div className="features--cards">
          <FeatureCard
            img={icon2}
            title="$Daylight Token"
            description="Echelon’s most optimized auto-staking and auto-compounding protocol with an APY of 54,768%. Interest rewards are compounded every 30 minutes for every ECH wallet holding any $ECHO tokens."
          />
          <FeatureCard
            img={icon3}
            title="Auto-Compound"
            description="Echelon’s most optimized auto-staking and auto-compounding protocol with an APY of 54,768%. Interest rewards are compounded every 30 minutes for every ECH wallet holding any $ECHO tokens."
          />
          <FeatureCard
            img={icon4}
            title="Shield"
            description="Echelon’s most optimized auto-staking and auto-compounding protocol with an APY of 54,768%. Interest rewards are compounded every 30 minutes for every ECH wallet holding any $ECHO tokens."
          />
          <FeatureCard
            img={icon5}
            title="Dynamic Taxes"
            description="Echelon’s most optimized auto-staking and auto-compounding protocol with an APY of 54,768%. Interest rewards are compounded every 30 minutes for every ECH wallet holding any $ECHO tokens."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
