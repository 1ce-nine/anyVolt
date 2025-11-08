import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// List of gearbox options
const GEARBOX_TYPE_OPTIONS = [
    { value: '', label: 'All Duty Cycles' },
    { value: 'Helical', label: 'Helical' },
    { value: 'Planetary', label: 'Planetary' },
    { value: 'Worm', label: 'Worm' },
];

export default function GearboxTypeFilter({ value, onChange }) {
    return (
        <Row className="mb-3 align-items-center" controlId="formGearboxType">
            <Col md={4}> 
                <Form.Label>Gearbox Type:</Form.Label>
            </Col>
            
            <Col md={8}>
                <Form.Select 
                    name="gearboxType"
                    value={value} 
                    onChange={onChange}
                    aria-label="Select Gearbox Type"
                >
                    {GEARBOX_TYPE_OPTIONS.map((option) => (
                        <option 
                            key={option.value} 
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </Form.Select>
            </Col>
        </Row>
    );
}