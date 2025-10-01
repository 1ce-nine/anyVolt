import React, { useState } from 'react';
import axios from 'axios';

const ProductLoader = () => {
  // State to store the product we fetch
  const [product, setProduct] = useState(null);
  // State to handle the loading status
  const [loading, setLoading] = useState(false);
  // State to store any errors
  const [error, setError] = useState(null);

  // This function will be called when the button is clicked
  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      // Make the API call to your Strapi backend.
      // Make sure a product with this ID exists in your Strapi admin panel!
      const response = await axios.get('http://localhost:1337/api/tests/1');

      // Strapi v4 nests the actual data inside a 'data' property.
      setProduct(response.data.data);
    } catch (err) {
      // If something goes wrong, we save the error message.
      setError('Could not fetch the product. Make sure the backend server is running and the product exists.');
      console.error(err);
    } finally {
      // This runs whether the request was successful or not.
      setLoading(false);
    }
  };

  return (
    <div style={{ border: '2px solid #eee', padding: '20px', marginTop: '20px' }}>
      <h2>Test Your Strapi Backend</h2>
      <button onClick={fetchProduct} disabled={loading}>
        {loading ? 'Loading...' : 'Load Product with ID 1'}
      </button>

      {/* Show an error message if something went wrong */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show the product details if we have them */}
      {product && (
        <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px' }}>
          <h3>Product Loaded Successfully!</h3>
          <h4>{product.attributes.name}</h4>
          <p>{product.attributes.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductLoader;