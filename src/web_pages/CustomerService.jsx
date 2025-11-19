{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";


function CustomerService() {
  return (
    <>
      <title>Customer Service</title>
        <Header />
        <main>  
          <Container>
          <Breadcrumbs labels={{ "customerservice": "Customer Service" }} />       
            <h1 className="page-heading anyvolt-logo button-transparent" style={{fontSize: '50px'}}>Customer Service</h1>
            <Row className="mt-5">
              <Col md={10} style={{color: 'white'}}>
                {/* Placeholder */}
                <h3 className="button-transparent">
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
export default CustomerService;