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
    // Only run a search if the query is not empty
    if (!q.trim()) {
        setResults([]);
        setHasSearched(false);
        return;
    }
    
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

  // NEW HANDLER: Resets all search states
  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setErr("");
    setHasSearched(false);
    setOpenId(null);
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
        margin: "0 auto", 
        padding: "0 0", 
        borderRadius: "0", 
        backgroundColor: "transparent",
        boxShadow: "none",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          marginBottom: "0", 
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          height: '44px',
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
            boxSizing: 'border-box',
          }}
        />
        
        {/* CLEAR BUTTON: Only show if there is text in the search bar */}
        {query && (
          <button
            onClick={clearSearch}
            style={{
              // Reduced horizontal padding for a compact, icon-like button
              padding: "0.75rem 0.5rem", 
              border: "none",
              background: "#f8f9fa", 
              color: "#6c757d", 
              cursor: "pointer",
              fontWeight: 500,
              fontSize: '1.25rem', // Increased size for the 'X' symbol
              lineHeight: 1, // Ensures vertical centering
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e9ecef")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f8f9fa")}
          >
            &times; {/* HTML entity for a multiplication sign / 'X' */}
          </button>
        )}

        {/* Original Search Button */}
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

      {/* Content below the search bar starts here, using marginTop for separation */}
      {loading && <p style={{ textAlign: "center", marginTop: "1.5rem"}}>Loading…</p>}
      
      {err && (
        <p style={{ color: "red", textAlign: "center", marginBottom: "1rem", marginTop: "1.5rem" }}>
          {err}
        </p>
      )}

      {/* Results only after a search */}
      {hasSearched && !loading && !err && (
        <>
          {results.length === 0 ? (
            <p style={{ textAlign: "center", color: "#777", fontStyle: "italic", marginTop: "1.5rem" }}>
              No products found.
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0 0" }}> 
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
                            Voltage: {p.voltage} kV
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