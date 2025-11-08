import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Gearbox Required Boolean Filter (Radio Buttons: Yes/No/All)
 * @param {object} props
 * @param {string} props.value - The current state value ('true', 'false', or '')
 * @param {function} props.onChange - Handler that receives the full change event
 */
export default function GearboxRequiredFilter({ value, onChange }) {
    
    // Helper function to create the event object for the parent handler
    const createChangeEvent = (newValue) => ({
        target: {
            name: 'gearboxRequired', // CRITICAL: Matches the state key
            value: newValue,
        }
    });

    return (
        <Row className="mb-3 align-items-center">
            
            <Col md={4}>
                <Form.Label>Gearbox Required:</Form.Label>
            </Col>
            
            <Col md={8}> 
                
                {/* Option 1: ALL (Unfiltered/Reset) */}
                <Form.Check
                    inline
                    type="radio"
                    label="Either"
                    name="gearboxRequiredGroup"
                    checked={value === ''}
                    onChange={() => onChange(createChangeEvent(''))}
                    id="gearboxRequired-all"
                    className="me-3"
                />

                {/* Option 2: YES (Filter where gearboxRequired is true) */}
                <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="gearboxRequiredGroup"
                    checked={value === 'true'}
                    onChange={() => onChange(createChangeEvent('true'))}
                    id="gearboxRequired-yes"
                    className="me-3"
                />

                {/* Option 3: NO (Filter where gearboxRequired is false) */}
                <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="gearboxRequiredGroup"
                    checked={value === 'false'}
                    onChange={() => onChange(createChangeEvent('false'))}
                    id="gearboxRequired-no"
                />
            </Col>            
        </Row>
    );
}