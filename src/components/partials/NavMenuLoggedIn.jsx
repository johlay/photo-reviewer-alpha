import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavMenuLoggedIn = ({ currentUser, logout }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout().then(() => {
      // If sign-out is successful, then re-direct user to route path: "/"
      navigate("/");
    });
  };

  return (
    <>
      <Navbar.Text className="me-3 text-light">
        Signed in as: {currentUser?.displayName}
      </Navbar.Text>
      <NavDropdown
        title={<FontAwesomeIcon icon={faUser} size="1x" color="white" />}
        id="nav-dropdown"
      >
        <Link className="dropdown-item" to="/photo-albums">
          My photo albums
        </Link>
        <NavDropdown.Divider />
        <span
          aria-label="nav-menu-logout-user"
          className="dropdown-item"
          style={{ cursor: "pointer" }}
          onClick={handleLogOut}
        >
          Log out
        </span>
      </NavDropdown>
    </>
  );
};

export default NavMenuLoggedIn;
