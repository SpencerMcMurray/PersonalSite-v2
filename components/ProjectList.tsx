import { FunctionComponent } from "react";
import { Theme } from "../public/helpers/theme";
import { Project } from "../public/helpers/interfaces";
import { Card, CardColumns } from "react-bootstrap";

interface ProjCardProps {
  project: Project;
  theme: Theme;
}

const ProjectCard: FunctionComponent<ProjCardProps> = ({ project, theme }) => {
  return (
    <Card bg={theme.variantInv}>
      <Card.Header>
        <h4>
          <a href={project.link} className={theme.txt}>
            {project.name}
          </a>
        </h4>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-3 row">
          <div className="pl-3 col-1-sm">
            <i className={"fas fa-star " + theme.txt} />{" "}
            <span className={theme.txt}>{project.stars}</span>
          </div>
          <div className="col-1-sm">
            <i className={"fas fa-code-branch pl-2 " + theme.txt} />{" "}
            <span className={theme.txt}>{project.forks}</span>
          </div>
        </Card.Subtitle>
        <Card.Text className={theme.txt}>{project.desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {project.langs.map((lang) => {
          return <span className={theme.txt}>{lang + ", "}</span>;
        })}
      </Card.Footer>
    </Card>
  );
};

interface ProjListProps {
  projects: Array<Project>;
  theme: Theme;
}

const ProjectList: FunctionComponent<ProjListProps> = ({ projects, theme }) => {
  return (
    <div className="pt-2 d-flex justify-content-center flex-wrap">
      <CardColumns>
        {projects.map((proj) => {
          return <ProjectCard key={proj.id} project={proj} theme={theme} />;
        })}
      </CardColumns>
    </div>
  );
};

export default ProjectList;
