import { FunctionComponent, useContext } from "react";
import { Theme, getTheme } from "../public/helpers/theme";
import ThemeContext from "../components/ThemeContext";

const About: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <div
      id="about"
      style={{ height: "100vh", paddingTop: "75px" }}
      className={theme.bg}
    >
      <div className="h-75 d-flex justify-content-center align-items-center container">
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
      </div>
    </div>
  );
};

export default About;
