const { courseMW } = require('../middleware/courseMW');
const taskMW = require('../middleware/taskMW')
const { checkAccessToken } = require('../middleware/tokenMW');
const SectionController = require('../controllers/sectionController');

const sectionRouter = require('express').Router();

sectionRouter.get('/getSections', checkAccessToken, courseMW, SectionController.getSections);
sectionRouter.post('/createSection', checkAccessToken, courseMW, SectionController.createSection);
sectionRouter.delete('/deleteSection', checkAccessToken, taskMW.findSectionTasks, SectionController.deleteSection);

module.exports = sectionRouter;