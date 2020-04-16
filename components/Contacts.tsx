import { FunctionComponent, useContext } from "react";

import ThemeContext from "../components/ThemeContext";
import Layout from "./Layout";

import { Theme, getTheme } from "../public/helpers/theme";
import { contacts } from "../public/helpers/constants";

const Contacts: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <Layout id="contact" height="0" className="pb-4">
      <div className="row text-center">
        {contacts.map((contact) => {
          return (
            <div key={contact.id} className="col-3">
              <a href={contact.href}>
                <i className={`link-icon ${contact.title} ${theme.txt}`} />
              </a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Contacts;
