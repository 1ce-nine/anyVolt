import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import anyvoltLogo from './assets/anyvolt_pic.webp';

function Header() {
  return (
    <header>
      <Container>
        <Row className="header-row align-items-center pb-5 pt-3">
          <Col xs={2}>
            <Link to="/">
              <img
                src={anyvoltLogo} 
                alt="Anyvolt Logo" 
                style={{width: '50%', height: 'auto'}}
              />
            </Link>
          </Col>

          <Col xs={6}>
            <Button as={Link} to="/about-us" className='button-transparent'>
              About Us
            </Button>
            <Button as={Link} to ="/services" className='button-transparent'>Services</Button>
            <Button as={Link} to ="/products" className='button-transparent'>Products</Button>
            <Button as={Link} to ="/investors" className='button-transparent'>Investors</Button>
            <Button as={Link} to ="/contact" className='button-transparent'>Contact</Button>
            <Button as={Link} to ="/news" className='button-transparent'>News</Button>
            <Button className='button-transparent'>Search</Button>
          </Col>

          <Col xs={4} className="d-flex justify-content-end header-buttons">
            <Button
              style={{
                backgroundColor: '#3f1e63',
                border: 'none',
                color: 'white',
                marginRight: '0.5rem',
              }}
            >
              Login
            </Button>
            <Button
              style={{
                backgroundColor: 'transparent',
                borderColor: 'white',
                color: 'white',
              }}
            >
              Sign up
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;