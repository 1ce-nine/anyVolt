import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Rated Power Minimum Filter (kW)
 * Uses a single number input for the minimum value.
 * @param {object} props
 * @param {object} props.filters - Object containing all current filter values
 * @param {function} props.onFilterChange - Handler for updating filter state
 */
export default function PeakCurrentFilter({ filters, onFilterChange }) {
    // Note: We use the range filter's props structure (filters/onFilterChange)
    // to keep the logic similar to PriceFilter/VoltageFilter, even though 
    // it only has one input.
    return (
        <Row className="mb-3 align-items-center">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}>
                <Form.Label>Peak Current:</Form.Label>
            </Col>
            
            {/* Input Column: ratedPowerMinKw (Number Field) - Col md={8} as requested */}
            <Col md={8}>
                <Form.Control
                    type="number" 
                    name="peakCurrentA" // Name matches the state key
                    placeholder="Peak Current"
                    value={filters.peakCurrentA || ''} 
                    onChange={onFilterChange}                     
                    step="1"
                />
            </Col>      
        </Row>
    );
}