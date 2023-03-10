const { verifyToken } = require('../auth/authFunctions');

const validateToken = (req, res, next) => {
  const { auth } = req.header;
  
  if (!auth) return res.status(401).json({ message: 'Token not found' });
  if (!verifyToken(auth)) return res.status(401).json({ message: 'Expired or invalid token' });

  next();
};

module.exports = validateToken;
