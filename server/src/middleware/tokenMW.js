const jwtService = require('../services/jwtService');

module.exports.checkToken = async (req, res, send) => {
  try {
    const {headers: {autorization}} = req;

    const [authType, token] = autorization.split(' ');

    const verifiedToken = await jwtService.verifyAccessToken(token);

    next();
  } catch (error) {
    next(error)
    
  }

}