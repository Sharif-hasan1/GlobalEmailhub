import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <span className="legal-badge">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated: <strong>April 18, 2026</strong></p>
      </div>

      <div className="legal-toc">
        <h3>Table of Contents</h3>
        <ol>
          <li><a href="#information">Information We Collect</a></li>
          <li><a href="#usage">How We Use Your Information</a></li>
          <li><a href="#sharing">Information Sharing</a></li>
          <li><a href="#cookies">Cookies</a></li>
          <li><a href="#security">Data Security</a></li>
          <li><a href="#rights">Your Rights</a></li>
          <li><a href="#retention">Data Retention</a></li>
          <li><a href="#children">Children's Privacy</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ol>
      </div>

      <div className="legal-highlight">
        Your privacy matters to us. This policy explains what data we collect, why we collect it, and how we protect it.
      </div>

      <div className="legal-section" id="information">
        <h2><span className="sec-num">1</span> Information We Collect</h2>
        <p>We collect information you provide directly to us when you:</p>
        <ul>
          <li>Create an account (username, email address, password)</li>
          <li>Place an order (billing details, order history)</li>
          <li>Contact our support team (messages, email)</li>
          <li>Use our website (IP address, browser type, pages visited)</li>
        </ul>
      </div>

      <div className="legal-section" id="usage">
        <h2><span className="sec-num">2</span> How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Send order confirmations and delivery notifications</li>
          <li>Respond to customer support inquiries</li>
          <li>Improve our products and website experience</li>
          <li>Detect and prevent fraud or unauthorized access</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div className="legal-section" id="sharing">
        <h2><span className="sec-num">3</span> Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
        <ul>
          <li><strong>Payment processors</strong> — to complete transactions securely</li>
          <li><strong>Service providers</strong> — who help us operate the website</li>
          <li><strong>Law enforcement</strong> — when required by law or to protect rights</li>
        </ul>
        <p>All third-party providers are contractually bound to protect your data.</p>
      </div>

      <div className="legal-section" id="cookies">
        <h2><span className="sec-num">4</span> Cookies</h2>
        <p>We use cookies and similar technologies to:</p>
        <ul>
          <li>Keep you logged in to your account</li>
          <li>Remember your cart and preferences</li>
          <li>Analyze website traffic and performance</li>
        </ul>
        <p>You can disable cookies in your browser settings, but some features may not function correctly.</p>
      </div>

      <div className="legal-section" id="security">
        <h2><span className="sec-num">5</span> Data Security</h2>
        <p>We implement industry-standard security measures to protect your data, including:</p>
        <ul>
          <li>HTTPS encryption for all data transmission</li>
          <li>Hashed and salted password storage</li>
          <li>Restricted access to personal data</li>
          <li>Regular security reviews</li>
        </ul>
        <p>However, no method of internet transmission is 100% secure. We cannot guarantee absolute security.</p>
      </div>

      <div className="legal-section" id="rights">
        <h2><span className="sec-num">6</span> Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your account and data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:globalemailhub@gmail.com">globalemailhub@gmail.com</a>.</p>
      </div>

      <div className="legal-section" id="retention">
        <h2><span className="sec-num">7</span> Data Retention</h2>
        <p>We retain your personal data for as long as your account is active or as needed to provide services. Order records may be retained for up to 3 years for legal and accounting purposes.</p>
      </div>

      <div className="legal-section" id="children">
        <h2><span className="sec-num">8</span> Children's Privacy</h2>
        <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal data, please contact us immediately.</p>
      </div>

      <div className="legal-section" id="contact">
        <h2><span className="sec-num">9</span> Contact Us</h2>
        <p>For any privacy-related questions or requests, reach out to:</p>
      </div>

      <div className="legal-contact-box">
        <h3>Privacy Contact</h3>
        <p>📧 <a href="mailto:globalemailhub@gmail.com">globalemailhub@gmail.com</a></p>
        <p>💬 <a href="https://t.me/sharifhasaan" target="_blank" rel="noopener noreferrer">Telegram: @sharifhasaan</a></p>
        <p>📞 <a href="tel:+8801733942373">+8801733942373</a></p>
        <p style={{ marginTop: 12 }}>Also see: <Link to="/terms" style={{ color: '#60a5fa' }}>Terms of Service</Link> · <Link to="/refund-policy" style={{ color: '#60a5fa' }}>Refund Policy</Link></p>
      </div>
    </div>
  );
}
