const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7); // remove the 'Bearer ' prefix
      try {
        const decoded = jwt.verify(token, 'd5c673b4939e7fa55965f276cf9b4088c9607a1a57f78ed183ca3f907e89dff7');
        req.user = decoded; // attach the user information to the request object
        next();
      } catch (err) {
        res.status(401).send('Invalid or expired token');
      }
    } else {
      res.status(401).send('Authentication required');
    }
  }
  
  module.exports = { authenticate };