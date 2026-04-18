import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Auth.css';

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Something went wrong');
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const EyeIcon = ({ open }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </>
      )}
    </svg>
  );

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <div className="auth-logo">
          <img src="/logo.png" alt="GlobalEmailHub" style={{ height: 32 }} />
          <h1>GlobalEmail Hub</h1>
        </div>

        {success ? (
          <>
            <h2>Password updated!</h2>
            <p className="auth-sub" style={{ marginBottom: 28 }}>
              Your password has been reset successfully. Redirecting you to login…
            </p>
            <p className="auth-switch">
              <Link to="/login">Go to login now</Link>
            </p>
          </>
        ) : (
          <>
            <h2>Set new password</h2>
            <p className="auth-sub">Choose a strong password for your account.</p>

            {error && <p className="error-msg" style={{ marginBottom: 12 }}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">New password</label>
                <div className="pw-input-wrap">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-input"
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                  />
                  <button type="button" className="pw-toggle" onClick={() => setShowPassword(v => !v)} tabIndex={-1}>
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Confirm password</label>
                <div className="pw-input-wrap">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    className="form-input"
                    placeholder="Repeat your password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                  />
                  <button type="button" className="pw-toggle" onClick={() => setShowConfirm(v => !v)} tabIndex={-1}>
                    <EyeIcon open={showConfirm} />
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={loading} style={{ marginTop: 8 }}>
                {loading ? 'Updating…' : 'Reset password'}
              </button>
            </form>

            <p className="auth-switch">
              Remembered it? <Link to="/login">Back to login</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
