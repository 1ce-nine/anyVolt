{/* */}
{/* Import necessary libraries, components etc */}
// Products.jsx
import React, { useEffect } from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import ProductLoader from "../ProductLoader"; // ← bring in the search+results UI
import { Container, Row, Col } from "react-bootstrap";
// import SingleProductDisplay from "./SingleProductDisplay"; // optional

export default function Products() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="page-heading anyvolt-logo" style={{fontSize: '50px'}}>Products</h1>
            </Col>
            
          </Row>

        {/* Search + results (your search bar is inside here) */}
          <Row>
            <ProductLoader />
          </Row>
            
        {/* If you later want a standalone detail view, keep this on a /products/:slug route instead */}
        {/* <SingleProductDisplay /> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}
