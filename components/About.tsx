import { FunctionComponent, useContext } from "react";

import ThemeContext from "./ThemeContext";
import Layout from "./Layout";

import { Theme, getTheme } from "../public/helpers/theme";

const About: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <Layout id="about" className="d-flex align-items-center">
      <div className="row">
        <div className="col-12">
          <h2 className={theme.headers.header}>Hey there, my name is</h2>
        </div>
        <div className="col-12">
          <h1 className={theme.headers.title}>Spencer McMurray</h1>
        </div>
        <div className="pt-2 col-12">
          <h4 className={theme.headers.subHeader}>
            I love to make things work.
          </h4>
          <p className={theme.headers.subHeader}>
            Explore my site to find out more about me!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
