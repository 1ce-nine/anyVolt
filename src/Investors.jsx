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

function Investors() {
  return (
    <>
      <title>Investors</title>
        <Header />
        <main>
        <h1 className="page-heading">Investors</h1>
            <ul>
                <li>insert incredible web page here</li>
            </ul>
          <Footer />
        </main>
    </>
  );
}

export default Investors;