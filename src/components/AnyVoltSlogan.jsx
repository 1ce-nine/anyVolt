import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

function AnyVoltSlogan() {
    return (
              <Row className="align-items-start header-row">
                <Col md={12}>
                    <p className="anyvolt-logo" style={{color: 'white', fontSize: '64px', fontWeight: '700', marginBottom: 0}}>AnyVolt</p>
                    <p className="anyvolt-logo home-paragraph" style={{marginBottom: 0}}>Empowering Every Voltage,</p>
                    <p className="anyvolt-logo home-paragraph">Every Innovation,</p>
                </Col>
              </Row>
    )
}

export default AnyVoltSlogan