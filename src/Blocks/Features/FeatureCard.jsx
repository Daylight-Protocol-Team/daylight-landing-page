import React from "react";
import Icon from "../../components/Icon";

const FeatureCard = ({ img, title, description }) => {
  return (
    <div className="featurecard-container ">
      <div className="featurecard-container-inner ">
        <Icon imgSrc={img} classname="featurecard--top aic hover-effect" />
        <div className="featurecard--title">{title}</div>
        <div className="featurecard--description">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
