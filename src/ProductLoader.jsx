import React, { useState } from "react";
import { fetchProducts } from "./lib/api";

export default function ProductLoader() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [openId, setOpenId] = useState(null);

  const runSearch = async (q = query) => {
    setLoading(true);
    setErr("");
    try {
      const data = await fetchProducts({ q });
      setResults(data);
      setHasSearched(true);
      setOpenId(null); // reset opened row on new search
    } catch (e) {
      setErr(e?.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => e.key === "Enter" && runSearch();

  // Convert Strapi rich-text blocks -> plain text
  const toPlain = (desc) => {
    if (Array.isArray(desc)) {
      return desc
        .map(b =>
          Array.isArray(b.children)
            ? b.children.map(c => c.text || "").join("")
            : ""
        )
        .join("\n")
        .trim();
    }
    return desc || "";
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: "12px",
        backgroundColor: "transparent",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          marginBottom: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          placeholder="Search products…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        <button className="purple-style-button"
          onClick={() => runSearch()}
          style={{
            padding: "0.75rem 1.5rem",
            border: "none",
            background: "#007bff",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#007bff")}
        >
          Search
        </button>
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading…</p>}
      {err && (
        <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
          {err}
        </p>
      )}

      {/* Results only after a search */}
      {hasSearched && !loading && !err && (
        <>
          {results.length === 0 ? (
            <p style={{ textAlign: "center", color: "#777", fontStyle: "italic" }}>
              No products found.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {results.map((p) => {
                const isOpen = openId === p.id;
                return (
                  <li
                    key={p.id}
                    style={{
                      marginBottom: "0.75rem",
                      borderRadius: "10px",
                      background: "white",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Row header: thumbnail + name + chevron */}
                    <button
                      onClick={() => setOpenId(isOpen ? null : p.id)}
                      aria-expanded={isOpen}
                      style={{
                        width: "100%",
                        padding: "0.9rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        border: "none",
                        background: "white",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {p.thumbnailUrl && (
                        <img
                          src={p.thumbnailUrl}
                          alt={p.name}
                          width={48}
                          height={48}
                          style={{ objectFit: "cover", borderRadius: "8px", flexShrink: 0 }}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      )}
                      <span style={{ fontSize: "1.05rem", fontWeight: 600, flex: 1 }}>
                        {p.name}
                      </span>
                      <span
                        style={{
                          transform: `rotate(${isOpen ? 90 : 0}deg)`,
                          transition: "transform 0.15s ease",
                          color: "#888",
                          fontWeight: 700,
                          fontSize: "1rem",
                        }}
                      >
                        ›
                      </span>
                    </button>

                    {/* Expanding panel: description + price ONLY (no big image) */}
                    <div
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 220ms ease",
                        borderTop: "1px solid #f0f0f0",
                        background: "#fff",
                      }}
                    >
                      <div style={{ padding: isOpen ? "0.9rem 1rem 1rem" : "0 1rem" }}>
                        <p style={{ margin: 0, color: "#444", lineHeight: 1.7 }}>
                          {toPlain(p.description) || "No description available."}
                        </p>
                        {p.price != null && (
                          <p style={{ margin: "0.5rem 0 0", color: "#111", fontWeight: 600 }}>
                            ${p.price}
                          </p>
                        )}
                        {p.voltage != null && (
                          <p style={{ margin: "0.5rem 0 0", color: "#555", fontWeight: 500 }}>
                            Voltage: {p.voltage} kV {/* Adjust units if needed */}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
