{/* */}
{/* Import necessary libraries, components etc */}
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import Home from './web_pages/Home';
import Footer from './components/Footer';


function AppContent() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default AppContent;
