import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// This is the component for the price range
const PriceFilter = ({ filters, onFilterChange }) => {
  return (
    // Use a Row to keep the inputs on the same line
    <Row className="mb-3 align-items-center">
      <Col md={3}>
        <Form.Label>Price Range:</Form.Label>
      </Col>
      <Col md={4}>
        <Form.Control
          type="number"
          name="minPrice" // This name must match the state
          placeholder="Min Price ($)"
          value={filters.minPrice || ''}
          onChange={onFilterChange}
        />
      </Col>
      <Col md={4}>
        <Form.Control
          type="number"
          name="maxPrice" // This name must match the state
          placeholder="Max Price ($)"
          value={filters.maxPrice || ''}
          onChange={onFilterChange}
        />
      </Col>
    </Row>
  );
};

export default PriceFilter;