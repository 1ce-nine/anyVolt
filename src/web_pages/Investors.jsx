{/* */}
{/* Import necessary libraries, components etc */}
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import AnyVoltSlogan from "/src/components/AnyVoltSlogan";
import axialFluxMotor from "/src/assets/axial_flux_motor_img.png";
import innerRotorMotor from "/src/assets/inner_rotor_motor_img.png";
import outerRotorMotor from "/src/assets/outer_rotor_motor_img.png";
import aiDrivenFeature from "/src/assets/ai_driven_feature_img.png";
import Breadcrumbs from "../components/Breadcrumbs";




function Investors() {
  return (
    <>
      <title>Investors</title>
        <Header />
        <main>
          <Container>
          <Breadcrumbs labels={{ "investors": "Investors" }} />
            <AnyVoltSlogan />

            {/* Placeholder links to potential data points and information for potential investors. */}
            <Row className="pt-5">
              <Col className="text-center">
              <Button as={Link}to="/investors/datasheets" variant="primary" type="submit" className="purple-style-button" style={{marginTop: -5}}>              
                Data Sheets
              </Button>
              </Col>

              <Col className="text-center">
              <Button as={Link}to= "/investors/investmentsummaries" variant="primary" type="submit" className="purple-style-button" style={{marginTop: -5}}>              
                Investment Summaries
              </Button>
              </Col>

              <Col className="text-center">
              <Button as={Link}to="/investors/brochure" variant="primary" type="submit" className="purple-style-button" style={{marginTop: -5}}>              
                Brochure
              </Button>
              </Col>
            </Row>

            {/* Row by row, lists the different motor types and information about them to potential investors. */}
            <Row className="pt-5">
              <Col md={6}>
                  <h2 className="anyvolt-logo button-transparent" style={{color: 'white', fontSize: '30px'}}>Axial-Flux Motor</h2>   
                  <div className="button-transparent" style={{color: 'white',}}>
                    <p>
                      Explanation:  The motor consists of one stationary stator and one rotating rotor. <br />
                      Applications: Used in automotive applications, wind turbines, and aerospace where compact and high-torque designs are needed.
                    </p>
                    <p>
                      Advantages:
                      <ul>
                        <li>High power density in a compact form.</li>
                        <li>Reduced weight compared to radial flux motors.</li>
                      </ul>  
                    </p>

                    <p>
                      Disadvantages:
                      <ul>
                        <li>Higher cost due to complex manufacturing.</li>
                        <li>Requires precise balancing for stable operation.</li>
                      </ul> 
                    </p> 
                  </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                  <img src={axialFluxMotor} alt="Axial Flux Motor Image" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
              </Col>
            </Row>       

            <Row className="pt-5">
              <Col md={6} className="d-flex justify-content-center">
                  <img src={innerRotorMotor} alt="Inner Rotor Motor Image" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
              </Col>
              <Col md={6}>
                  <h2 className="anyvolt-logo button-transparent" style={{color: 'white', fontSize: '30px'}}>Inner Rotor Motor</h2>   
                  <div className="button-transparent" style={{color: 'white',}}>
                    <p>
                      Explanation: The rotor is inside the stator, with magnets rotating within a stationary winding. <br />
                      Applications: Drones, robotics, EVs, and industrial automation.
                    </p>
                    <p>
                      Advantages:
                      <ul>
                        <li>High torque density, better cooling, and efficient high-speed performance.</li>
                      </ul>  
                    </p>

                    <p>
                      Disadvantages:
                      <ul>
                        <li>Higher vibrations and precise manufacturing requirements.</li>
                      </ul> 
                    </p> 
                  </div>              
              </Col>
            </Row>        

            <Row className="pt-5">
              <Col md={6}>
                  <h2 className="anyvolt-logo button-transparent" style={{color: 'white', fontSize: '30px'}}>Outer Rotor Motor</h2>   
                  <div className="button-transparent" style={{color: 'white',}}>
                    <p>
                      Explanation:  The rotor is external, surrounding the stator, offering increased rotational inertia. <br />
                      Applications: Electric bikes, cooling fans, conveyor belts, and drones.
                    </p>
                    <p>
                      Advantages:
                      <ul>
                        <li>High torque, compact size, and smooth operation.</li>
                      </ul>  
                    </p>

                    <p>
                      Disadvantages:
                      <ul>
                        <li>More complex heat dissipation and lower efficiency at high speeds.</li>
                      </ul> 
                    </p> 
                  </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                  <img src={outerRotorMotor} alt="Outer Rotor Motor Image" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
              </Col>
            </Row>       

            <Row className="pt-5">
              <Col md={6} className="d-flex justify-content-center">
                  <img src={aiDrivenFeature} alt="Ai Driven Feature Image" className="img-fluid rounded-5" style={{ height: 'auto'}}/>
              </Col>
              <Col md={6}>
                  <h2 className="anyvolt-logo button-transparent" style={{color: 'white', fontSize: '30px'}}>AI-Driven Feature</h2>   
                  <div className="button-transparent" style={{color: 'white',}}>
                    <p>
                      Explanation: AI-driven servo controllers adapt motor performance based on real-time conditions, optimizing efficiency and precision. <br />
                      Applications: Used in robotics, CNC machines, automation, and medical devices.
                    </p>
                    <p>
                      Future: AI will enhance predictive maintenance, reduce energy consumption, and enable self-learning motion control.
                    </p> 
                  </div>              
              </Col>
            </Row>                                           

          </Container>
          <Footer />
        </main>
    </>
  );
}

export default Investors;