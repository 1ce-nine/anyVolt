import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


function Footer() {
  return (
    <footer>
      <Link to="/">Back to Home</Link>
    </footer>
  )
}

function AboutUs() {
  return (
    <>
      <title>About Us</title>
        <Header />
        <main>
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