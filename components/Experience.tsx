import { FunctionComponent, useContext } from "react";

import Layout from "./Layout";
import ExperienceDisplay from "./ExperienceDisplay";
import ThemeContext from "../components/ThemeContext";

import { Theme, getTheme } from "../public/helpers/theme";
import { experiences } from "../public/helpers/constants";

const Experience: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <Layout id="experience">
      <div className="row">
        <div className="col-12">
          <h2 className={theme.headers.title}>Experience</h2>
        </div>
      </div>
      <div className="pt-4 row">
        <div className="col-md-6">
          <p className={`${theme.headers.header} pb-2`}>
            Looks like you're interested, good to hear!
          </p>
          <p className={`${theme.headers.subHeader} py-3`}>
            I'm in my 3rd year studying Computer Science at the University of
            Toronto and I've had a love of building things all my life.
          </p>
          <p className={`${theme.headers.subHeader} py-3`}>
            Right now I'm on the hunt for Software Development/Engineering
            internships to expand my knowledge & prepare me for the outside
            world!
          </p>
        </div>
        <div className="col-md-6">
          <ExperienceDisplay exp={experiences} />
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
