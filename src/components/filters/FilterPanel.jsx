import React from 'react';
import { Form } from 'react-bootstrap';

// 1. We only import the PriceFilter for now
import PriceFilter from './PriceFilter';
// import MotorTypeFilter from './MotorTypeFilter'; // Comment this out

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <Form className="filter-panel mb-4">
      
      {/* 2. We only render the PriceFilter */}
      <PriceFilter 
        filters={filters} 
        onFilterChange={onFilterChange} 
      />
      
      {/* 3. We can leave the other one commented out for the future */}
      {/* <MotorTypeFilter filters={filters} onFilterChange={onFilterChange} /> */}

    </Form>
  );
};

export default FilterPanel;