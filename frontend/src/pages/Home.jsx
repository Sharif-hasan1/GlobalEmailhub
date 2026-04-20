import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductRow from '../components/ProductRow';
import './Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const sortedProducts = [...products].sort((a, b) => {
    if (a.stock === 0 && b.stock !== 0) return 1;
    if (a.stock !== 0 && b.stock === 0) return -1;
    return b.stock - a.stock;
  });
  const hotProductId = sortedProducts.find(p => p.stock > 0)?._id;

  useEffect(() => {
    axios.get('/api/products?featured=true')
      .then(res => setProducts(res.data.slice(0, 5)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge badge-blue">🔐 Verified Accounts</span>
            </div>
            <h1>Buy Aged &amp; Temporary<br />Email Accounts</h1>
            <p>The most trusted marketplace to buy aged Gmail accounts, Outlook accounts, and Yahoo email accounts. All accounts come with 2FA enabled, instant delivery, and verified stock.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg btn-rounded">
                Browse Products →
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>1,000+</strong>
                <span>Accounts Available</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>3 Providers</strong>
                <span>Gmail, Outlook, Yahoo</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>Instant</strong>
                <span>Delivery</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <div className="hero-card-row">
                <span className="picon-sm picon-gmail">G</span>
                <div>
                  <strong>Gmail Aged Accounts</strong>
                  <p>6 months old · 2FA included</p>
                </div>
                <span className="hero-price">$0.75</span>
              </div>
              <div className="hero-card-row">
                <span className="picon-sm picon-outlook">O</span>
                <div>
                  <strong>Outlook Accounts</strong>
                  <p>1 year old · EU & US IPs</p>
                </div>
                <span className="hero-price">$0.65</span>
              </div>
              <div className="hero-card-row">
                <span className="picon-sm picon-yahoo">Y</span>
                <div>
                  <strong>Yahoo Mail Accounts</strong>
                  <p>Mixed years 2018–2022</p>
                </div>
                <span className="hero-price">$0.85</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product listing */}
      <section className="home-products">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Featured Products</h2>
              <p>Top-selling accounts available right now</p>
            </div>
            <Link to="/products" className="btn btn-secondary btn-sm btn-rounded">View All →</Link>
          </div>

          <div className="product-list-wrapper card">
            {/* Table header */}
            <div className="product-list-head">
              <span className="plh-info">Product</span>
              <span className="plh-stock">Stock</span>
              <span className="plh-price">Price</span>
              <span className="plh-action">Action</span>
            </div>

            {loading ? (
              <div className="page-loading"><div className="spinner" /></div>
            ) : products.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">📭</div>
                <h3>No products available</h3>
                <p>Check back soon for new stock.</p>
              </div>
            ) : (
              sortedProducts.map(p => (
                <ProductRow
                  key={p._id}
                  product={p}
                  isHot={p._id === hotProductId}
                />
              ))
            )}
          </div>

          <div className="view-all-wrap">
            <Link to="/products" className="btn btn-primary btn-rounded">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy */}
      <section className="why-buy-section">
        <div className="container">
          <div className="section-header why-buy-header">
            <div>
              <h2>Why Buy Aged Email Accounts From Us?</h2>
              <p>Trusted by thousands of buyers worldwide</p>
            </div>
          </div>
          <div className="why-buy-grid">
            <div className="why-buy-card">
              <span className="why-buy-icon">🛡️</span>
              <h3>100% Verified Accounts</h3>
              <p>Every Gmail, Outlook and Yahoo account is manually tested before being listed</p>
            </div>
            <div className="why-buy-card">
              <span className="why-buy-icon">💰</span>
              <h3>Bulk Discounts Available</h3>
              <p>Save more when you buy in volume — flexible pricing tiers for resellers and bulk buyers</p>
            </div>
            <div className="why-buy-card">
              <span className="why-buy-icon">🎧</span>
              <h3>24/7 Customer Support</h3>
              <p>Our team is available around the clock via Telegram to assist with your order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-strip">
        <div className="container features-grid">
          {[
            { icon: '⚡', title: 'Instant Delivery', desc: 'Buy aged Gmail accounts and get instant automated delivery.' },
            { icon: '🔒', title: '2FA Included', desc: 'All aged email accounts include two-factor authentication & backup codes.' },
            { icon: '🌍', title: 'Global IPs', desc: 'Email accounts registered from diverse international IPs worldwide.' },
            { icon: '✅', title: 'Verified Stock', desc: 'Every aged email account tested and verified before listing on our marketplace.' }
          ].map(f => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
