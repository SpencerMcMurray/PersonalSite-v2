import { useContext } from "react";
import { NextPage } from "next";
import { links } from "../public/helpers/constants";

import Navigation from "../components/Navigation";
import ThemeContext from "../components/ThemeContext";

const Index: NextPage = () => {
  const themeCtx = useContext(ThemeContext);
  return <Navigation links={links} theme={themeCtx} />;
};

export default Index;
