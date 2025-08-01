import React from 'react';
import { Link } from 'react-router-dom';

function AppContent() {
  return (
    <>
      {/* This is a React Fragment. It doesn't add an extra div to the DOM. */}
      <h1>Anyvolt Placeholder Page</h1>
        <p>
            <Link to="/about-us">About us!</Link>
        </p>
    </>
  );
}

export default AppContent;