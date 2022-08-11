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
    <div className="footer--container aic">
      <div className="footer-top aic">
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">Our Vision</div>
          <div className="footer-top-list-option hover-effect">
            Help & Support
          </div>
        </div>
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">Products</div>
          <div className="footer-top-list-option hover-effect">
            Project Orion
          </div>
          <div className="footer-top-list-option hover-effect">
            Casa Daylight
          </div>
          <div className="footer-top-list-option hover-effect">
            Phoenicis Roulette
          </div>
          <div className="footer-top-list-option hover-effect">
            Project Apollo
          </div>
        </div>
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">Mehcanisms</div>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#whydaylight"
          >
            Why Daylight
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#roadmap"
          >
            Roadmap
          </HashLink>
          <HashLink
            className="footer-top-list-option hover-effect"
            smooth={true}
            to="#tokenomics"
          >
            Tokenomics
          </HashLink>
        </div>
        <div className="footer-top-list aic">
          <div className="footer-top-list-title">About</div>
          <div className="footer-top-list-option hover-effect">Documention</div>
          <a
            href="https://daylight-protocol.gitbook.io/litepaper/"
            target={"_blank"}
            rel="noreferrer"
            className="footer-top-list-option hover-effect"
          >
            Litepaper
          </a>
          <a
            href="https://presale.daylightprotocol.com"
            className="footer-top-list-option hover-effect"
          >
            Pre-Sale
          </a>
        </div>
        <div className="footer-top-sub aic">
          <div className="footer-top-sub-title">
            Subscribe to Daylight newsletter
          </div>
          <div className="footer-top-sub-option">
            Get the latest news and updates
          </div>
          <button type="button" className="footer-top-sub-button aic">
            Subscribe
          </button>
          <Icon
            imgsrc={LogoBrand}
            classnamestyle="footer-top-sub-img  aic hover-effect"
          />

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
        </div>
      </div>
      <div className="footer-bottom aic">
        © {new Date().getFullYear()} Daylight Capital, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
