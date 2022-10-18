const jwtService = require('../services/jwtService');
const { RefreshToken } = require('../db/models/');

module.exports.checkAccessToken = async (req, res, next) => {
  try {
    const { headers: { authorization } } = req;

    const [authType, token] = authorization.split(' ');

    const decodedToken = await jwtService.verifyAccessToken(token);

    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports.checkRefreshToken = async (req, res, next) => {
  try {

    const { body: { refreshToken } } = req;

    const refreshTokenInstance = await RefreshToken.findOne({ where: { token: refreshToken } });

    if (!refreshTokenInstance) {
      return next(createHttpError(401, 'Invalid data'));
    }

    await jwtService.checkRefreshToken(refreshToken);

    req.refreshTokenInstance = refreshTokenInstance;

    next();
  } catch (error) {
    next(error);

  }
};