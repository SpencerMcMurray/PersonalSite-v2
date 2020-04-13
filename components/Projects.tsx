import { FunctionComponent, useContext } from "react";
import useSWR from "swr";

import ThemeContext from "../components/ThemeContext";

import { Theme, getTheme } from "../public/helpers/theme";
import { Spinner } from "react-bootstrap";

const Projects: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  const { data: projects, error } = useSWR("/api/projects");
  if (error) console.log(error);

  return (
    <div id="projects" style={{ minHeight: "75vh" }} className={theme.bg}>
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="w-100">
          <div className="row">
            <div className="col-12">
              <h2 className={theme.headers.title}>Projects</h2>
            </div>
          </div>
          <div className="pt-4 row">
            {!projects ? (
              <Spinner animation="grow" variant={theme.variant} />
            ) : (
              <p>Loaded!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
