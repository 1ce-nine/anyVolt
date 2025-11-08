import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Minimum Brake Voltage
 * Uses a single number input for the minimum value.
 * @param {object} props
 * @param {object} props.filters - Object containing all current filter values
 * @param {function} props.onFilterChange - Handler for updating filter state
 */
export default function BrakeVoltageFilter({ filters, onFilterChange }) {
    // Note: We use the range filter's props structure (filters/onFilterChange)
    // to keep the logic similar to PriceFilter/VoltageFilter, even though 
    // it only has one input.
    return (
        <Row className="mb-3 align-items-center">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}>
                <Form.Label>Minimum Brake Voltage:</Form.Label>
            </Col>
            
            {/* Input Column: brakeVoltageV (Number Field) - Col md={8} as requested */}
            <Col md={8}>
                <Form.Control
                    type="number" 
                    name="brakeVoltageV" // Name matches the state key
                    placeholder="Min Brake Voltage"
                    value={filters.brakeVoltageV || ''} 
                    onChange={onFilterChange}                     
                    step="1"
                />
            </Col>      
        </Row>
    );
}