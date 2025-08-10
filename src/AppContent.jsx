import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';

function AppContent() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default AppContent;
