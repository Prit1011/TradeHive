import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Awords from "./Awords";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
     <Hero />
       <Awords />
      <Stats />
      <Pricing />
     <Education />
       <OpenAccount />
    </>
  );
}

export default HomePage;