import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <title>About Us</title>
        <Header />
        <main>
            <h1 className="page-heading">About Us</h1>
          
          <ul>
            <li>History</li>
            <li>Mission</li>
          </ul>
          <Footer />
        </main>
    </>
  );
}

export default AboutUs;