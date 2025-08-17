import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

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
