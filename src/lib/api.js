import axios from "axios";

// Base Strapi URL (backend)
export const apiBaseURL = import.meta.env.VITE_API_URL ?? "http://localhost:1337";

// Reusable axios instance
export const api = axios.create({
  baseURL: `${apiBaseURL}/api`,
});

// Attach JWT token if user is logged in
api.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) config.headers.Authorization = `Bearer ${jwt}`;
  return config;
});

// Auto-remove JWT on invalid/expired token
api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.removeItem("jwt");
    }
    return Promise.reject(err);
  }
);

// Helper for absolute image URLs
const abs = (u) => (u?.startsWith?.("http") ? u : u ? `${apiBaseURL}${u}` : undefined);

// Existing fetchProducts function (keep this)
export async function fetchProducts({ q = "" } = {}) {
  const params = { populate: "image", sort: "name" };

  if (q.trim()) {
    params["filters[$or][0][name][$containsi]"] = q.trim();
    params["filters[$or][1][description][$containsi]"] = q.trim(); // search name or description
  }

  const res = await api.get(`/products`, { params });

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
      description: p.description ?? "",
      price: p.price ?? null,
    };
  });
}
