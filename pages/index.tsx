import React from "react";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";

import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";

import { links } from "../public/helpers/constants";
import { Project } from "../public/helpers/interfaces";

interface IndexProps {
  projects: Array<Project>;
  langs: Array<string>;
}

const Index: NextPage<IndexProps> = ({ projects, langs }) => {
  console.log(projects, langs);
  return (
    <React.Fragment>
      <Navigation links={links} />
      <About />
      <Experience />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "/api/projects");
  return { props: { ...data } };
};

export default Index;
