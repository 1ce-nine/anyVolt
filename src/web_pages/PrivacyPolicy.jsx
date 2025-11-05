{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <title>Privacy Policy</title>
        <Header />
        <main>  
          <Container>
            <h1 className="page-heading anyvolt-logo " style={{fontSize: '50px'}}>Privacy Policy</h1>
            <Row className="mt-5">
              <Col md={10} style={{color: 'white'}}>
                {/* Placeholder */}
                <h3>
                  Coming soon...
                </h3>    
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />

    </>
  );
}
export default PrivacyPolicy;