import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
// Import the new function from your api.js file
import { fetchProductsByFilter } from '../../lib/api'; 

// This is a helper function to display the description text
// (Copied from ProductLoader)
const toPlain = (desc) => {
  if (Array.isArray(desc)) {
    return desc
      .map(b => (Array.isArray(b.children) ? b.children.map(c => c.text || "").join("") : ""))
      .join("\n")
      .trim();
  }
  return desc || "";
};

const PriceFilter = () => {
  // 1. This component manages all of its own state
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [hasFiltered, setHasFiltered] = useState(false);

  // 2. This function updates the state as the user types
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. This function runs the filter when the button is clicked
  const runFilter = async () => {
    setLoading(true);
    setErr("");
    setHasFiltered(true); // We've now run a filter
    try {
      // Calls the API function
      const data = await fetchProductsByFilter(filters);
      setResults(data);
    } catch (e) {
      setErr(e?.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  // This is the UI for the filter component
  return (
    <div 
      style={{ 
        maxWidth: "700px", 
        margin: "2rem auto", 
        padding: "2rem", 
        borderRadius: "12px", 
        background: "#f0f2f5" // A slightly different background
      }}
    >
      <h4>Filter by Price</h4>
      
      {/* --- Filter UI --- */}
      <Row className="mb-3 align-items-center">
        <Col md={5}>
          <Form.Control
            type="number"
            name="minPrice"
            placeholder="Min Price ($)"
            value={filters.minPrice}
            onChange={handleFilterChange}
            step="50"
          />
        </Col>
        <Col md={5}>
          <Form.Control
            type="number"
            name="maxPrice"
            placeholder="Max Price ($)"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            step="50"
          />
        </Col>
        <Col md={2}>
          {/* --- Filter Button --- */}
          <Button onClick={runFilter} disabled={loading} className="purple-style-button" style={{ width: '100%' }}>
            Filter
          </Button>
        </Col>
      </Row>

      {/* --- Results Area --- */}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {err && <p style={{ color: "red", textAlign: "center" }}>{err}</p>}

      {/* Show results only after a filter has been run */}
      {hasFiltered && !loading && !err && (
        <>
          {results.length === 0 ? (
            <p style={{ textAlign: "center", color: "#777" }}>
              No products found for this price range.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0 0" }}>
              {results.map((p) => (
                <li key={p.id} style={{ background: "white", padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                  <h5>{p.name}</h5>
                  <p>{toPlain(p.description) || "No description."}</p>
                  {p.price != null && <strong>${p.price}</strong>}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default PriceFilter;