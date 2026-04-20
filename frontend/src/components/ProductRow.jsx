import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductRow.css';

export default function ProductRow({ product, isHot = false }) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.stock === 0;

  const openBuyModal = () => {
    setQty(1);
    setShowModal(true);
  };

  const handleConfirmBuy = () => {
    addToCart(product, qty);
    setShowModal(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const subtotal = (product.price * qty).toFixed(2);

  return (
    <div className={`product-row${isOutOfStock ? ' out-of-stock' : ''}`}>
      {/* Left: icon + info */}
      <div className="pr-info">
        <div className="pr-icon">
          <ProviderIcon icon={product.icon} provider={product.provider} />
        </div>
        <div className="pr-text">
          <h3 className="pr-title">
            {product.title}
            {isHot && <span className="hot-badge">🔥 HOT</span>}
          </h3>
          <p className="pr-desc">{product.description}</p>
          <span className="pr-category badge badge-blue">{product.category}</span>
        </div>
      </div>

      {/* Right: stock, price, buy */}
      <div className="pr-meta">
        {/* Stock */}
        <div className="pr-stock">
          <span className="stock-count">
            {isOutOfStock ? '—' : `${product.stock.toLocaleString()} pcs.`}
          </span>
          <span className={`stock-badge ${
            isOutOfStock ? 'stock-sold-out'
            : product.stock > 200 ? 'stock-in-stock'
            : product.stock >= 70 ? 'stock-available'
            : 'stock-low'
          }`}>
            {isOutOfStock ? 'SOLD OUT'
              : product.stock > 200 ? 'IN STOCK'
              : product.stock >= 70 ? 'AVAILABLE'
              : 'LOW STOCK'}
          </span>
        </div>

        {/* Price */}
        <div className="pr-price">
          <span className="price-label">Price per pc from</span>
          <span className="price-value">${product.price.toFixed(3)}</span>
        </div>

        {/* Buy button */}
        <div className="pr-actions">
          <button
            className={`btn btn-primary btn-rounded pr-buy-btn${added ? ' added' : ''}`}
            onClick={openBuyModal}
            disabled={isOutOfStock}
          >
            {added ? (
              <>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Added
              </>
            ) : isOutOfStock ? 'Sold Out' : (
              <>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 7M17 13l1.4 7M9 20a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                Buy
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Buy Modal ── */}
      {showModal && (
        <>
          <div className="buy-modal-overlay" onClick={() => setShowModal(false)} />
          <div className="buy-modal">
            <button className="buy-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h3 className="buy-modal-title">{product.title}</h3>
            <p className="buy-modal-price">${product.price.toFixed(3)} <small>per piece</small></p>
            <p className="buy-modal-stock">{product.stock.toLocaleString()} pcs available</p>

            <label className="buy-modal-label">How many do you want?</label>
            <div className="buy-modal-qty">
              <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <input
                type="number"
                className="qty-input"
                value={qty}
                min={1}
                max={product.stock}
                onChange={e => {
                  const v = Math.max(1, Math.min(product.stock, Number(e.target.value) || 1));
                  setQty(v);
                }}
              />
              <button className="qty-btn" onClick={() => setQty(q => Math.min(product.stock, q + 1))}>+</button>
            </div>

            <div className="buy-modal-subtotal">
              Subtotal: <strong>${subtotal}</strong>
            </div>

            <button className="btn btn-primary btn-full btn-rounded buy-modal-confirm" onClick={handleConfirmBuy}>
              🛒 Add to Cart
            </button>

            <p className="buy-modal-contact-hint">Need help with your order?</p>
            <a
              href="https://t.me/sharifhasaan"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-modal-telegram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.982l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.963.577z"/>
              </svg>
              Contact Admin on Telegram
            </a>
          </div>
        </>
      )}
    </div>
  );
}

function ProviderIcon({ icon, provider }) {
  // If icon is a URL (uploaded file)
  if (icon && icon.startsWith('/')) {
    return <img src={icon} alt={provider} className="pr-icon-img" />;
  }

  const p = (icon || provider || '').toLowerCase();
  if (p.includes('gmail')) {
    return (
      <span className="picon picon-gmail">
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
          <path d="M44 24c0-11.04-8.96-20-20-20S4 12.96 4 24s8.96 20 20 20c5.52 0 10.52-2.22 14.14-5.86L34 34l-3.78-3.78A12.5 12.5 0 0124 32c-6.9 0-12.5-5.6-12.5-12.5S17.1 7 24 7s12.5 5.6 12.5 12.5H44z" fill="white" opacity="0.3"/>
        </svg>
        G
      </span>
    );
  }
  if (p.includes('outlook') || p.includes('hotmail')) {
    return <span className="picon picon-outlook">O</span>;
  }
  if (p.includes('yahoo')) {
    return <span className="picon picon-yahoo">Y</span>;
  }
  return <span className="picon picon-default">@</span>;
}
