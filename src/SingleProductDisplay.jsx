import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function SingleProductDisplay() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!slug) return;

    const base = import.meta.env.VITE_API_URL;
    const url = `${base}/api/products?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`;

    axios.get(url)
      .then(r => {
        console.log("Fetched product:", r.data); // 🔍 check console
        const item = r.data?.data?.[0];
        if (!item) throw new Error("Product not found");
        setProduct(item);
      })
      .catch(e => setErr(e.message || "Fetch failed"));
  }, [slug]);

  if (err) return <p style={{ color: "red" }}>Could not fetch the product: {err}</p>;
  if (!product) return <p>Loading…</p>;

  const { attributes } = product;
  let imageUrl = null;

  // case 1: simple string
  if (typeof product.image === "string") {
    imageUrl = product.image;
  }

  // case 2: nested Strapi object
  else if (product.image?.data?.attributes?.url) {
    const base = import.meta.env.VITE_API_URL;
    imageUrl = `${base}${product.image.data.attributes.url}`;
  }
return (
  <>
  <Header />
  <Container>
    <Row className="justify-content-center">
      <Col className="text-center">
        <h1 className="anyvolt-logo button-transparent">
          {product.name || "Unknown" }
        </h1>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h3 className="button-transparent">Specifications</h3>
        <ul className="button-transparent">
          <li>Description: {product.description}</li>
          <li>Voltage: {product.voltage}</li>
          <li>Minimum Voltage: {product.supplyVoltageMinV}</li>
          <li>Maximum Voltage: {product.supplyVoltageMaxV}</li>

        </ul>
      </Col>
      <Col md={6}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "12px",
              margin: "1.5rem auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        )}
      </Col>
    </Row>
  </Container>
  <Footer />
  </>
);
}
