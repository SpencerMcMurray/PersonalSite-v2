import { FunctionComponent, useContext } from "react";
import { Theme, getTheme } from "../public/helpers/theme";
import ThemeContext from "../components/ThemeContext";

interface ProjectProps {
  projects: Array<any>;
}

const Projects: FunctionComponent<ProjectProps> = ({ projects }) => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);
  console.log(projects);

  return (
    <div id="projects" style={{ minHeight: "75vh" }} className={theme.bg}>
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="w-100">
          <div className="row">
            <div className="col-12">
              <h2 className={theme.headers.title}>Projects</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
