require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

// ── Crash handlers ──
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err.message);
  console.error(err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION at:', promise);
  console.error('Reason:', reason);
  process.exit(1);
});

// Validate critical env vars
if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET is not set in .env');
  process.exit(1);
}

const app = express();

connectDB();

// Trust proxy so req.ip works behind reverse proxy
app.set('trust proxy', 1);

// Security headers via Helmet
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: false   // required for Google Sign-In popup
}));

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',')
  : ['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'];

app.use(cors({
  origin: [
    ...allowedOrigins,
    /^http:\/\/192\.168\.\d+\.\d+:\d+$/,
    /^http:\/\/10\.\d+\.\d+\.\d+:\d+$/
  ],
  credentials: true
}));

app.use(express.json({ limit: '5mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/admin', require('./routes/admin'));

// 404 handler for unknown API routes
app.all('/api/*', (req, res) => {
  res.status(404).json({ msg: 'API endpoint not found' });
});

// Serve React frontend in production
const buildPath = path.resolve(__dirname, '..', 'frontend', 'build');

// ── Sitemap ── must be BEFORE the React catch-all *
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.resolve(__dirname, '..', 'frontend', 'public', 'sitemap.xml');

  // CHECK 1 — File existence
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ sitemap.xml not found');
    res.status(404).type('application/xml').send(
      '<?xml version="1.0" encoding="UTF-8"?><error>sitemap.xml not found</error>'
    );
    return;
  }

  // CHECK 2 — File is not empty
  const content = fs.readFileSync(sitemapPath, 'utf8');
  if (!content.trim()) {
    console.log('❌ sitemap.xml is empty');
    res.status(500).send('sitemap.xml is empty');
    return;
  }

  // CHECK 3 — Valid XML structure
  if (!content.includes('<urlset') || !content.includes('</urlset>')) {
    console.log('❌ sitemap.xml has invalid structure');
    res.status(500).send('sitemap.xml has invalid structure');
    return;
  }

  // CHECK 4 — Serve successfully
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.sendFile(sitemapPath, (err) => {
    if (err) {
      console.log('❌ sitemap.xml send error:', err.message);
      res.status(500).send('Error serving sitemap.xml: ' + err.message);
    } else {
      console.log('✅ Sitemap served successfully');
    }
  });
});


if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  console.log('WARNING: frontend/build not found!');
}

const PORT = process.env.PORT || 3004;
const server = app.listen(PORT, "0.0.0.0", () => console.log(`GlobalEmail Hub server running on port ${PORT}`));

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated cleanly');
  });
});

// Global Express error handler — prevents server crash on unhandled route errors
app.use((err, req, res, _next) => {
  console.error('Server Error:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });

  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message
  });
});

// Process-level handlers — prevent silent crashes
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Promise Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

