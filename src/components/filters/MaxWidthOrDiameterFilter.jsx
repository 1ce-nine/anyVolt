import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Max Width/Diameter in Milimetres Filter
 * Uses a single number input for the minimum value.
 * @param {object} props
 * @param {object} props.filters - Object containing all current filter values
 * @param {function} props.onFilterChange - Handler for updating filter state
 */
export default function MaxWidthOrDiameterFilter({ filters, onFilterChange }) {

    return (
        <Row className="mb-3 align-items-center">
            
            <Col md={4}>
                <Form.Label>Max Width (mm):</Form.Label>
            </Col>
            
            <Col md={8}>
                <Form.Control
                    type="number" 
                    name="maxWidthOrDiameterMm" // Name matches the state key
                    placeholder="Max Width (mm)"
                    value={filters.maxWidthOrDiameterMm || ''} 
                    onChange={onFilterChange}                     
                    step="1"
                />
            </Col>      
        </Row>
    );
}