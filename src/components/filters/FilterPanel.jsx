// src/components/filters/FilterPanel.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
// Import the specific API function needed
import { fetchProductsByFilter } from '../../lib/api'; 

// Import the "dumb" filter components
import PriceFilter from './PriceFilter';
import VoltageFilter from './VoltageFilter';

// Helper function to display description text
const toPlain = (desc) => {
  if (Array.isArray(desc)) {
    return desc
      .map(b => (Array.isArray(b.children) ? b.children.map(c => c.text || "").join("") : ""))
      .join("\n")
      .trim();
  }
  return desc || "";
};

const FilterPanel = () => {
  // 1. State for filters, results, loading, errors is now HERE
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minVoltage: '',
    maxVoltage: '',
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [hasFiltered, setHasFiltered] = useState(false);

  // 2. Handler function to update filter state
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Function to run the combined filter API call
  const runFilter = async () => {
    setLoading(true);
    setErr("");
    setHasFiltered(true);
    try {
      // Calls the API function with the combined 'filters' state
      const data = await fetchProductsByFilter(filters); 
      setResults(data);
    } catch (e) {
      setErr(e?.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Styling similar to the previous separate filter component
    <div 
      style={{ 
        maxWidth: "700px", 
        margin: "2rem auto", 
        padding: "2rem", 
        borderRadius: "12px", 
        background: "#f0f2f5" 
      }}
    >
      <h4 style={{ textAlign: 'center'}}>Filter Products</h4>
      
      {/* 4. Render the "dumb" filter components, passing state and handler */}
      <Form className="filter-panel mb-3">
        <PriceFilter 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />
        <VoltageFilter 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />
      </Form>
      
      {/* 5. The Filter Button */}
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
            <Button onClick={runFilter} disabled={loading} className="purple-style-button">
              Apply Filters
            </Button>
        </Col>
      </Row>

      {/* 6. The Results Area (copied from previous PriceFilter) */}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {err && <p style={{ color: "red", textAlign: "center" }}>{err}</p>}

      {hasFiltered && !loading && !err && (
        <>
          <h5>Filter Results:</h5>
          {results.length === 0 ? (
            <p style={{ textAlign: "center", color: "#777" }}>
              No products found matching your filters.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0 0" }}>
              {results.map((p) => (
                <li key={p.id} style={{ background: "white", padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                  <h5>{p.name}</h5>
                  <p>{toPlain(p.description) || "No description."}</p>
                  {p.price != null && <p><strong>${p.price}</strong></p>}
                  {p.voltage != null && <p>Voltage: {p.voltage} kV</p>} 
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default FilterPanel;