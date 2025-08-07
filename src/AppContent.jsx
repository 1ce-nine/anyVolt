import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function AppContent() {
  return (
    <>
      <title>Anyvolt</title>
        <Container>
          <Row>
            <Col>
              <h1>Anyvolt Placeholder Page</h1>
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