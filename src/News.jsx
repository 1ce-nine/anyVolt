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

function News() {
  return (
    <>
      <title>News</title>
        <Header />
        <main>
        <h1 className="page-heading">News</h1>
            <ul>
                <li>insert incredible web page here</li>
            </ul>
          <Footer />
        </main>
    </>
  );
}

export default News;