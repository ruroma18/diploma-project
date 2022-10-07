const createHttpError = require('http-errors');
const { User } = require('../db/models');

module.exports.register = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(200).send({ data: user });

  } catch (error) {
    next(error);

  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { body: { email, password } } = req;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(createHttpError(401, 'Invalid data'));
    }

    if(user.password !== password) {
      return next(createHttpError(401, 'Invalid data'));
    }

    res.status(200).send({ data: user });

  } catch (error) {
    next(error);

  }
};