import { FunctionComponent } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "../public/helpers/interfaces";
import { ThemeContextInterface } from "./ThemeContext";
import { getTheme, Theme } from "../public/helpers/theme";

interface NavProps {
  links: Array<Link>;
  themeCtx: ThemeContextInterface;
}

const Navigation: FunctionComponent<NavProps> = ({ links, themeCtx }) => {
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <Navbar fixed="top" className={"shadow " + theme.bg} expand="lg">
      <Navbar.Brand className={theme.txt} href="#">
        Spencer McMurray
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map(link => {
            return (
              <Nav.Link key={link.id} className={theme.txt} href={link.href}>
                {link.title}
              </Nav.Link>
            );
          })}
          <Nav.Link onClick={themeCtx.flipLights}>
            <h5>{themeCtx.isDark ? "🌞" : "🌚"}</h5>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
