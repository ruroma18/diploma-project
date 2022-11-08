const taskRouter = require('express').Router();
const TaskController = require('../controllers/taskController');
const { checkAccessToken } = require('../middleware/tokenMW');
const sectionMW = require('../middleware/sectionMW');
const { courseMW } = require('../middleware/courseMW');
const imgUpload = require('../utils/imgUpload');

taskRouter.get('/getTasks',
  checkAccessToken,
  courseMW,
  sectionMW.findCourseSections,
  TaskController.getTasks);

taskRouter.post('/createTask',
  checkAccessToken,
  sectionMW.findSection,
  imgUpload.imgUploadSingle,
  TaskController.createTask);

taskRouter.get('/getTaskById', checkAccessToken, TaskController.getTaskById);

module.exports = taskRouter;