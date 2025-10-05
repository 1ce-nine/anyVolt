import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleProductDisplay() {
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    const slug = "anyvolt-super-charger-5000-test"; // ← choose one of your slugs
    const base = import.meta.env.VITE_API_URL;      // http://localhost:1337
    const url  = `${base}/api/products?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`;

    axios.get(url)
      .then(r => {
        const item = r.data?.data?.[0];
        if (!item) throw new Error("Product not found");
        setProduct(item);
      })
      .catch(e => setErr(e.message || "Fetch failed"));
  }, []);

  if (err) return <p>Could not fetch the product: {err}</p>;
  if (!product) return <p>Loading…</p>;

  const { attributes } = product;
  return (
    <div>
      <h1>{attributes?.name}</h1>
      <p>${attributes?.price}</p>
    </div>
  );
}
