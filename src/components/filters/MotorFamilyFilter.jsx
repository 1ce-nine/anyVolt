// src/components/filters/MotorFamilyFilter.jsx - CORRECTED ALIGNMENT

import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// List of motor family options
const MOTOR_OPTIONS = [
    { value: '', label: 'All Motor Families' },
    { value: 'AC', label: 'AC' },
    { value: 'DC_PM', label: 'DC PM' },
    { value: 'PM_FREE', label: 'PM Free' },
];

export default function MotorFamilyFilter({ value, onChange }) {
    return (
        // Use mb-3 and align-items-center to match Price/Voltage filters
        <Row className="mb-3 align-items-center" controlId="formMotorFamily">
            
            {/* 1. Label Column: Col md={3} to match Price/Voltage labels */}
            <Col md={4}> 
                <Form.Label>Motor Family:</Form.Label>
            </Col>
            
            {/* 2. Input Column 1: Col md={4} to match Min Price/Min Voltage */}
            <Col md={8}>
                <Form.Select 
                    name="motorFamily"
                    value={value} 
                    onChange={onChange}
                    aria-label="Select Motor Family"
                >
                    {MOTOR_OPTIONS.map((option) => (
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