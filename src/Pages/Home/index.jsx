import React from "react";
import Body from "../../Blocks/Body";
import Hero from "../../Blocks/Hero";
import OurVision from "../../Blocks/OurVision";
import Features from "../../Blocks/Features";
import Tokenomics from "../../Blocks/Tokenomics";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Body>
      <Hero />
      <OurVision />
      <Features />
      <Tokenomics />
      <Footer />
    </Body>
  );
};

export default Home;
