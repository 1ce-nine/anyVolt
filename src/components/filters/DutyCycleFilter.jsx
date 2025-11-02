import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// List of duty cycle options
const DUTY_CYCLE_OPTIONS = [
    { value: '', label: 'All Duty Cycles' },
    { value: 'Continuous', label: 'Continuous' },
    { value: 'Intermittent S2', label: 'Intermittent S2' },
    { value: 'Intermittent S', label: 'Intermittent S' },
];

export default function DutyCycleFilter({ value, onChange }) {
    return (
        <Row className="mb-3 align-items-center" controlId="dutyCycle">
            
            {/* 1. Label Column: Col md={3} to match Price/Voltage labels */}
            <Col md={4}> 
                <Form.Label>Duty Cycle:</Form.Label>
            </Col>
            
            {/* 2. Input Column 1: Col md={4} to match Min Price/Min Voltage */}
            <Col md={8}>
                <Form.Select 
                    name="dutyCycle"
                    value={value} 
                    onChange={onChange}
                    aria-label="Select Duty Cycle"
                >
                    {DUTY_CYCLE_OPTIONS.map((option) => (
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