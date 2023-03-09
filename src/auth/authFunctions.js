const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || '26467ada8f3cf8b04a65ef10818a9f4c117e9b19';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30min',
};

const generateToken = (payload) => jwt.sign({ payload }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { generateToken, verifyToken };
