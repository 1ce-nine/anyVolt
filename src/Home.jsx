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
                        <Col xs={4}>
                            <p className="anyvolt-logo" style={{color: 'white', fontSize: '48px'}}>AnyVolt</p>
                        </Col>
                        <Col>
                            <img src={homeImage} alt="Anyvolt Engine Image" style={{width: '70%', height: 'auto'}}/>
                        </Col>
                    </Row>
                </Container>     
            </main>
        </>
    );
}

export default Home;