import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import anyvoltLogo from '../assets/anyvolt_pic.webp';
import { useAuth } from '../AuthContext';
import ThemeToggle from '../theme/ThemeToggle';
import { useCart } from "../shopping_cart/CartContext";

function Header() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const { cart } = useCart();  // ✔ correctly reading cart

  function handleLogout() {
    logout();
    nav('/');
  }

  return (
    <header>
      <Container>
        <Row className="header-row align-items-center pb-5 pt-3">

          {/* LOGO */}
          <Col xs={2}>
            <Link to="/">
              <img
                src={anyvoltLogo}
                alt="Anyvolt Logo"
                style={{ width: '50%', height: 'auto' }}
              />
            </Link>
          </Col>

          {/* NAV BUTTONS */}
          <Col xs={7}>
            <Button as={Link} to="/about-us" className="button-transparent">About Us</Button>
            <Button as={Link} to="/services" className="button-transparent">Services</Button>
            <Button as={Link} to="/products" className="button-transparent">Products</Button>
            <Button as={Link} to="/investors" className="button-transparent">Investors</Button>
            <Button as={Link} to="/contact" className="button-transparent">Contact</Button>
            <Button as={Link} to="/news" className="button-transparent">News</Button>
          </Col>

          {/* USER + CART + THEME TOGGLE */}
          <Col xs={3} className="d-flex justify-content-end header-buttons" style={{ gap: '0.5rem' }}>

            {/* ALWAYS SHOW CART ICON */}
            <Link 
              to="/cart" 
              style={{ position: "relative", display: "inline-block", fontSize: "1.6rem", marginRight: "1rem" }}
            >
              🛒
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </Link>

            {/* SHOW LOGIN/LOGOUT CONDITIONALS */}
            {user ? (
              <>
                <span style={{ alignSelf: 'center', color: 'white' }}>
                  Hi, <strong>{user.username || user.email}</strong>
                </span>
                <Button
                  variant="outline-light"
                  className="purple-style-button"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" className="purple-style-button">
                  Login
                </Button>

                <Button
                  as={Link}
                  to="/signup"
                  className="button-transparent"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white'
                  }}
                >
                  Sign up
                </Button>
              </>
            )}

            {/* THEME TOGGLE */}
            <ThemeToggle />

          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
