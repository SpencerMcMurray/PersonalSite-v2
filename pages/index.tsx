import { NextPage } from "next";
import Navigation from "../components/Navigation";
import { links } from "../public/constants";

const Index: NextPage = () => {
  return <Navigation links={links} />;
};

export default Index;
