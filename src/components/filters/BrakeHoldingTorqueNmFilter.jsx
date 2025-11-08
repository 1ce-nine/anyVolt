import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Minimum Brake Holding Torque Nm
 * Uses a single number input for the minimum value.
 * @param {object} props
 * @param {object} props.filters - Object containing all current filter values
 * @param {function} props.onFilterChange - Handler for updating filter state
 */
export default function BrakeHoldingTorqueNm({ filters, onFilterChange }) {
    // Note: We use the range filter's props structure (filters/onFilterChange)
    // to keep the logic similar to PriceFilter/VoltageFilter, even though 
    // it only has one input.
    return (
        <Row className="mb-3 align-items-center">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}>
                <Form.Label>Minimum Brake Holding Torque:</Form.Label>
            </Col>
            
            <Col md={8}>
                <Form.Control
                    type="number" 
                    name="brakeHoldingTorqueNm" // Name matches the state key
                    placeholder="Min Brake Holding Torque"
                    value={filters.brakeHoldingTorqueNm || ''} 
                    onChange={onFilterChange}                     
                    step="1"
                />
            </Col>      
        </Row>
    );
}