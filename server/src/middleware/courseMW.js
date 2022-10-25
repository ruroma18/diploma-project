const createHttpError = require('http-errors');
const { Course } = require('../db/models');

module.exports.courseMW = async (req, res, next) => {
  try {
    const { params: { id } } = req;

    const course = await Course.findByPk(id);

    if(!course){
      next(createHttpError(404, 'Course not found!'));
    }

    req.course = course;

    next();
  } catch (error) {
    next(error)
  }
}