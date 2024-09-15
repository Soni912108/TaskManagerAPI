const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = async () => {
  const password = process.env.PASSWORD; // Access password from environment variables
  const encodedPassword = encodeURIComponent(password); // Encode the password to handle special characters
  const username = process.env.USERNAME; // Access username from environment variables
  const MONGODB_URI = process.env.MONGODB_URI // Access the full URI with placeholders to replace

    // Replace the placeholders with actual values
    .replace('USERNAME_PLACEHOLDER', username)
    .replace('PASSWORD_PLACEHOLDER', encodedPassword);

  try {
    await mongoose.connect(MONGODB_URI);
    console.info('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongoDB;









// const mongoose = require('mongoose');
// require('dotenv').config();


// const connectToMongoDB = async () => {

//   // const password = process.env.PASSWORD;
//   const mongoURI = process.env.MONGODB_URI;
//   // const encodedPassword = encodeURIComponent(password);
//   // let MONGODB_URI = `mongodb+srv://sonimailfortestuse:${encodedPassword}@backenddb.yf5ipol.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`

//   try {
//     await mongoose.connect(mongoURI);
//     console.info('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = connectToMongoDB;
