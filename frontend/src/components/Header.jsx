import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const { itemCount, setIsOpen } = useCart();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="GlobalEmailHub Logo" className="logo-img" />
          <span className="logo-text">GlobalEmail <span>Hub</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
          <NavLink to="/orders" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Orders</NavLink>
          <NavLink to="/support" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Support</NavLink>
          {user?.role === 'admin' && (
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'nav-link active nav-admin' : 'nav-link nav-admin'}>Admin</NavLink>
          )}
        </nav>

        {/* Right actions */}
        <div className="header-actions">
          {/* Cart button */}
          <button className="cart-btn" onClick={() => setIsOpen(true)} aria-label="Open cart">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 7M17 13l1.4 7M9 20a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>

          {/* Auth buttons */}
          {user ? (
            <div className="user-menu">
              <div className="user-avatar">{user.username.charAt(0).toUpperCase()}</div>
              <span className="user-name">{user.username}</span>
              <button className="btn btn-secondary btn-sm" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="auth-btns">
              <Link to="/login" className="btn btn-secondary btn-sm">Login</Link>
            </div>
          )}

          {/* Telegram */}
          <a
            href="https://t.me/sharifhasaan"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-telegram-btn"
            aria-label="Chat on Telegram"
            title="Chat on Telegram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>

          {/* Mobile burger */}
          <button className="burger-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            <span className={menuOpen ? 'burger open' : 'burger'} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end className="mobile-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className="mobile-link" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/orders" className="mobile-link" onClick={() => setMenuOpen(false)}>Orders</NavLink>
          <NavLink to="/support" className="mobile-link" onClick={() => setMenuOpen(false)}>Support</NavLink>
          {user?.role === 'admin' && (
            <NavLink to="/admin" className="mobile-link mobile-admin-link" onClick={() => setMenuOpen(false)}>⚙️ Admin Panel</NavLink>
          )}
          <hr className="divider" />
          {user ? (
            <>
              <span className="mobile-user">Logged in as <strong>{user.username}</strong></span>
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <div className="mobile-auth">
              <Link to="/login" className="btn btn-secondary btn-sm" onClick={() => setMenuOpen(false)}>Login</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
