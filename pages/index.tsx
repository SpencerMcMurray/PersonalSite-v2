import React from "react";
import { GetStaticProps, NextPage } from "next";
import getConfig from "next/config";
import axios from "axios";

import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";

import { links } from "../public/helpers/constants";

interface IndexProps {
  projects: Array<string>;
}

const Index: NextPage<IndexProps> = ({ projects }) => {
  return (
    <React.Fragment>
      <Navigation links={links} />
      <About />
      <Experience />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    publicRuntimeConfig: { baseUrl },
  } = getConfig();
  const { data: projects } = await axios.get(baseUrl + "/api/projects");
  return { props: { projects } };
};

export default Index;
