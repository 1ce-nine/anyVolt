import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AppContent() {
  return (
    <>
      <title>Anyvolt</title>
        <Container>
          <Row className="align-items-center header-row">
            <Col xs={4}>
              <h1 className="header-title" style={{color: 'white'}}>Anyvolt</h1>
            </Col>

            <Col xs={6} className="d-flex justify-content-end header buttons">
              <Button style={{
                  backgroundColor: '#3f1e63',
                  border: 'none',
                  color: 'white',
                  marginRight: '0.5rem',
                }}>Login</Button>

              <Button style={{
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  color: 'white',}}
                >Sign up</Button>            
            </Col>

          </Row>
        </Container>
        <p>
          <Link to="/about-us">About us!</Link>
        </p>
    </>
  );
}

export default AppContent;