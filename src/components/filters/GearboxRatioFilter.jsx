import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Gearbox Ratio Filter (kW)
 * Uses a single number input for the minimum value.
 * @param {object} props
 * @param {object} props.filters - Object containing all current filter values
 * @param {function} props.onFilterChange - Handler for updating filter state
 */
export default function GearboxRatioFilter({ filters, onFilterChange }) {

    return (
        <Row className="mb-3 align-items-center">
            
            <Col md={4}>
                <Form.Label>Gearbox Ratio:</Form.Label>
            </Col>
            
            <Col md={8}>
                <Form.Control
                    type="number" 
                    name="gearboxRatio" // Name matches the state key
                    placeholder="Gearbox Ratio"
                    value={filters.gearboxRatio || ''} 
                    onChange={onFilterChange}                     
                    step="1"
                />
            </Col>      
        </Row>
    );
}