// src/components/filters/MotorTypeFilter.jsx

import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// List of motor type options - UPDATED WITH ALL YOUR NEW VALUES
const MOTORTYPE_OPTIONS = [
    { value: '', label: 'All Motor Types' },
    { value: 'Asynchronous', label: 'Asynchronous' },
    { value: 'Synchronous', label: 'Synchronous' },
    { value: 'Single Phase', label: 'Single Phase' },
    { value: 'Three Phase', label: 'Three Phase' },
    { value: 'Line-Start PM', label: 'Line-Start PM' },
    { value: 'Brushless with AC controller', label: 'Brushless with AC controller' },
    { value: 'Brushed', label: 'Brushed' },
    { value: 'Brushless', label: 'Brushless' },
    { value: 'Shunt', label: 'Shunt' },
    { value: 'Series', label: 'Series' },
    { value: 'Cylindrical', label: 'Cylindrical' },
    { value: 'Axial-Flux', label: 'Axial-Flux' },
    { value: 'Reluctance', label: 'Reluctance' },
    { value: 'Switched Reluctance', label: 'Switched Reluctance' },
];

/**
 * MotorType Filter Dropdown
 * This component uses the standard React Form Event logic (e.g., e.target.name)
 * to ensure it works seamlessly with the FilterPanel's handleFilterChange.
 */
export default function MotorTypeFilter({ value, onChange }) {
    return (
        // Use the md={3}, md={4}, md={4} grid pattern for perfect alignment
        <Row className="mb-3 align-items-center" controlId="formMotorType">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}> 
                <Form.Label>Motor Type:</Form.Label>
            </Col>
            
            {/* Input Column 1: Col md={4} */}
            <Col md={8}>
                <Form.Select 
                    // CRITICAL: Name matches the state key in FilterPanel ('motorType')
                    name="motorType" 
                    
                    value={value} 
                    // Pass the entire event object back to the parent
                    onChange={onChange}
                    
                    aria-label="Select Motor Type"
                >
                    {MOTORTYPE_OPTIONS.map((option) => (
                        <option 
                            key={option.value} 
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </Form.Select>
            </Col>
            
            {/* Input Column 2: Empty Col md={4} for consistent layout spacing */}
            <Col md={4}>
                {/* Intentionally blank */}
            </Col>

        </Row>
    );
}