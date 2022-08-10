import React from "react";
import "./style.css";
import Icon from "..//../Icon";
import arrowBack from "../../..//assets/img/icons/arrowBack.svg";
import LogoBrand from "../../..//assets/img/brand/logo.svg";
import MediumIcon from "../../../assets/img/socials/medium.svg";
import TelegramIcon from "../../../assets/img/socials/telegram.svg";
import DiscordIcon from "../../../assets/img/socials/discord.svg";
import TwitterIcon from "../../../assets/img/socials/twitter.svg";
import { HashLink } from "react-router-hash-link";
import tabIcon from "../../../assets/img/icons/tab.svg";

const Menu = ({ isOpen, close }) => {
  return (
    <div
      className={
        isOpen ? "menu-container-open aic" : "menu-container-close aic"
      }
    >
      <div className="menu--close" onClick={() => close()}>
        <Icon
          imgsrc={arrowBack}
          classnamestyle="menu--close-icon aic hover-effect"
        />
      </div>
      <Icon imgsrc={LogoBrand} classnamestyle="menu--" />

      <div className="menu--links aic">
        <HashLink
          onClick={() => close()}
          smooth={true}
          to="#ourvision"
          className="hover-effect menu--links-link"
        >
          Our Vision
        </HashLink>
        <div className="menu--links-link aic menu--link-options">
          Products
          <img
            className="menu--link-tab aic"
            src={tabIcon}
            alt="icon-alt"
            draggable="false"
          />
          <div className="menu--link-options-list aic">
            <div className="menu--link-options-list-option-disable ">
              Project Apollo
            </div>
            <div className="menu--link-options-list-option-disable ">
              Phoenicis Roulette
            </div>
            <div className="menu--link-options-list-option-disable ">
              Casa Daylight
            </div>
            <div className="menu--link-options-list-option-disable ">
              Project Orion
            </div>
          </div>
        </div>
        <div className="menu--links-link aic menu--link-options">
          Mechanics
          <img
            className="menu--link-tab aic"
            src={tabIcon}
            alt="icon-alt"
            draggable="false"
          />
          <div className="menu--link-options-list aic">
            <HashLink
              onClick={() => close()}
              smooth={true}
              to="#whydaylight"
              className="menu--links-link hover-effect-c"
            >
              Why Daylight
            </HashLink>
            <div className="menu--link-options-list-option-disable ">
              Roadmap
            </div>
            <div className="menu--link-options-list-option-disable ">
              Tokenomics
            </div>
          </div>
        </div>
        <div className="hover-effect menu--links-link">Documentation</div>
        <a
          href="https://presale.daylightprotocol.com"
          className="hover-effect menu--links-link"
        >
          Pre-Sale
        </a>
      </div>
      <div className="menu--bottom aic">
        <div className="menu--socials aic">
          <Icon
            imgsrc={MediumIcon}
            link="https://medium.com/@DaylightProtocol"
            classnamestyle="menu--socials-social aic hover-effect"
          />
          <Icon
            imgsrc={TelegramIcon}
            link="https://t.me/Daylightprotocol"
            classnamestyle="menu--socials-social aic hover-effect"
          />
          <Icon
            imgsrc={DiscordIcon}
            link="https://discord.com/invite/wSagPDSfh3"
            classnamestyle="menu--socials-social aic hover-effect"
          />
          <Icon
            imgsrc={TwitterIcon}
            link="https://twitter.com/DaylightDeFi"
            classnamestyle="menu--socials-social aic hover-effect"
          />
        </div>
        <div className="menu--copyright">
          Daylight Protocol Copyright 2022. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Menu;
