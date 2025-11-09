import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// List of cooling options
const COOLING_OPTIONS = [
    { value: '', label: 'All Cooling Types' },
    { value: 'Fan', label: 'Fan' },
    { value: 'Water', label: 'Water' },
    { value: 'Liquid', label: 'Liquid' },    
   

];

/**
 * Cooling Filter Dropdown
 * This component uses the standard React Form Event logic (e.g., e.target.name)
 * to ensure it works seamlessly with the FilterPanel's handleFilterChange.
 */
export default function CoolingFilter({ value, onChange }) {
    return (
        // Use the md={3}, md={4}, md={4} grid pattern for perfect alignment
        <Row className="mb-3 align-items-center" controlId="cooling">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}> 
                <Form.Label>Cooling:</Form.Label>
            </Col>
            
            {/* Input Column 1: Col md={4} */}
            <Col md={8}>
                <Form.Select 
                    // CRITICAL: Name matches the state key in FilterPanel ('wireConnection')
                    name="cooling" 
                    
                    value={value} 
                    // Pass the entire event object back to the parent
                    onChange={onChange}
                    
                    aria-label="Select Cooling"
                >
                    {COOLING_OPTIONS.map((option) => (
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