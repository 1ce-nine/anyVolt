import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import anyvoltLogo from './assets/anyvolt_pic.webp';




function Footer() {
  return (
    <footer>
      <Link to="/">Back to Home</Link>
    </footer>
  )
}

function LogInPage() {
  return (
    <>
      <title>Log In</title>
        <Header />
        <main>
          <Container>
            <Row className='justify-content-center pt-5'>
              <Col xs={10} sm={8} md={6} lg={4}>
                <img
                  src={anyvoltLogo} 
                  alt="Anyvolt Logo" 
                  style={{width: '100%', height: 'auto'}}
                />
              </Col>
            </Row>
            <Row className='justify-content-center pt-3'>
              <Col xs={10} sm={8} md={6} lg={4}>
                <div className="login-form"> 
                  <Form>
                    <Form.Group className="mb" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 pt-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="******" />
                    </Form.Group>

                    <Button variant="dark" type="submit" className="w-100">Sign In</Button>
                    <div className="text-center mt-3">Forgot Password?</div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </main>

    </>
  );
}

export default LogInPage;