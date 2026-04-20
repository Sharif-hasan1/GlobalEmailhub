const mongoose = require('mongoose');
const dns = require('dns');

// Use Google DNS to fix SRV lookup issues on some networks
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mailstock');
    console.log('MongoDB connected successfully');

    mongoose.connection.on('disconnected', () => {
      console.error('MongoDB disconnected!');
    });
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
