// Products.jsx
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductLoader from "./ProductLoader"; // ← bring in the search+results UI
// import SingleProductDisplay from "./SingleProductDisplay"; // optional

export default function Products() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1 className="page-heading">Products</h1>

        {/* Search + results (your search bar is inside here) */}
        <ProductLoader />

        {/* If you later want a standalone detail view, keep this on a /products/:slug route instead */}
        {/* <SingleProductDisplay /> */}
      </main>
      <Footer />
    </>
  );
}
