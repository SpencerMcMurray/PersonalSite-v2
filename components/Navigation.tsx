import { FunctionComponent } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "../public/helpers/interfaces";
import { ThemeContextInterface } from "./ThemeContext";

interface NavProps {
  links: Array<Link>;
  theme: ThemeContextInterface;
}

const Navigation: FunctionComponent<NavProps> = ({ links, theme }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Spencer McMurray</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map(link => {
            return (
              <Nav.Link key={link.id} href={link.href}>
                {link.title}
              </Nav.Link>
            );
          })}
          <Nav.Link onClick={theme.flipLights}>
            <h5>{theme.isDark ? "🌞" : "🌚"}</h5>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
