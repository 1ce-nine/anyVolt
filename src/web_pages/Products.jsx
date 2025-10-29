// src/web_pages/Products.jsx
import React, { useState, useEffect } from 'react'; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductLoader from "../ProductLoader"; 
import FilterPanel from "../components/filters/FilterPanel"; 
import { Container, Row, Col, Collapse, Button } from "react-bootstrap"; 
import { Filter } from 'react-bootstrap-icons'; 

export default function Products() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  // State to control filter panel visibility
  const [showFilters, setShowFilters] = useState(false);
  const handleToggleFilters = () => setShowFilters(!showFilters);

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="page-heading anyvolt-logo" style={{fontSize: "50px"}}>Products</h1>
            </Col>
          </Row>

          {/* 1. Main Row */}
          <Row className="mb-4 align-items-center"> 
            <Col md={3} xs={1}>
            </Col>
            {/* 1a. The Filter Button  */}
            <Col md={3} xs={2} className="p-0 pe-2"> 
                <Button 
                    variant="light" 
                    onClick={handleToggleFilters} 
                    aria-controls="filter-collapse-panel"
                    aria-expanded={showFilters}
                    style={{
                        // Smaller, compact size
                        width: '44px',
                        height: '44px',
                        padding: '0', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        // Styling
                        border: '1px solid #ddd',
                        borderRadius: '8px', 
                        backgroundColor: showFilters ? '#e9ecef' : 'white', 
                        color: '#333',
                    }}
                >
                    <Filter size={20} />
                </Button>
            </Col>
          </Row>           

            {/* 1b. ProductLoader (Search Input + Search Button) (Now on the RIGHT) */}
          <Row className="justify-content-center mb-4 align-items-center">
            <Col xs={9} sm={8} md={6} lg={5} className="p-0">
                {/* ProductLoader renders your main search input and button */}
                <ProductLoader />
            </Col>
          </Row>
          
          {/* 2. FilterPanel wrapped in Collapse */}
          <Row className="justify-content-center">
            <Col xs={10} md={8} lg={7}>
              <Collapse in={showFilters}>
                <div id="filter-collapse-panel" className="mt-4">
                  <FilterPanel /> 
                </div>
              </Collapse>
            </Col>
          </Row>
          
          {/* ... other components/rows ... */}
        </Container>
      </main>
      <Footer />
    </>
  );
}