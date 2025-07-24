import React from "react";

import Hero from "./Hero";
import Team from "./Team";
// import Pricing from "./Pricing"; // <-- Add this if you have or will create a pricing component

function AboutPage() {
  return (
    <>
      <Hero />
      {/* <Pricing /> Insert your pricing content here */}
      <Team />
    </>
  );
}

export default AboutPage;
