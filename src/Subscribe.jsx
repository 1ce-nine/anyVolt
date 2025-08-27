import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

function Subscribe() {
    return(
        <Container className="text-center my-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h2 className='anyvolt-logo subscribe-heading'>Subscribe</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="subscribeEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <hr className="white-line" />
                        <Button variant="primary" type="submit" className="subscribe-button">
                        Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Subscribe;
