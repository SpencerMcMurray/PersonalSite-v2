import { FunctionComponent } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Theme } from "../public/helpers/theme";

interface ProjFilterProps {
  langs: Array<string>;
  theme: Theme;
  selLang: string | null;
  setSelLang: any;
}

const ProjectsFilter: FunctionComponent<ProjFilterProps> = ({
  langs,
  theme,
  selLang,
  setSelLang,
}) => {
  return (
    <div className="pt-2 d-flex justify-content-between flex-wrap">
      <h3 className={theme.txtInv}>Filter by language</h3>

      <DropdownButton
        id="proj-filter-dropdown"
        title="Select Language"
        variant="warning"
      >
        <Dropdown.Item onClick={() => setSelLang(null)}>Show All</Dropdown.Item>
        {langs.map((lang) => {
          return (
            <Dropdown.Item
              key={lang}
              onClick={() => setSelLang(selLang === lang ? null : lang)}
            >
              {lang}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default ProjectsFilter;
