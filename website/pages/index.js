import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then((r) => r.json())
      .then(setProducts)
      .catch((_) => setProducts([]))
  }, [])

  return (
    <>
      <Head>
        <title>Shop — Affiliate Demo</title>
      </Head>
      <main style={{ padding: 20, fontFamily: 'Segoe UI, Roboto, Arial' }}>
        <h1>Products</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
              <div style={{ width: '100%', height: 140, overflow: 'hidden', marginBottom: 8 }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ margin: '8px 0' }}>{p.name}</h3>
              <p style={{ margin: '4px 0', color: '#333', fontWeight: 600 }}>{p.price}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button
                  onClick={() => (window.location.href = `/api/redirect?id=${encodeURIComponent(p.id)}`)}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: 'none', cursor: 'pointer', background: '#0070f3', color: 'white' }}>
                  Buy on Temu
                </button>
                <a href={p.targetUrl} target="_blank" rel="noreferrer" style={{ alignSelf: 'center', color: '#666' }}>
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
