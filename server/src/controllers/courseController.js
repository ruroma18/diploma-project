const { Course, Task, Material, Section, Answer, InputBlock } = require('../db/models');
const CONSTANTS = require('../constants');
const createHttpError = require('http-errors');

module.exports.getCourses = async (req, res, next) => {
  try {
    const { user } = req;

    if (user.role === CONSTANTS.TEACHER) {
      const courses = await user.getCourses();
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

    const course = await user.createCourse({ imgPath: filename, ...body });

    res.status(200).send(course)

  } catch (error) {
    next(error);
  }
}

module.exports.getCourseById = async (req, res, next) => {
  try {

    const { course } = req;

    res.status(200).send(course);

  } catch (error) {
    next(error)
  }
};

module.exports.deleteCourse = async (req, res, next) => {
  try {
    const { course, tasksId, sectionsId } = req;

    await Answer.destroy({where: {taskId: tasksId}});
    
    await InputBlock.destroy({where: {taskId: tasksId}});

    await Task.destroy({where: {sectionId: sectionsId}});

    await Material.destroy({where: {sectionId: sectionsId}});

    await Section.destroy({where: {courseId: course.id}})

    const removedCourse = await Course.destroy({where: {id: course.id}});

    if(removedCourse !== 1) {
      return next(createHttpError(404, 'Course not found!'));
    }

    res.status(200).send('Course removed!');
  } catch (error) {
    next(error);
  }
}