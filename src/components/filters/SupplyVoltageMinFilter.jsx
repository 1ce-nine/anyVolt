// src/components/filters/SupplyVoltageMinFilter.jsx - FINALIZED CODE

import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Supply Voltage Minimum Filter (V)
 * Uses a single number input and the simplified value/onChange props.
 * @param {object} props
 * @param {string} props.value - The current state value (filters.supplyVoltageMinV)
 * @param {function} props.onChange - The handler function (handleFilterChange)
 */
export default function SupplyVoltageMinFilter({ value, onChange }) {
    return (
        <Row className="mb-3 align-items-center">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}>
                <Form.Label>Min Supply Voltage (V):</Form.Label>
            </Col>
            
            {/* Input Column 1: supplyVoltageMinV (Number Field) - Col md={8} as requested */}
            <Col md={8}> 
                <Form.Control
                    type="number"
                    name="supplyVoltageMinV" // Matches state key
                    placeholder="Min Supply V"
                    
                    // CRITICAL: Ensure value is controlled (use || '' for number inputs)
                    value={value || ''} 
                    
                    // CRITICAL: Ensure handler is attached
                    onChange={onChange} 
                    
                    step="1"
                />
            </Col>
        </Row>
    );
}