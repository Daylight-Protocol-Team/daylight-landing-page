import React from "react";
//
import "./style.css";
//
import LogoBrand from "../../assets/img/brand/logo.svg";
import discordIcon from "../../assets/img/socials/discord.svg";
import telegramIcon from "../../assets/img/socials/telegram.svg";
import twitterIcon from "../../assets/img/socials/twitter.svg";
import Icon from "../Icon";
//

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header--brand">
        <img src={LogoBrand} alt="daylight protocol brand" />
      </div>
      <div className="header--links">
        <div className="header--link">Our Vision</div>
        <div className="header--link">Features</div>
        <div className="header--link">Tokenomics</div>
      </div>

      <div className="header--social">
        <Icon
          imgSrc={discordIcon}
          link="#"
          classname="header--social-icon aic"
        />
        <Icon
          imgSrc={telegramIcon}
          link="#"
          classname="header--social-icon aic"
        />
        <Icon
          imgSrc={twitterIcon}
          link="#"
          classname="header--social-icon aic"
        />
      </div>
    </nav>
  );
};

export default Header;
