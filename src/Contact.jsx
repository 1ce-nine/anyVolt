import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";




function Contact() {
  return (
    <>
      <title>Contact</title>
        <Header />
        <main>
            <h1 className="page-heading">Contact</h1>
                <ul>
                    <li>insert incredible web page here</li>
                </ul>
             <Footer />
        </main>
    </>
  );
}

export default Contact;