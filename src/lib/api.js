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

// Helper function to format a single product
// We put this here so both fetch functions can use it
const formatProduct = (p) => {
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
    voltage: p.voltage ?? null,
    ipRating: p.ipRating ?? null,
    frameSizelec: p.frameSizelec ?? null,
  };
};

// --- Your existing fetchProducts function ---
export async function fetchProducts({ q = "" } = {}) {
  const params = { populate: "image", sort: "name" };

  if (q.trim()) {
    params["filters[$or][0][name][$containsi]"] = q.trim();
    params["filters[$or][1][description][$containsi]"] = q.trim(); // search name or description
  }

  const res = await api.get(`/products`, { params });

  return (res.data?.data ?? []).map(formatProduct); // Use the helper
}



/**
 * Fetches products from Strapi based on a filter object
 */
export const fetchProductsByFilter = async (filters) => {
  
  // This is the object that will build our query
  const params = {
    populate: 'image', // Use 'image' to match your other function
    filters: {
      $and: [], // We use $and to combine all our filter rules
    },
  };

  // Add Price Range filters (if they exist)
  if (filters?.minPrice) {
    params.filters.$and.push({
      price: {
        $gte: filters.minPrice, // $gte = greater than or equal to
      },
    });
  }
  if (filters?.maxPrice) {
    params.filters.$and.push({
      price: {
        $lte: filters.maxPrice, // $lte = less than or equal to
      },
    });
  }

  if (filters?.minVoltage) {
    params.filters.$and.push({
      voltage: { // Use the field name from Strapi ('voltage')
        $gte: filters.minVoltage, // $gte = greater than or equal to
      },
    });
  }
  if (filters?.maxVoltage) {
    params.filters.$and.push({
      voltage: { // Use the field name from Strapi ('voltage')
        $lte: filters.maxVoltage, // $lte = less than or equal to
      },
    });
  }

  if (filters?.motorFamily) {
    params.filters.$and.push({
      motorFamily: {
        $eq: filters.motorFamily,
      },
    });
  }

  if (filters?.motorType) {
    params.filters.$and.push({
      motorType: {
        $eq: filters.motorType,
      },
    });
  }

  if (filters?.supplyVoltageMinV) {
    params.filters.$and.push({
      supplyVoltageMinV: {
        $gte: filters.supplyVoltageMinV,
      },
    });
  }

  if (filters?.supplyVoltageMaxV) {
    params.filters.$and.push({
      supplyVoltageMaxV: {
        $lte: filters.supplyVoltageMaxV,
      },
    });
  }

  if (filters?.ratedPowerKw) {
    params.filters.$and.push({
      ratedPowerKw: {
        $gte: filters.ratedPowerKw,
      },
    });
  }

  if (filters?.ratedTorqueNm) {
    params.filters.$and.push({
      ratedTorqueNm: {
        $gte: filters.ratedTorqueNm,
      },
    });
  }

  if (filters?.peakCurrentA) {
    params.filters.$and.push({
      peakCurrentA: {
        $lte: filters.peakCurrentA,
      },
    });
  }

  if (filters?.dutyCycle) {
    params.filters.$and.push({
      dutyCycle: {
        $eq: filters.dutyCycle,
      },
    });
  }  

    if (filters?.mountType) {
    params.filters.$and.push({
      mountType: {
        $eq: filters.mountType,
      },
    });
  }

  if (filters?.hasBrake === 'true') {
    params.filters.$and.push({
      hasBrake: { 
        $eq: true, // Filter for products where hasBrake is TRUE
      },
    });
  } else if (filters?.hasBrake === 'false') { // <--- NEW LOGIC FOR 'No'
    params.filters.$and.push({
      hasBrake: { 
        $eq: false, // Filter for products where hasBrake is FALSE
      },
    });
  }

  // If no filters were added, remove the empty $and array
  if (params.filters.$and.length === 0) {
    delete params.filters;
  }

  try {
    // Use your pre-configured 'api' instance
    const res = await api.get('/products', { params });
    
    // Use the same 'formatProduct' helper
    return (res.data?.data ?? []).map(formatProduct); 
  } catch (error) {
    console.error("Error fetching products by filter:", error);
    throw new Error(error.response?.data?.error?.message || "Failed to fetch products");
  }
};