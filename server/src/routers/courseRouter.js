const courseRouter = require('express').Router();
const { userMW } = require('../middleware/userMW');
const CourseController = require('../controllers/courseController');

courseRouter.post('/createCourse/:id', userMW, CourseController.createCourse);
courseRouter.get('/getCourses/:id', userMW, CourseController.getCourses)

module.exports = courseRouter;