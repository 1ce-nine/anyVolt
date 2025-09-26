import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import anyvoltLogo from './assets/anyvolt_pic.webp';

function Header() {
  return (
    <header>
      {/*The main container holding all the elements of the header*/}
      <Container>
        <Row className="header-row align-items-center pb-5 pt-3">
          <Col xs={2}>
            {/*This link "/" takes the user back to the home page by clickingthe image*/}    
            <Link to="/">
            {/* Display the image and provide alternative text in case it 
            doesn't render and style it to fit the header*/}
              <img
                src={anyvoltLogo} 
                alt="Anyvolt Logo" 
                style={{width: '50%', height: 'auto'}}
              />
            </Link>
          </Col>

          {/* Display the quick link buttons across the Header */}
          <Col xs={7}>
            <Button as={Link} to="/about-us" className='button-transparent'>About Us</Button>
            <Button as={Link} to ="/services" className='button-transparent'>Services</Button>
            <Button as={Link} to ="/products" className='button-transparent'>Products</Button>
            <Button as={Link} to ="/investors" className='button-transparent'>Investors</Button>
            <Button as={Link} to ="/contact" className='button-transparent'>Contact</Button>
            <Button as={Link} to ="/news" className='button-transparent'>News</Button>
          </Col>
          {/* Display the login and sign up buttons to the Header and provide inline styles*/}    
          <Col xs={3} className="d-flex justify-content-end header-buttons">
            <Button as={Link} to ="/loginpage" className="purple-style-button" style={{marginRight: '0.5rem'}}>
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