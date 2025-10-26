import React from 'react';
import { Form } from 'react-bootstrap';

// This is a placeholder component.
const MotorTypeFilter = ({ filters, onFilterChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Motor Type:</Form.Label>
      <Form.Select
        name="motorType"
        value={filters.motorType || ''}
        onChange={onFilterChange}
        disabled // We can disable it for now
      >
        <option value="">(Coming soon)</option>
        {/*
        <option value="AC">AC Motor</option>
        <option value="DC">DC Motor</option>
        */}
      </Form.Select>
    </Form.Group>
  );
};

// This line is the most important part - it fixes the error.
export default MotorTypeFilter;