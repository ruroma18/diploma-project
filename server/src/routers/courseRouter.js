const courseRouter = require('express').Router();
const { userMW } = require('../middleware/userMW');
const CourseController = require('../controllers/courseController');
const imgUpload = require('../utils/imgUpload');
const { checkAccessToken } = require('../middleware/tokenMW');

courseRouter.post('/createCourse', 
checkAccessToken, 
userMW,
imgUpload.imgUploadSingle, 
CourseController.createCourse);

courseRouter.get('/getCourses', 
checkAccessToken, 
userMW, 
CourseController.getCourses)

module.exports = courseRouter;