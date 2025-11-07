{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";


function Contact() {
  return (
    <>
      <title>Contact</title>
        <Header />
        <main>
          <Container>
            <Row className="align-items-start header-row pt-5 ps-5">
              <Col md={12}>
                  <p className="anyvolt-logo button-transparent" style={{color: 'white', fontSize: '44px', fontWeight: '700', marginBottom: 0}}>Contact Us</p>
              </Col>
            </Row>

            <Row>
              <Col xs={10} sm={8} md={6} lg={5}>
                {/* Create form to capture details regarding inquiry. */}
                <div className="login-form"> 
                  <Form>
                    {/* Take first name */}
                    <Form.Group className="mb" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>

                    {/* Take surname */}
                    <Form.Group className="mb-3 pt-3" controlId="surname">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control type="text" placeholder="Enter surname" />
                    </Form.Group>

                    {/* Take email address */}
                    <Form.Group className="mb-3" controlId="emailAddress">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" placeholder="Enter email address" />
                    </Form.Group>

                    {/* Take message */}
                    <Form.Group className="mb-3 pb-2" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                    </Form.Group>

                    {/* Submit button for form. */}
                    <Button variant="dark" type="submit" className="w-100">Submit</Button>
                  </Form>
                </div>
              </Col>

              <Col className="ps-5 pt-5" style={{color: "white"}}>
                <div className="no-margin-paragraphs button-transparent" >
                  <p>Better yet, see us in person!</p>
                  <p>We love our customers, so feel free to visit</p>
                  <p>during normal business hours.</p>
                </div>

                <div className="pt-5 button-transparent"style={{fontWeight: '700'}}>
                  <p>AnyVolt Power</p>
                  <p>0452 648 994</p>
                </div>
                
                <div className="no-margin-paragraphs button-transparent">
                  <p style={{fontWeight: '700'}}>Hours</p>
                  <p>Mon</p>
                  <p>9:00 am - 5:00 pm</p>
                  <p>Tue</p>
                  <p>9:00 am - 5:00 pm</p>
                  <p>Wed</p>
                  <p>9:00 am - 5:00 pm</p>         
                  <p>Thu</p>
                  <p>9:00 am - 5:00 pm</p>
                  <p>Fri</p>
                  <p>9:00 am - 5:00 pm</p>      
                  <p>Sat</p>
                  <p>Closed</p>
                  <p>Sun</p>
                  <p>Closed</p>                                                                                                                                                                                           
                </div>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
    </>
  );
}

export default Contact;