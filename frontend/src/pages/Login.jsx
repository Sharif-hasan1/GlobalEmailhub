import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Login() {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleResponse = useCallback(async (response) => {
    setError('');
    setLoading(true);
    try {
      const user = await googleLogin(response.credential);
      navigate(user.role === 'admin' ? '/admin' : (redirect || '/products'));
    } catch (err) {
      setError(err.response?.data?.msg || 'Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [googleLogin, navigate, redirect]);

  useEffect(() => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    if (!clientId) return;
    let attempts = 0;
    const init = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({ client_id: clientId, callback: handleGoogleResponse });
        const btnEl = document.getElementById('google-login-btn');
        if (btnEl) window.google.accounts.id.renderButton(btnEl, { theme: 'outline', size: 'large', width: '320', text: 'signin_with' });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(init, 300);
      }
    };
    init();
  }, [handleGoogleResponse]);

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <div className="login-logo-wrap">
          <img src="/logo.png" alt="GlobalEmail Hub" className="login-logo" />
        </div>

        <h2>Welcome back</h2>
        <p className="auth-sub">Sign in to your account to continue</p>

        {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}
        {loading && <p className="auth-sub">Signing in…</p>}

        <div className="login-google-wrap">
          <div id="google-login-btn"></div>
        </div>

        <div className="login-about">
          <hr className="login-about-divider" />
          <p className="login-about-heading">What is GlobalEmail Hub?</p>
          <ul className="login-about-list">
            <li><span className="about-icon">📧</span> Buy aged Gmail &amp; Yahoo accounts</li>
            <li><span className="about-icon">✅</span> 2FA enabled · Instant delivery</li>
            <li><span className="about-icon">🔒</span> Trusted by thousands of buyers worldwide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
