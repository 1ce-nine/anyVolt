import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

function Subscribe() {
    return(
        <Container className="text-center my-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h2 className='anyvolt-logo subscribe-heading button-transparent' style={{marginBottom: 5}}>Subscribe</h2>
                    <Form>
                        <Form.Group className="mb-1 subscribe-colour-placeholder" controlId="subscribeEmail">
                            <Form.Control className="text-center subscribe-color-placeholder" type="email" placeholder="Email"  style={{backgroundColor: 'transparent'}}/>
                        </Form.Group>
                        <hr className="white-line" style={{marginTop: 0}} />
                        <Button variant="primary" type="submit" className="purple-style-button" style={{marginTop: -5}}>              
                        Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Subscribe;
