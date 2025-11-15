// src/components/NewsletterSubscribe.jsx
import { useState } from "react";
import axios from "axios";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error" | "exists" | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // 🔑 stop the page refresh
    console.log("Submitting newsletter form with email:", email);
    setStatus(null);

    if (!email) return;

    try {
      setLoading(true);

      // For now, hardcode backend URL so we eliminate env issues
      const baseUrl = "http://localhost:1337";

      const response = await axios.post(`${baseUrl}/api/newsletter-subscriptions`, {
        data: {
          email,
          isSubscribed: true,
        },
      });

      console.log("Newsletter subscribe response:", response.data);

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscribe error:", error);

      if (error.response && error.response.status === 400) {
        setStatus("exists");
      } else {
        setStatus("error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
      <input
        type="email"
        required
        className="form-control"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading || !email}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>

      {status === "success" && (
        <div className="text-success small mt-2 w-100">
          Thanks! You’re now subscribed to the AnyVolt newsletter.
        </div>
      )}
      {status === "exists" && (
        <div className="text-warning small mt-2 w-100">
          That email is already subscribed.
        </div>
      )}
      {status === "error" && (
        <div className="text-danger small mt-2 w-100">
          Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
}
