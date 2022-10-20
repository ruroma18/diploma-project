const createHttpError = require('http-errors');
const { User } = require('../db/models');

module.exports.userMW = async (req, res, next) => {
  try {

    const { params: { id } } = req;

    const user = await User.findOne({where: {id}});

    if(!user){
      next(createHttpError(404, 'User not found!'))
    }

    req.user = user

    next();
  } catch (error) {
    next(error);
  }
}