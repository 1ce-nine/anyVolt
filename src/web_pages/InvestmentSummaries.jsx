{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";

function InvestmentSummaries() {
  return (
    <>
      <title>Investment Summaries</title>
        <Header />
        <main>  
          <Container>
            <h1 className="page-heading anyvolt-logo " style={{fontSize: '50px'}}>Investment Summaries</h1>
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
export default InvestmentSummaries;