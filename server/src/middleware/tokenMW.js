const jwtService = require('../services/jwtService');

module.exports.checkAccessToken = async (req, res, next) => {
  try {
    const { headers: { autorization } } = req;

    const [authType, token] = autorization.split(' ');

    await jwtService.verifyAccessToken(token);

    next();
  } catch (error) {
    next(error);
  }
}

module.exports.checkRefreshToken = async (req, res, next) => {
  try {

    const { body: { refreshToken } } = req;

    const refreshTokenInstance = await RefreshToken.findOne({ where: { token: refreshToken } });

    if(!refreshTokenInstance) {
      return next(createHttpError(401, 'Invalid data'));
    }

    await jwtService.checkRefreshToken(refreshToken);

    req.refreshTokenInstance = refreshTokenInstance;

    next();
  } catch (error) {
    next(error);

  }
}