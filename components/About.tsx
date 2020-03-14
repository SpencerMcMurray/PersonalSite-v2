import { FunctionComponent } from "react";
import { Theme } from "../public/helpers/theme";

interface AboutProps {
  theme: Theme;
}

const About: FunctionComponent<AboutProps> = ({ theme }) => {
  return (
    <div style={{ height: "100vh", paddingTop: "75px" }} className={theme.bg}>
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="row">
          <div className="col-12">
            <h2 className={theme.txt + " header"}>Hey there, my name is</h2>
          </div>
          <div className="col-12">
            <h1 className={theme.txt + " title"}>Spencer McMurray</h1>
          </div>
          <div className="pt-2 col-12">
            <h4 className={theme.txt + " sub-header"}>
              I love to make things work.
            </h4>
            <p className={theme.txt + " sub-header"}>
              Explore my site to find out more about me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
