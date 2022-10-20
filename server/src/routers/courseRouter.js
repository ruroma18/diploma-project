const courseRouter = require('express').Router();
const { userMW } = require('../middleware/userMW');
const CourseController = require('../controllers/courseController');
const imgUpload = require('../utils/imgUpload');

courseRouter.post('/createCourse/:id', imgUpload.single('image'), userMW, CourseController.createCourse);
courseRouter.get('/getCourses/:id', userMW, CourseController.getCourses)

module.exports = courseRouter;