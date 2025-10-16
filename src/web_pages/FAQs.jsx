import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";

function FAQs () {
    return (
        <>
            <title>FAQs</title>
                <Header />
                <title>FAQ</title>
                <main>
                    <Container>
                        <Row>
                            <Col>
                            <h1 className="page-heading anyvolt-logo " style={{fontSize: '50px'}}>FAQ</h1> 
                            <Accordion className="pb-1" defaultActiveKey={null}>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>FAQ Topic 1</Accordion.Header>
                                {/* Add the collapsible body area of the accordion */}
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>                                
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className="pb-1" defaultActiveKey={null}>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>FAQ Topic 2</Accordion.Header>
                                {/* Add the collapsible body area of the accordion */}
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>                                
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className="pb-1" defaultActiveKey={null}>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>FAQ Topic 3</Accordion.Header>
                                {/* Add the collapsible body area of the accordion */}
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>                                
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className="pb-1" defaultActiveKey={null}>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>FAQ Topic 4</Accordion.Header>
                                {/* Add the collapsible body area of the accordion */}
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>                                
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className="pb-1" defaultActiveKey={null}>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>FAQ Topic 5</Accordion.Header>
                                {/* Add the collapsible body area of the accordion */}
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>                                
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className="pb-1" defaultActiveKey={null}>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>FAQ Topic 6</Accordion.Header>
                                {/* Add the collapsible body area of the accordion */}
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>
                                <Accordion.Body>
                                    Sub Topic
                                </Accordion.Body>                                
                                </Accordion.Item>
                            </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer />
        </>
    );
}

export default FAQs