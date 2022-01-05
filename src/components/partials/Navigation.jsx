import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavMenuNotLoggedIn from "./NavMenuNotLoggedIn";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <h1 className="h2">Photo Reviewer Alpha</h1>
        </Link>

        <Navbar.Toggle aria-controls="logged-in-navbar-nav" />
        <Navbar.Collapse id="logged-in-navbar-nav">
          <Nav className="ms-auto">
            <NavMenuNotLoggedIn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
