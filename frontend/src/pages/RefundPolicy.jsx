import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <span className="legal-badge">Legal</span>
        <h1>Refund Policy</h1>
        <p className="legal-meta">Last updated: <strong>April 18, 2026</strong></p>
      </div>

      <div className="legal-toc">
        <h3>Table of Contents</h3>
        <ol>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#eligible">Eligible Refunds</a></li>
          <li><a href="#not-eligible">Non-Refundable Cases</a></li>
          <li><a href="#process">Refund Process</a></li>
          <li><a href="#timeframe">Timeframe</a></li>
          <li><a href="#replacements">Replacements</a></li>
          <li><a href="#disputes">Disputes</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ol>
      </div>

      <div className="legal-highlight">
        We stand behind every order. If something goes wrong on our end, we will make it right — either with a replacement or a refund.
      </div>

      <div className="legal-section" id="overview">
        <h2><span className="sec-num">1</span> Overview</h2>
        <p>At GlobalEmail Hub, customer satisfaction is our priority. Due to the digital nature of our products (email account credentials), our refund policy is specific and outlined clearly below.</p>
        <p>Please read this policy carefully before placing an order. By purchasing from us, you agree to these terms.</p>
      </div>

      <div className="legal-section" id="eligible">
        <h2><span className="sec-num">2</span> Eligible Refunds</h2>
        <p>You are entitled to a full refund in the following circumstances:</p>
        <ul>
          <li>The delivered email account credentials are invalid or do not work at the time of delivery</li>
          <li>You did not receive your order within 24 hours of confirmed payment</li>
          <li>The product delivered does not match what was described or ordered</li>
          <li>Duplicate payment was charged for the same order</li>
        </ul>
      </div>

      <div className="legal-section" id="not-eligible">
        <h2><span className="sec-num">3</span> Non-Refundable Cases</h2>
        <p>Refunds will <strong>not</strong> be issued in the following situations:</p>
        <ul>
          <li>The account was valid at delivery but was later suspended due to your usage</li>
          <li>You changed your mind after a successful delivery</li>
          <li>The account was used and then reported as invalid</li>
          <li>You violated the email provider's terms of service</li>
          <li>More than 48 hours have passed since order delivery without a reported issue</li>
          <li>The account credentials were shared with third parties</li>
        </ul>
        <div className="legal-highlight">
          We recommend testing all delivered credentials immediately upon receipt and reporting any issues within 48 hours.
        </div>
      </div>

      <div className="legal-section" id="process">
        <h2><span className="sec-num">4</span> Refund Process</h2>
        <p>To request a refund, please follow these steps:</p>
        <ol>
          <li>Contact us via email or Telegram with your order ID</li>
          <li>Describe the issue clearly with supporting evidence (screenshots if possible)</li>
          <li>Our team will review your request within 24–48 hours</li>
          <li>If approved, the refund will be processed to your original payment method</li>
        </ol>
      </div>

      <div className="legal-section" id="timeframe">
        <h2><span className="sec-num">5</span> Timeframe</h2>
        <p>All refund requests must be submitted within <strong>48 hours</strong> of the order delivery time. Requests submitted after this window will not be considered.</p>
        <p>Once approved, refunds are typically processed within <strong>3–7 business days</strong> depending on your payment provider.</p>
      </div>

      <div className="legal-section" id="replacements">
        <h2><span className="sec-num">6</span> Replacements</h2>
        <p>In many cases, instead of a refund, we offer a free replacement of the same product. Replacements are provided when:</p>
        <ul>
          <li>The delivered credentials were invalid at time of delivery</li>
          <li>A technical issue occurred on our side during delivery</li>
        </ul>
        <p>We will always attempt to resolve your issue with a replacement first before processing a monetary refund.</p>
      </div>

      <div className="legal-section" id="disputes">
        <h2><span className="sec-num">7</span> Disputes</h2>
        <p>If you are unsatisfied with our resolution, you may escalate the matter by contacting us directly. We are committed to resolving all disputes fairly and promptly.</p>
        <p>Please do not initiate a chargeback without first contacting us, as this may result in account suspension.</p>
      </div>

      <div className="legal-section" id="contact">
        <h2><span className="sec-num">8</span> Contact Us</h2>
        <p>To submit a refund request or ask questions, contact our support team:</p>
      </div>

      <div className="legal-contact-box">
        <h3>Request a Refund</h3>
        <p>📧 <a href="mailto:globalemailhub@gmail.com">globalemailhub@gmail.com</a></p>
        <p>💬 <a href="https://t.me/globalgmailhub" target="_blank" rel="noopener noreferrer">Telegram: @globalgmailhub</a></p>
        <p>📞 <a href="tel:+8809638320090" rel="noopener noreferrer">+880 9638320090</a></p>
        <p style={{ marginTop: 12 }}>Also see: <Link to="/terms" style={{ color: '#60a5fa' }}>Terms of Service</Link> · <Link to="/privacy-policy" style={{ color: '#60a5fa' }}>Privacy Policy</Link></p>
      </div>
    </div>
  );
}
