{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import servicesPlaceholder from '/src/assets/services-placeholder-image.png';

function Services() {
  return (
    <>
      <title>Services</title>
        <Header />
        <main>  
          <Container>
            <h1 className="page-heading anyvolt-logo button-transparent" style={{fontSize: '50px'}}>Services</h1>
            <Row className="mt-5">

              {/* Service Image */}
              <Col md={2}>
                <img src={servicesPlaceholder} alt="services image" className="img-fluid me-3" style={{ height: 'auto'}}/>
              </Col>

              <Col md={10} style={{color: 'white'}}>

                {/* Service Title */}
                <h3 className="button-transparent">
                  Custom Product Form
                </h3>    

                {/* Service publish date */}
                <p className="button-transparent" style={{fontSize: '12px', color: 'blue', marginBottom: 0}}>
                  Published date  
                </p> 

                {/* Service Description */}   
                <div className="button-transparent" style={{fontSize: '14px', marginBottom: 0}}> 
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                {/* Provide link to ServiceCustomerForm so that the client can fill it out */}
                <Button as={Link}to="/servicecustomorder" variant="primary" type="submit" className="purple-style-button" style={{marginTop: -5}}>              
                  Click Here
                </Button>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />

    </>
  );
}

export default Services;