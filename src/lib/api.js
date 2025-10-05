import axios from "axios";

const API = import.meta.env.VITE_API_BASE ?? "http://localhost:1337";
const abs = (u) => (u?.startsWith?.("http") ? u : u ? `${API}${u}` : undefined);

export async function fetchProducts({ q = "" } = {}) {
  const params = { populate: "image", sort: "name" };

  if (q.trim()) {
    params["filters[$or][0][name][$containsi]"] = q.trim();
    params["filters[$or][1][description][$containsi]"] = q.trim(); // works with rich text blocks too
  }

  const res = await axios.get(`${API}/api/products`, { params });

  return (res.data?.data ?? []).map((p) => {
    const img = p.image || null;
    const original = img?.url || null;
    const thumb = img?.formats?.thumbnail?.url || original || null;

    return {
      id: p.id,
      name: p.name ?? "Untitled",
      slug: p.slug,
      thumbnailUrl: abs(thumb),
      imageUrl: abs(original),
      description: p.description ?? "", // may be blocks array
      price: p.price ?? null,
    };
  });
}
