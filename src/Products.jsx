import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SingleProductDisplay from "./SingleProductDisplay";


function Products() {
  return (
    <>
      <title>Products</title>
        <Header />
        <main>
          <h1 className="page-heading">Products</h1>
          <ul>
            <li>insert incredible web page ghere</li>
          </ul>
          <SingleProductDisplay />
        </main>
      <Footer />
    </>
  );
}

export default Products;