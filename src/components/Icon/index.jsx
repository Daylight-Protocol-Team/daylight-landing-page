import React from "react";
import "./style.css";
const Icon = (props) => {
  const { imgsrc, link, classnamestyle, extraStyle } = props;
  return (
    <a className={classnamestyle} href={link} style={extraStyle}>
      <img
        {...props}
        className="icon--img"
        src={imgsrc}
        alt="icon-alt"
        draggable="false"
      />
    </a>
  );
};

export default Icon;
