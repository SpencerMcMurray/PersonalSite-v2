import { FunctionComponent, Fragment } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Theme } from "../public/helpers/theme";

const ProjectsFilter: FunctionComponent<{
  langs: Array<string>;
  theme: Theme;
  selLang: string | null;
  setSelLang: any;
}> = ({ langs, theme, selLang, setSelLang }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap">
      <h3 className={`${theme.txtInv}`}>Filter by language</h3>

      <DropdownButton id="proj-filter-dropdown" title="Select Language">
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
