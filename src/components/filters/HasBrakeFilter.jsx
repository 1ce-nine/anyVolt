import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Has Brake Boolean Filter (Radio Buttons: Yes/No/All)
 * @param {object} props
 * @param {string} props.value - The current state value ('true', 'false', or '')
 * @param {function} props.onChange - Handler that receives the full change event
 */
export default function HasBrakeFilter({ value, onChange }) {
    
    // Helper function to create the event object for the parent handler
    const createChangeEvent = (newValue) => ({
        target: {
            name: 'hasBrake', // CRITICAL: Matches the state key
            value: newValue,
        }
    });

    return (
        <Row className="mb-3 align-items-center">
            
            <Col md={4}>
                <Form.Label>Brake Included:</Form.Label>
            </Col>
            
            <Col md={8}> 
                
                {/* Option 1: ALL (Unfiltered/Reset) */}
                <Form.Check
                    inline
                    type="radio"
                    label="Either"
                    name="hasBrakeGroup"
                    checked={value === ''}
                    onChange={() => onChange(createChangeEvent(''))}
                    id="hasBrake-all"
                    className="me-3"
                />

                {/* Option 2: YES (Filter where hasBrake is true) */}
                <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="hasBrakeGroup"
                    checked={value === 'true'}
                    onChange={() => onChange(createChangeEvent('true'))}
                    id="hasBrake-yes"
                    className="me-3"
                />

                {/* Option 3: NO (Filter where hasBrake is false) */}
                <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="hasBrakeGroup"
                    checked={value === 'false'}
                    onChange={() => onChange(createChangeEvent('false'))}
                    id="hasBrake-no"
                />
            </Col>
            
        </Row>
    );
}