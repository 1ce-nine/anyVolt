import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

function AnyVoltSlogan() {
    return (
              <Row className="align-items-start header-row">
                <Col md={12}>
                    <p className="anyvolt-logo" style={{color: 'white', fontSize: '56px', fontWeight: '700', marginBottom: 0}}>AnyVolt</p>
                    <p className="anyvolt-logo" style={{color: 'white', fontSize: '18px', marginBottom: 0}}>Empowering Every Voltage,</p>
                    <p className="anyvolt-logo" style={{color: 'white', fontSize: '18px'}}>Every Innovation,</p>
                    <p style={{color: 'white',}}>
                      At AnyVolt Power, we’re redefining what’s possible in electric motor technology. 
                      Specializing in AI-driven, high-performance electric motors, we design and deliver 
                      innovative energy conversion solutions for industries where power, precision, and efficiency matter most.</p>
                </Col>
              </Row>
    )
}

export default AnyVoltSlogan