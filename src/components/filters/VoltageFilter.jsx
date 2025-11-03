// src/components/filters/VoltageFilter.jsx
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// This component also receives values and the change handler as props
const VoltageFilter = ({ filters, onFilterChange }) => {
  return (
    <Row className="mb-3 align-items-center">
      <Col md={4}>
        <Form.Label>Voltage Range (kV):</Form.Label>
      </Col>
      <Col md={4}>
        <Form.Control
          type="number"
          name="minVoltage" // Name matches the state key
          placeholder="Min Voltage"
          value={filters.minVoltage || ''} // Display value from props
          onChange={onFilterChange} // Call parent's handler
          step="10"
        />
      </Col>
      <Col md={4}>
        <Form.Control
          type="number"
          name="maxVoltage" // Name matches the state key
          placeholder="Max Voltage"
          value={filters.maxVoltage || ''} // Display value from props
          onChange={onFilterChange} // Call parent's handler
          step="10"
        />
      </Col>
    </Row>
  );
};

export default VoltageFilter;