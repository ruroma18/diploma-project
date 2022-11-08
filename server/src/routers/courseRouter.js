const courseRouter = require('express').Router();
const { userMW } = require('../middleware/userMW');
const CourseController = require('../controllers/courseController');
const imgUpload = require('../utils/imgUpload');
const { checkAccessToken } = require('../middleware/tokenMW');
const { courseMW } = require('../middleware/courseMW')
const sectionMW = require('../middleware/sectionMW');
const taskMW = require('../middleware/taskMW');

courseRouter.post('/createCourse',
  checkAccessToken,
  userMW,
  imgUpload.imgUploadSingle,
  CourseController.createCourse);

courseRouter.get('/getCourses',
  checkAccessToken,
  userMW,
  CourseController.getCourses)

courseRouter.get('/getCourse',
  checkAccessToken,
  courseMW,
  CourseController.getCourseById
)

courseRouter.delete('/deleteCourse',
  checkAccessToken, 
  courseMW,
  sectionMW.findCourseSections,
  taskMW.findCourseTasks,
  CourseController.deleteCourse)

module.exports = courseRouter;