import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function AppContent() {
  return (
    <>
      <title>Anyvolt</title>
        <Container>
          <Row >
            /* Centre the text */
            <Col className="text-center">
              <h1 style={{color: 'white'}}>Anyvolt</h1>
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