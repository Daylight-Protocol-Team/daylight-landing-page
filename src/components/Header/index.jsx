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
        <div
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        >
          Our Vision
        </div>
        <div
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        >
          Features
        </div>
        <div
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        >
          Tokenomics
        </div>
        <div
          className="header--link hover-effect"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-offset="-100"
          data-aos-easing="ease-in-out"
        >
          Blog
        </div>
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
    </nav>
  );
};

export default Header;
