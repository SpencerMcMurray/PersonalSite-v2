import { FunctionComponent, useContext, useState, useEffect } from "react";
import { Spinner, Button } from "react-bootstrap";
import useSWR from "swr";

import ProjectsFilter from "./ProjectsFilter";
import ProjectList from "./ProjectList";
import ThemeContext from "./ThemeContext";

import { Theme, getTheme } from "../public/helpers/theme";
import { Project } from "../public/helpers/interfaces";

const Projects: FunctionComponent<{}> = () => {
  const [selLang, setSelLang] = useState<string | null>(null);
  const [projects, setProjects] = useState([]);

  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  const { data, error } = useSWR("/api/projects");
  if (error) console.log(error);

  useEffect(() => {
    if (data) setProjects(data.projects);
  }, [data]);

  useEffect(() => {
    if (data) {
      if (!selLang) setProjects(data.projects);
      else
        setProjects(
          data.projects.filter((proj: Project) => proj.langs.includes(selLang))
        );
    }
  }, [selLang]);

  return (
    <div
      id="projects"
      style={{ minHeight: "75vh", paddingTop: "100px" }}
      className={`pb-4 ${theme.bg}`}
    >
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="w-100">
          <div className="row">
            <div className="col-12">
              <h2 className={theme.headers.title}>Projects</h2>
            </div>
          </div>
          <div className="pt-4 row" style={{ minHeight: "25vh" }}>
            <div
              className={`w-100 d-flex justify-content-center align-items-center border rounded ${theme.border} ${theme.bgInv}`}
            >
              {!data ? (
                <Spinner animation="border" variant={theme.variantInv} />
              ) : (
                <div className="m-4 w-100">
                  <ProjectsFilter
                    langs={data.langs}
                    theme={theme}
                    selLang={selLang}
                    setSelLang={setSelLang}
                  />
                  <ProjectList projects={projects} theme={theme} />
                  <div className="pt-4 col-12 text-center">
                    <Button
                      variant="warning"
                      href="https://github.com/SpencerMcMurray"
                    >
                      (git) checkout more!
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <small className={theme.txt}>
              Projects fetched from{" "}
              <a href="https://github.com/SpencerMcMurray">my GitHub</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
