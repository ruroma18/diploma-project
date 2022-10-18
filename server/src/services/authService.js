const jwtService = require('./jwtService');
const createHttpError = require('http-errors');
const { User, RefreshToken } = require('../db/models');

module.exports.createSession = async (user) => {
  const tokenPair = await jwtService.generateTokenPair(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    })

  await RefreshToken.create({ userId: user.id, token: tokenPair.refreshToken });

  return { user, tokenPair };
}

module.exports.refreshSession = async (refreshTokenIsntance) => {

  const user = await User.findOne({where: {id: refreshTokenIsntance.userId}});

  if (!user) {
    throw new createHttpError(404, 'User not found');
  }

  const tokenPair = await jwtService.generateTokenPair(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    });

  await RefreshToken.update(
    { token: tokenPair.refreshToken },
    { where: { token: refreshTokenIsntance.token } })

  return { user, tokenPair };
}