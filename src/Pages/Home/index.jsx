import React from "react";
import Body from "../../Blocks/Body";
import Hero from "../../Blocks/Hero";
import OurVision from "../../Blocks/OurVision";
import Features from "../../Blocks/Features";
// import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Body>
      <Hero />
      <OurVision />
      <Features />
      {/* <Footer /> */}
    </Body>
  );
};

export default Home;
