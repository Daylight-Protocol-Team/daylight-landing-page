import React from "react";
import "./style.css";
const Icon = ({ imgSrc, link, classname }) => {
  return (
    <a className={classname} href={link}>
      <img
        className="icon--img"
        src={imgSrc}
        alt="icon-alt"
        draggable="false"
        loading="lazy"
      />
    </a>
  );
};

export default Icon;
