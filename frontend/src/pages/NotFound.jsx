import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: 72, fontWeight: 800, color: '#2563EB', marginBottom: 8 }}>404</h1>
      <h2 style={{ marginBottom: 12 }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: 24 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 24px',
          background: '#2563EB',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontSize: 14,
          fontWeight: 600
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
