import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <span className="legal-badge">Legal</span>
        <h1>Terms of Service</h1>
        <p className="legal-meta">Last updated: <strong>April 18, 2026</strong></p>
      </div>

      <div className="legal-toc">
        <h3>Table of Contents</h3>
        <ol>
          <li><a href="#acceptance">Acceptance of Terms</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#accounts">User Accounts</a></li>
          <li><a href="#purchases">Purchases & Payments</a></li>
          <li><a href="#delivery">Delivery Policy</a></li>
          <li><a href="#prohibited">Prohibited Uses</a></li>
          <li><a href="#liability">Limitation of Liability</a></li>
          <li><a href="#changes">Changes to Terms</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ol>
      </div>

      <div className="legal-section" id="acceptance">
        <h2><span className="sec-num">1</span> Acceptance of Terms</h2>
        <p>By accessing or using GlobalEmail Hub ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
        <p>These terms apply to all users, including browsers, customers, and contributors of content.</p>
      </div>

      <div className="legal-section" id="services">
        <h2><span className="sec-num">2</span> Our Services</h2>
        <p>GlobalEmail Hub provides access to temporary and aged email accounts for legitimate personal and business use. Our services include:</p>
        <ul>
          <li>Sale of Gmail, Outlook, Yahoo, Hotmail and other email accounts</li>
          <li>Temporary email account packages</li>
          <li>Aged account bundles with verified credentials</li>
          <li>Customer support via Telegram and email</li>
        </ul>
        <div className="legal-highlight">
          All email accounts sold are intended for lawful purposes only. Using our products for spam, fraud, or any illegal activity is strictly prohibited.
        </div>
      </div>

      <div className="legal-section" id="accounts">
        <h2><span className="sec-num">3</span> User Accounts</h2>
        <p>To place orders, you must create an account. You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your login credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Providing accurate and up-to-date information</li>
          <li>Notifying us immediately of any unauthorized use</li>
        </ul>
        <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
      </div>

      <div className="legal-section" id="purchases">
        <h2><span className="sec-num">4</span> Purchases & Payments</h2>
        <p>All prices are listed in USD. Payment must be completed before delivery of any product. We use secure payment processing and do not store your payment details.</p>
        <ul>
          <li>Prices are subject to change without notice</li>
          <li>Coupon codes are valid only for their stated period</li>
          <li>Orders are confirmed after successful payment verification</li>
        </ul>
      </div>

      <div className="legal-section" id="delivery">
        <h2><span className="sec-num">5</span> Delivery Policy</h2>
        <p>Email account credentials are delivered digitally through your order dashboard. Delivery typically occurs within minutes to 24 hours after payment confirmation.</p>
        <p>We are not responsible for delays caused by incorrect account information provided by the customer.</p>
      </div>

      <div className="legal-section" id="prohibited">
        <h2><span className="sec-num">6</span> Prohibited Uses</h2>
        <p>You may not use our services for any of the following:</p>
        <ul>
          <li>Sending spam or unsolicited bulk emails</li>
          <li>Phishing, fraud, or identity theft</li>
          <li>Any illegal activity under applicable law</li>
          <li>Reselling without prior written consent</li>
          <li>Violating any third-party terms of service</li>
        </ul>
      </div>

      <div className="legal-section" id="liability">
        <h2><span className="sec-num">7</span> Limitation of Liability</h2>
        <p>GlobalEmail Hub provides services "as is" without warranties of any kind. We are not liable for:</p>
        <ul>
          <li>Account suspension or termination by the email provider</li>
          <li>Misuse of purchased accounts by the buyer</li>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Data loss or service interruptions</li>
        </ul>
      </div>

      <div className="legal-section" id="changes">
        <h2><span className="sec-num">8</span> Changes to Terms</h2>
        <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes your acceptance of the new terms.</p>
      </div>

      <div className="legal-section" id="contact">
        <h2><span className="sec-num">9</span> Contact Us</h2>
        <p>If you have questions about these Terms, please contact us:</p>
      </div>

      <div className="legal-contact-box">
        <h3>Get in Touch</h3>
        <p>📧 <a href="mailto:globalemailhub@gmail.com">globalemailhub@gmail.com</a></p>
        <p>💬 <a href="https://t.me/globalgmailhub" target="_blank" rel="noopener noreferrer">Telegram: @globalgmailhub</a></p>
        <p>📞 <a href="tel:+8809638320090" rel="noopener noreferrer">+880 9638320090</a></p>
        <p style={{ marginTop: 12 }}>Also see: <Link to="/privacy-policy" style={{ color: '#60a5fa' }}>Privacy Policy</Link> · <Link to="/refund-policy" style={{ color: '#60a5fa' }}>Refund Policy</Link></p>
      </div>
    </div>
  );
}
