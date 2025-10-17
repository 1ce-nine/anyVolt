{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import AnyVoltSlogan from '/src/components/AnyVoltSlogan';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutUsImage1 from '/src/assets/about-us-img-1.png';
import aboutUsImage2 from '/src/assets/about-us-img-2.png';
import Subscribe from '/src/components/Subscribe';



function AboutUs() {
  return (
    <>
      <title>About Us</title>
        <Header />
          <main>
            <Container>
              <AnyVoltSlogan />   
              
              {/* Our title row */}
              <Row>
                <p style={{color: 'white',}}>
                  At AnyVolt Power, we’re redefining what’s possible in electric motor technology. 
                  Specializing in AI-driven, high-performance electric motors, we design and deliver 
                  innovative energy conversion solutions for industries where power, precision, and efficiency matter most.
                </p>
              </Row>

              {/* Our Mission row */}
              <Row className="pt-5">
                <Col md={6}>
                  <div>
                    <h2 className="anyvolt-logo" style={{color: 'white', fontSize: '30px'}}>Our Mission</h2>
                    <p style={{color: 'white',}}>To deliver innovative, reliable, and versatile energy 
                      conversion solutions tailored to a wide range of industries, 
                      specializing in high-performance AI-driven electric motors.
                    </p>
                    <p style={{color: 'white',}}>
                      Our expertise in motor design allows us to create solutions tailored to specific needs, including power, efficiency, size, and integration requirements. We provide end-to-end development from concept to final prototype. 
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <img src={aboutUsImage1} alt="About Us Image 1" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
                </Col>
              </Row>

              {/* Our Vision row */}
              <Row className="pt-5">
                <Col md={4}>
                  <img src={aboutUsImage2} alt="About Us Image 2" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
                </Col>
                <Col md={8}>
                  <div>
                    <h2 className="anyvolt-logo" style={{color: 'white', fontSize: '30px'}}>Our Vision</h2>
                    <p style={{color: 'white',}}> To be the leading provider of cutting-edge electric motor design, setting new standards in efficiency, precision, and sustainability.
                      Core Services:
                      <ul>
                        <li>Custom high-power electric motor design and development</li>
                        <li>AI-powered predictive maintenance and real-time optimization</li>
                        <li>Electromagnetic simulation and analysis</li>
                        <li>Energy efficiency optimization</li>
                        <li>Advanced materials & manufacturing</li>                                                
                      </ul>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>      
            <Subscribe />         
          </main>
        <Footer />
    </>
  );
}

export default AboutUs;