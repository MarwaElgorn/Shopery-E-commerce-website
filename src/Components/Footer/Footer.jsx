import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../Styles/Footer.css";

// استيراد FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const linkStyle = { textDecoration: "none", color: "#808080" };

  return (
    <footer>
      {/* Newsletter */}
      <div className="bg-light py-4 border-bottom">
        <Container className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="mb-2">
            <h6 className="mb-1 fw-bold" style={{ color: "#333333" }}>
              Subscribe our Newsletter
            </h6>
            <p style={{ color: "#808080" }}>
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="d-flex align-items-center ">
            <InputGroup className="me-3 mb-2">
              <Form.Control placeholder="Your email address" />
              <Button
                style={{ backgroundColor: "#00B207", borderColor: "#00B207" }}
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </Button>
            </InputGroup>
            <div className="social-icons d-flex">
              <FontAwesomeIcon icon={faFacebookF} className="me-2" />
              <FontAwesomeIcon icon={faTwitter} className="me-2" />
              <FontAwesomeIcon icon={faPinterestP} className="me-2" />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="bg-dark text-light pt-5 pb-4">
        <Container>
          <Row>
            {/* Logo + description */}
            <Col md={3} className="mb-4">
              <img className="p-2" src="/logo.svg" alt="Ecobazar Logo" />
              <h4 className="p-2 d-inline-block text-white">Ecobazar</h4>
              <p style={{ color: "#808080" }}>
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <p>
                <a href="mailto:Proxy@gmail.com" className="text-light">
                  (219) 555-0114 or Proxy@gmail.com
                </a>
              </p>
            </Col>

            {/* Columns */}
            <Col md={2} className="mb-4">
              <h6>My Account</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    to="/account"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/orders"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Order History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive
                        ? "text-success nav-link fw-bold"
                        : "nav-link fw-bold"
                    }
                  >
                    Shopping Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Wishlist
                  </NavLink>
                </li>
              </ul>
            </Col>

            <Col md={2} className="mb-4">
              <h6>Help</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    to="/contact"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faqs"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Faqs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Terms & Condition
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/privacy"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </Col>

            <Col md={2} className="mb-4">
              <h6>Proxy</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    to="/about"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/product"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/track-order"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Track Order
                  </NavLink>
                </li>
              </ul>
            </Col>

            <Col md={3} className="mb-4">
              <h6>Categories</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    to="/categories/fruit-vegetables"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Fruit & Vegetables
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories/meat-fish"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Meat & Fish
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories/bread-bakery"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Bread & Bakery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories/beauty-health"
                    style={linkStyle}
                    className={({ isActive }) =>
                      isActive ? "text-success nav-link" : "nav-link"
                    }
                  >
                    Beauty & Health
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Footer bottom */}
          <Row className="pt-3 mt-3 border-top border-secondary align-items-center">
            <Col md={6}>
              <p style={{ color: "#808080" }}>
                Ecobazar eCommerce © 2021. All Rights Reserved.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              {/* Payment icons */}
              <img
                src="/Method=ApplePay.svg"
                alt="Apple Pay"
                className="me-2"
              />
              {/* <img src="/Payment Method.svg" alt="VISA" className="me-2" /> */}
              <img src="/Discover.svg" alt="DISCOVER" className="me-2" />
              <img src="/Mastercard.svg" alt="Mastercard" className="me-2" />
              <img src="/Payment.svg" alt="Secure payment" className="me-2" />
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
