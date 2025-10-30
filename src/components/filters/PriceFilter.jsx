// src/components/filters/PriceFilter.jsx
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// This component now receives values and the change handler as props
const PriceFilter = ({ filters, onFilterChange }) => {
  return (
    <Row className="mb-3 align-items-center">
      <Col md={4}>
        <Form.Label>Price Range:</Form.Label>
      </Col>
      <Col md={4}>
        <Form.Control
          type="number"
          name="minPrice" // Name matches the state key
          placeholder="Min Price ($)"
          value={filters.minPrice || ''} // Display value from props
          onChange={onFilterChange} // Call parent's handler
          step="50"
        />
      </Col>
      <Col md={4}>
        <Form.Control
          type="number"
          name="maxPrice" // Name matches the state key
          placeholder="Max Price ($)"
          value={filters.maxPrice || ''} // Display value from props
          onChange={onFilterChange} // Call parent's handler
          step="50"
        />
      </Col>
    </Row>
  );
};

export default PriceFilter;