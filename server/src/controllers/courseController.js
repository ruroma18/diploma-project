const { Course } = require('../db/models');
const CONSTANTS = require('../constants');

module.exports.getCourses = async (req, res, next) => {
  try {
    const { user } = req;

    if (user.role === CONSTANTS.TEACHER) {
      const courses = await user.findCourse();
      res.status(200).send(courses);
    }

    if (user.role === CONSTANTS.STUDENT) {
      const courses = await Course.findAll();
      res.status(200).send(courses);
    }

  } catch (error) {
    next(error);
  }
}

module.exports.createCourse = async (req, res, next) => {
  try {

    const { body, user, file: { filename } } = req;

    console.log(filename)

    const course = await user.createCourse({ imgPath: filename, ...body });

    res.status(200).send(course)

  } catch (error) {
    next(error);
  }
}