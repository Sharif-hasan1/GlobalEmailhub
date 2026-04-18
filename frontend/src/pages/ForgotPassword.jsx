import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Something went wrong');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <div className="auth-logo">
          <img src="/logo.png" alt="GlobalEmailHub" style={{ height: 32 }} />
          <h1>GlobalEmail Hub</h1>
        </div>

        {submitted ? (
          <>
            <h2>Check your inbox</h2>
            <p className="auth-sub" style={{ marginBottom: 28 }}>
              If an account exists for <strong>{email}</strong>, a password reset link has been sent. Check your spam folder if you don't see it.
            </p>
            <p className="auth-switch">
              <Link to="/login">Back to login</Link>
            </p>
          </>
        ) : (
          <>
            <h2>Forgot password?</h2>
            <p className="auth-sub">Enter your account email and we'll send you a reset link.</p>

            {error && <p className="error-msg" style={{ marginBottom: 12 }}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={loading} style={{ marginTop: 8 }}>
                {loading ? 'Sending…' : 'Send reset link'}
              </button>
            </form>

            <p className="auth-switch">
              Remember your password? <Link to="/login">Log in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
