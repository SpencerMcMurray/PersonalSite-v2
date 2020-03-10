import { NextPage } from "next";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "../public/interfaces";

export interface NavProps {
  links: Array<Link>;
}

const Navigation: NextPage<NavProps> = ({ links }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Spencer McMurray</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map(link => {
            return (
              <Nav.Link key={link.id} href={link.link}>
                {link.title}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
