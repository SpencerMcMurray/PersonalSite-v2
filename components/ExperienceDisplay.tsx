import { FunctionComponent, Fragment, useContext } from "react";

import ThemeContext from "../components/ThemeContext";

import { Experience } from "../public/helpers/interfaces";
import { Theme, getTheme } from "../public/helpers/theme";

interface ExpItemProps {
  oneXp: Experience;
  theme: Theme;
}

const ExperienceItem: FunctionComponent<ExpItemProps> = ({ oneXp, theme }) => {
  return (
    <div className={theme.bgInv + " row mx-1 my-3"}>
      <small className="col-6">
        <a className={theme.txtInv} href={oneXp.company.link}>
          {oneXp.company.name}
        </a>
      </small>
      <small className={theme.txtInv + " col-6 text-right"}>
        {oneXp.start} - {oneXp.end}
      </small>
      <h5 className={theme.txtInv + " col-12 mt-1 mb-0"}>{oneXp.title}</h5>
      <div className="col-12">
        {oneXp.keyLearnings.map((learning, idx) => {
          return (
            <span key={learning} className={theme.txtInv}>
              {learning}
              {idx === oneXp.keyLearnings.length - 1 ? null : " / "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

interface ExpDisplayProps {
  exp: Array<Experience>;
}

const ExperienceDisplay: FunctionComponent<ExpDisplayProps> = ({ exp }) => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <div className={theme.bgInv + " border rounded"}>
      {exp.map((oneXp, idx) => {
        return (
          <Fragment key={oneXp.start}>
            <ExperienceItem oneXp={oneXp} theme={theme} />
            {idx === exp.length - 1 ? null : <hr className="my-0" />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ExperienceDisplay;
