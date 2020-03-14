import React, { useContext } from "react";
import { NextPage } from "next";
import { links } from "../public/helpers/constants";
import { Theme, getTheme } from "../public/helpers/theme";

import ThemeContext from "../components/ThemeContext";
import Navigation from "../components/Navigation";
import About from "../components/About";

const Index: NextPage = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);
  return (
    <React.Fragment>
      <Navigation links={links} themeCtx={themeCtx} />
      <About theme={theme} />
    </React.Fragment>
  );
};

export default Index;
