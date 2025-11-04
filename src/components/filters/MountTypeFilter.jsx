import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

// List of mount type options
const MOUNTTYPE_OPTIONS = [
    { value: '', label: 'All Motor Types' },
    { value: 'Foot', label: 'Foot' },
    { value: 'Flange', label: 'Flange' },
    { value: 'Both', label: 'Both' },

];

/**
 * MountType Filter Dropdown
 * This component uses the standard React Form Event logic (e.g., e.target.name)
 * to ensure it works seamlessly with the FilterPanel's handleFilterChange.
 */
export default function MountTypeFilter({ value, onChange }) {
    return (
        // Use the md={3}, md={4}, md={4} grid pattern for perfect alignment
        <Row className="mb-3 align-items-center" controlId="formMountType">
            
            {/* Label Column: Col md={3} */}
            <Col md={4}> 
                <Form.Label>Mount Type:</Form.Label>
            </Col>
            
            {/* Input Column 1: Col md={4} */}
            <Col md={8}>
                <Form.Select 
                    // CRITICAL: Name matches the state key in FilterPanel ('mountType')
                    name="mountType" 
                    
                    value={value} 
                    // Pass the entire event object back to the parent
                    onChange={onChange}
                    
                    aria-label="Select Mount Type"
                >
                    {MOUNTTYPE_OPTIONS.map((option) => (
                        <option 
                            key={option.value} 
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </Form.Select>
            </Col>
            
            {/* Input Column 2: Empty Col md={4} for consistent layout spacing */}
            <Col md={4}>
                {/* Intentionally blank */}
            </Col>

        </Row>
    );
}