import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleProductDisplay = () => {
  // State to store the product we fetch
  const [product, setProduct] = useState(null);
  // State to handle the loading status
  const [loading, setLoading] = useState(true); // Start in a loading state
  // State to store any errors
  const [error, setError] = useState(null);

  // useEffect runs automatically after the component first renders
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Make a simple, public API call to your Strapi backend
        const response = await axios.get('http://localhost:1337/api/products/1');
        
        // Strapi nests the actual data inside a 'data' property
        setProduct(response.data.data); 
      } catch (err) {
        setError('Could not fetch the product. Please ensure the backend server is running and a published product with ID 1 exists.');
        console.error(err);
      } finally {
        setLoading(false); // Stop loading, whether it succeeded or failed
      }
    };

    fetchProduct(); // Call the function to start fetching
  }, []); // The empty [] array means this effect runs only once on mount

  // --- Render logic based on the state ---

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      {/* We check if product is not null before trying to display it */}
      {product && (
        <div style={{ border: '2px solid #eee', padding: '20px' }}>
          <h1>{product.attributes.name}</h1>
          {/* Note: The description for Strapi 4 Rich Text (Blocks) is a JSON object. We'll just show the raw text for now. */}
          <p>{product.attributes.description[0].children[0].text}</p>
        </div>
      )}
    </div>
  );
};

export default SingleProductDisplay;