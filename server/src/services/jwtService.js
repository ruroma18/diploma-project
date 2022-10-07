const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { JWT_ACCESS_SECRET, JWT_ACCESS_TIME, JWT_REFRESH_SECRET, JWT_REFRESH_TIME } = require('../constants')

const jwtSing = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

const createToken = (payload, { expiresIn, secret }) =>
  jwtSing(payload, secret, { expiresIn });

module.exports.generateTokenPair = async (payload) => ({
  accessToken: await createToken(payload, {
    expiresIn: JWT_ACCESS_TIME,
    secret: JWT_ACCESS_SECRET
  }),
  refreshToken: await createToken(payload, {
    expiresIn: JWT_REFRESH_TIME,
    secret: JWT_REFRESH_SECRET
  }),
})

const verifyToken = (token, secret) => jwtVerify(token, secret);

module.exports.verifyAccessToken = async token =>
  verifyToken(token, JWT_ACCESS_SECRET)

  module.exports.verifyRefreshToken = async token =>
  verifyToken(token, JWT_REFRESH_SECRET)  