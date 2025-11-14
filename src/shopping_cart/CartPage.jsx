import { useCart } from "../shopping_cart/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Header />
      <div style={{ padding: "2rem" }} className="button-transparent">
        <h1>Your Cart</h1>

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
      </div>
      <Footer />
    </>
  );
}
