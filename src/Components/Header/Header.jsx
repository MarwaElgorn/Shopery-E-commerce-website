import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
import { ShopContext } from "../../Context/ShopContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(ShopContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };




  return (
   <div
  style={{
    position: "sticky",
    top: "0",
    zIndex: "1000",
    backgroundColor: "#fff",
  }}
>
      {/* Top location & login */}
      <Navbar bg="light" className="py-2">
        <Container className="d-flex justify-content-between">
          <div className="location" style={{ color: "#666666" }}>
            <FontAwesomeIcon icon={faLocationDot} /> Store Location:
            Lincoln-344, Illinois, Chicago, USA
          </div>
          <div className="log d-flex align-items-center">
            {user ? (
              <>
                <span className="me-3">Welcome, {user.name}</span>
                <Button variant="outline-danger" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-success" : "nav-link"
                  }
                >
                  Login
                </NavLink>
                <div
                  style={{
                    width: "1px",
                    height: "30px",
                    backgroundColor: "#ccc",
                    margin: "0 15px",
                  }}
                ></div>
                <NavLink
                  to="/createaccount"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-success" : "nav-link"
                  }
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </Container>
      </Navbar>

      {/* Search & icons */}
      <Navbar expand="lg" className="bg-body-light py-2">
        <Container fluid style={{ maxWidth: "80%" }} className="mx-auto">
          {/* Logo */}
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="/logo.svg"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{" "}
            Ecobazar
          </Navbar.Brand>

          {/* Search form */}
          <Form className="mx-auto" style={{ width: "500px" }}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button style={{ backgroundColor: "#00B207" }}>Search</Button>
            </InputGroup>
          </Form>

          {/* Icons section */}
          <div className="d-flex align-items-center">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "nav-link active text-success " : "nav-link "
              }
            >
              <FaRegHeart className="fs-2" />
            </NavLink>

            <div
              style={{
                width: "1px",
                height: "30px",
                backgroundColor: "#ccc",
                margin: "0 15px",
              }}
            ></div>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-success d-flex align-items-center "
                  : "nav-link d-flex align-items-center "
              }
            >
              {" "}
              <BsMinecartLoaded className="fs-2" />
              <div className="position-relative d-inline-block">
            <Badge
  bg="success"
  pill
  style={{ position: "absolute", top: "-25px", left: "-35px" }}
>
  {cartCount}
</Badge>

              </div>
              <div className="ms-2">
                <div>Shopping Cart</div>
                <div>$120</div>
              </div>
            </NavLink>
          </div>
        </Container>
      </Navbar>

      {/* Main navigation menu */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center">
          <Nav className="mx-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-success px-5 fs-5"
                  : "nav-link px-5 fs-5"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-success px-5 fs-5"
                  : "nav-link px-5 fs-5"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-success px-5 fs-5"
                  : "nav-link px-5 fs-5"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-success px-5 fs-5"
                  : "nav-link px-5 fs-5"
              }
            >
              Contact Us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
 </div>
  );
}
