const mongoose = require('mongoose');
require('dotenv').config();


const connectToMongoDB = async () => {

  const password = process.env.PASSWORD;
  const encodedPassword = encodeURIComponent(password);
  let MONGODB_URI = `mongodb+srv://sonimailfortestuse:${encodedPassword}@backenddb.yf5ipol.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`

  try {
    await mongoose.connect(MONGODB_URI);
    console.info('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongoDB;
