"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeSEO = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const result = await res.json();
      if (res.ok) {
        setData(result);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        
        <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>🚀 Hirezaap SEO Checker</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Enter a website URL to check its SEO health</p>

        <form onSubmit={analyzeSEO} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="url"
            placeholder="https://example.com"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {error && <div style={{ color: '#d32f2f', backgroundColor: '#ffebee', padding: '10px', borderRadius: '6px', marginBottom: '20px' }}>{error}</div>}

        {data && (
          <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Analysis Results:</h2>
            
            <div style={{ padding: '15px', backgroundColor: data.score >= 70 ? '#e8f5e9' : '#fff3e0', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>SEO Score: {data.score}/100</span>
            </div>

            <div style={{ display: 'grid', gap: '15px' }}>
              <p><strong>📝 Title:</strong> {data.title}</p>
              <p><strong>📄 Description:</strong> {data.description}</p>
              <p><strong>🏷️ H1 Tag:</strong> {data.h1}</p>
              <p><strong>🖼️ Images:</strong> Total {data.images} ({data.imagesWithoutAlt} missing alt tags)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}