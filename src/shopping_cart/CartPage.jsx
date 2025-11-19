import { useCart } from "../shopping_cart/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container} from "react-bootstrap"

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Header />
      <Container className="button-transparent">
        <Row>
          <h1>Your Cart</h1>
        </Row>
        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1rem",
            }}
          >
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                width="100"
                alt={item.name}
                style={{ borderRadius: "8px" }}
              />
            )}

            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{ background: "red", color: "white", padding: "0.5rem 1rem" }}
              >
                Remove
              </button>
            </div>         
          </div>
        ))}
        <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
        <Row className="justify-content-center">
          <Col xs="auto">
            <button style={{fontSize: "20px"}} className="purple-style-button">
              Proceed to Secure Payment
            </button>
          </Col>
        </Row>
        </Container>
      <Footer />
    </>
  );
}
