import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCart } from "./shopping_cart/CartContext";
import Breadcrumbs from "./components/Breadcrumbs";

export default function SingleProductDisplay() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    if (!slug) return;

    const base = import.meta.env.VITE_API_URL;
    const url = `${base}/api/products?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`;

    axios.get(url)
      .then(r => {
        console.log("API response:", r.data); // check in console
        const item = r.data?.data?.[0];
        if (!item) {
          setErr("Product not found");
          return;
        }
        setProduct(item);
      })
      .catch(e => {
        console.error(e);
        setErr(e.message || "Fetch failed");
      });
  }, [slug]);

  if (err) return <p style={{ color: "red", padding: "1rem" }}>{err}</p>;
  if (!product) return <p style={{ padding: "1rem" }}>Loading product...</p>;

  const { id, name, price, description, voltage, supplyVoltageMinV, supplyVoltageMaxV, motorType } = product;

  return (
    <>
      <Header />
      <Container>
      <Breadcrumbs labels={{
        products: "Products",
        [slug]: product.name
      }} />
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="anyvolt-logo button-transparent">{name || "Unknown Product"}</h1>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h3 className="button-transparent">Specifications</h3>
            <ul className="button-transparent">
              <li>Price: ${price.toFixed(2) || "N/A"}</li>
              <li>Description: {description || "N/A"}</li>
              <li>Voltage: {voltage || "N/A"}</li>
              <li>Minimum Voltage: {supplyVoltageMinV || "N/A"}</li>
              <li>Maximum Voltage: {supplyVoltageMaxV || "N/A"}</li>
              <li>Motor Type: {motorType || "N/A"}</li>            
            </ul>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Button
              variant="primary"
              className="purple-style-button"
              onClick={() => addToCart({
                id,
                name: name || "Unknown",
                price: price || 0,
              })}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
