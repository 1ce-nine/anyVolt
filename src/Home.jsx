import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeImage from './assets/img_1.webp';

function Home() {
    return (
        <>
            <main>
                <Container>
                    <Row className="align-items-center header-row">
                        <Col md={6}>
                            <p className="anyvolt-logo" style={{color: 'white', fontSize: '64px', fontWeight: '700', marginBottom: 0}}>AnyVolt</p>
                            <p className="anyvolt-logo" style={{color: 'white', fontSize: '24px', marginBottom: 0}}>Empowering Every Voltage,</p>
                            <p className="anyvolt-logo" style={{color: 'white', fontSize: '24px'}}>Every Innovation,</p>
                            <p style={{color: 'white', fontSize: '12'}}>Enter text about company here</p>
                        </Col>
                        <Col md={6}>
                            <img src={homeImage} alt="Anyvolt Engine Image" className="img-fluid" style={{ height: 'auto'}}/>
                        </Col>
                    </Row>
                </Container>     
            </main>
        </>
    );
}

export default Home;