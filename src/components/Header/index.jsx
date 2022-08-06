import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

//
import "./style.css";
//
import LogoBrand from "../../assets/img/brand/logo.svg";
import discordIcon from "../../assets/img/socials/discord.svg";
import telegramIcon from "../../assets/img/socials/telegram.svg";
import twitterIcon from "../../assets/img/socials/twitter.svg";
import menuIcon from "../../assets/img/icons/menu.svg";

import Icon from "../Icon";
import Menu from ".//Menu";
//

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header-container">
      <div className="header--brand aic">
        <img src={LogoBrand} alt="daylight protocol brand" />
      </div>
      <div className="header--links">
        <HashLink
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
          smooth={true}
          to="#ourvision"
        >
          Our Vision
        </HashLink>
        <HashLink
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
          smooth={true}
          to="#mechanics"
        >
          Mechanics
        </HashLink>
        <HashLink
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
          smooth={true}
          to="#tokenomics"
        >
          Tokenomics
        </HashLink>
      </div>

      <div className="header--social">
        <Icon
          imgsrc={discordIcon}
          link="#"
          classnamestyle="header--social-icon aic hover-effect"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        />
        <Icon
          imgsrc={telegramIcon}
          link="https://t.me/Daylightprotocol"
          classnamestyle="header--social-icon aic hover-effect"
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        />
        <Icon
          imgsrc={twitterIcon}
          link="https://twitter.com/DaylightDeFi"
          classnamestyle="header--social-icon aic hover-effect"
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        />
      </div>
      <div className="header--mobile ">
        <button type="button" onClick={() => setIsOpen(() => true)}>
          <Icon
            imgsrc={menuIcon}
            classnamestyle="header--menu-icon hover-effect aic"
          />
        </button>
        <Menu isOpen={isOpen} close={() => setIsOpen(() => false)} />
      </div>
    </nav>
  );
};

export default Header;
