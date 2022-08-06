import React from "react";
import "./style.css";
import { HashLink } from "react-router-hash-link";
//
import LogoBrand from "../../assets/img/brand/logo.svg";
import mediumIcon from "../../assets/img/socials/medium.svg";
import discordIcon from "../../assets/img/socials/discord.svg";
import telegramIcon from "../../assets/img/socials/telegram.svg";
import twitterIcon from "../../assets/img/socials/twitter.svg";
import Icon from "../Icon";
const Footer = () => {
  return (
    <div className="footer-container aic">
      <div className="footer--socials aic">
        <Icon
          imgsrc={mediumIcon}
          link="https://medium.com/@DaylightProtocol"
          classnamestyle="footer--social aic hover-effect"
        />
        <Icon
          imgsrc={discordIcon}
          link="https://discord.com/invite/wSagPDSfh3"
          classnamestyle="footer--social aic hover-effect"
        />
        <Icon
          imgsrc={telegramIcon}
          link="https://t.me/Daylightprotocol"
          classnamestyle="footer--social aic hover-effect"
        />
        <Icon
          imgsrc={twitterIcon}
          link="https://twitter.com/DaylightDeFi"
          classnamestyle="footer--social aic hover-effect"
        />
      </div>
      <div className="footer--bottom aic">
        <div className="footer--bottom-links aic ">
          <HashLink
            smooth={true}
            to="#ourvision"
            className="hover-effect footer--bottom-link"
          >
            Our Vision
          </HashLink>
          <div className="footer--bottom-div" />
          <HashLink
            smooth={true}
            to="#mechanics"
            className="hover-effect footer--bottom-link"
          >
            Mechanics
          </HashLink>
          <div className="footer--bottom-div" />
          <HashLink
            smooth={true}
            to="#tokenomics"
            className="hover-effect footer--bottom-link"
          >
            Tokenomics
          </HashLink>
        </div>

        <Icon
          imgsrc={LogoBrand}
          classnamestyle="footer--bottom-brand aic hover-effect"
        />
        <div className="footer--bottom-text">
          © {new Date().getFullYear()} Daylight Capital, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
