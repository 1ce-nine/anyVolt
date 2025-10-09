import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import anyvoltLogo from './assets/anyvolt_pic.webp';
import { useAuth } from './AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();        // clears JWT + context
    nav('/');        // send them home
  }

  return (
    <header>
      <Container>
        <Row className="header-row align-items-center pb-5 pt-3">
          <Col xs={2}>
            <Link to="/">
              <img
                src={anyvoltLogo}
                alt="Anyvolt Logo"
                style={{ width: '50%', height: 'auto' }}
              />
            </Link>
          </Col>

          <Col xs={7}>
            <Button as={Link} to="/about-us" className="button-transparent">About Us</Button>
            <Button as={Link} to="/services" className="button-transparent">Services</Button>
            <Button as={Link} to="/products" className="button-transparent">Products</Button>
            <Button as={Link} to="/investors" className="button-transparent">Investors</Button>
            <Button as={Link} to="/contact" className="button-transparent">Contact</Button>
            <Button as={Link} to="/news" className="button-transparent">News</Button>
          </Col>

          <Col xs={3} className="d-flex justify-content-end header-buttons" style={{ gap: '0.5rem' }}>
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
                {/* FIX: route should be /login, not /loginpage */}
                <Button as={Link} to="/login" className="purple-style-button">
                  Login
                </Button>
                <Button
                  as={Link}
                  to="/signup"    // make sure you added this route + page
                  style={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}
                >
                  Sign up
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
