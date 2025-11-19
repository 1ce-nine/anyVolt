{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

function Brochure() {
  return (
    <>
      <title>Brochure</title>
        <Header />
        <main>  
          <Container>
          <Breadcrumbs labels={{ "contact": "About Us" }} />
            <h1 className="page-heading anyvolt-logo button-transparent" style={{fontSize: '50px'}}>Brochure</h1>

          <Row className="mt-5">
            <Col md={10} style={{ color: "white" }}>
              <h3 className="button-transparent">Coming soon...</h3>

              {/* ✔ Download button */}
              <a
                href="/sample-brochure.pdf"
                download
                className="btn btn-primary purple-style-button"
                style={{ marginTop: "15px", display: "inline-block" }}
              >
                Download Sample PDF
              </a>
            </Col>
          </Row>
          </Container>
        </main>
        <Footer />

    </>
  );
}
export default Brochure;