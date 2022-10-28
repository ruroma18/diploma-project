const createHttpError = require('http-errors');
const { User, RefreshToken } = require('../db/models');
const authService = require('../services/authService');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res, next) => {
  try {
    const { body, file: {filename} } = req;

    const salt = await bcrypt.genSalt(10);

    body.password = await bcrypt.hash(body.password, salt);

    const user = await User.create({photoPath: filename, ...body});

    const sessionData = await authService.createSession(user);

    res.status(200).send(sessionData);

  } catch (error) {
    next(error);

  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { body: { email, password } } = req;

    const user = await User.findOne({ where: { email } });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!user) {
      return next(createHttpError(401, 'Invalid data'));
    }

    if (!validPassword) {
      return next(createHttpError(401, 'Invalid password'));
    }

    const sessionData = await authService.createSession(user);

    res.status(200).send(sessionData);

  } catch (error) {
    next(error);

  }
};

module.exports.refresh = async (req, res, next) => {
  const refreshTokenInstance = req;

  const sessionData = authService.refreshSession(refreshTokenInstance);

  res.status(200).send(sessionData);
}

module.exports.getUser = async (req, res, next) => {
  const { userId } = req;
  
  const user = await User.findOne({where: {id: userId}});

  const sessionData = await authService.createSession(user);

  res.status(200).send(sessionData);

}