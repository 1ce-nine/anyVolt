import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return(
    <header>
      About Us
    </header>
  )
}

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
      <main>
        <Header />
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