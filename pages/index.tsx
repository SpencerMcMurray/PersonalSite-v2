import React from "react";
import { NextPage } from "next";

import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";

import { links } from "../public/helpers/constants";
import { Project } from "../public/helpers/interfaces";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

interface IndexProps {
  projects: Array<Project>;
  langs: Array<string>;
}

const Index: NextPage<IndexProps> = () => {
  return (
    <React.Fragment>
      <Navigation links={links} />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </React.Fragment>
  );
};

export default Index;
