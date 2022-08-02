import React, { memo } from "react";
import Icon from "../Icon";
import "./style.css";

const FeatureCard = (props) => {
  const { img, title, description, cardv2 } = props;
  return (
    <div className="featurecard-container-inner" {...props}>
      <Icon
        imgsrc={img}
        classnamestyle="featurecard--top aic "
        extraStyle={cardv2 ? { marginTop: "0px " } : {}}
      />
      <div className="featurecard--title">{title}</div>
      <div className="featurecard--description">{description}</div>
    </div>
  );
};

export default memo(FeatureCard);
