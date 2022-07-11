import React from "react";
import Icon from "../../components/Icon";

const FeatureCard = (props) => {
  const { img, title, description } = props;
  return (
    <div className="featurecard-container" {...props}>
      <div className="featurecard-container-inner ">
        <Icon imgsrc={img} classnamestyle="featurecard--top aic hover-effect" />
        <div className="featurecard--title">{title}</div>
        <div className="featurecard--description">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
