import { FunctionComponent, useContext } from "react";
import { Theme, getTheme } from "../public/helpers/theme";
import ThemeContext from "../components/ThemeContext";
import { experiences } from "../public/helpers/constants";

import ExperienceDisplay from "./ExperienceDisplay";

const Experience: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <div id="experience" style={{ minHeight: "75vh" }} className={theme.bg}>
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="w-100">
          <div className="row">
            <div className="col-12">
              <h2 className={theme.headers.title}>Experience</h2>
            </div>
          </div>
          <div className="pt-4 row">
            <div className="col-md-6">
              <p className={theme.headers.header}>
                Looks like you're interested, good to hear!
              </p>
              <p className={theme.headers.subHeader}>
                I'm in my 3rd year studying Computer Science at the University
                of Toronto and I've had a love of building things all my life.
              </p>
              <p className={theme.headers.subHeader}>
                Right now I'm on the hunt for Software Development/Engineering
                internships to expand my knowledge & prepare me for the outside
                world!
              </p>
            </div>
            <div className="col-md-6">
              <ExperienceDisplay exp={experiences} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;