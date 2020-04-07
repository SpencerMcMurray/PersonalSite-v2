import React, { useContext } from "react";
import { NextPage } from "next";
import { links } from "../public/helpers/constants";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Navigation links={links} />
      <About />
      <Experience />
    </React.Fragment>
  );
};

export default Index;
