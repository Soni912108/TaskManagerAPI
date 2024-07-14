const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // Check if the Authorization header exists and is valid JWT token
    if (!req.headers.authorization) {
      throw new Error('Unauthorized: Missing Authorization header');
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error('Unauthorized: Invalid token format');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
