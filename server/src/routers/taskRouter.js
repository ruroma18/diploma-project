const taskRouter = require('express').Router();
const TaskController = require('../controllers/taskController');
const { checkAccessToken } = require('../middleware/tokenMW');
const { sectionMW } = require('../middleware/sectionMW');
const { courseMW } = require('../middleware/courseMW');
const imgUpload = require('../utils/imgUpload');

taskRouter.get('/getTasks', checkAccessToken, courseMW, TaskController.getTasks);

taskRouter.post('/createTask',
  checkAccessToken,
  sectionMW,
  imgUpload.imgUploadSingle,
  TaskController.createTask);

module.exports = taskRouter;