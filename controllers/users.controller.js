const Users = require("../models/users.model.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;



const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check for existing user with either username or email
    const existingUser = await Users.findOne({
      $or: [
        { username },
        { email },
      ],
    });

    if (existingUser) {
      // check if username/email is already present
      const conflictField = existingUser.username === username ? 'Username' : 'Email';
      const message = `${conflictField} already in use!`;
      return res.status(401).json({ success: false, message });
    }

    // Hash the password before creating the user
    const salt = await bcrypt.genSalt(10); // Generate a salt for hashing
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await Users.create({ username, email, password: hashedPassword });
    // Generate a JWT token with user ID and other relevant data
    const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ success: true, token: token ,userId: user._id  });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const Login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Find user by username or email
    const existingUser = await Users.findOne({ $or: [{ username }, { email }] });

    if (!existingUser) {
      return res.status(400).json({ success: false, message: "User doesn't exist" });
    }
  
    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: existingUser._id, userId: existingUser._id }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ success: true, token, userId: existingUser._id });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ success: false, message: 'An error occurred while logging in' });
  }
};

module.exports = {Register,Login};

