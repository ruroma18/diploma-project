const { courseMW } = require('../middleware/courseMW');
const { checkAccessToken } = require('../middleware/tokenMW');
const SectionController = require('../controllers/sectionController');

const sectionRouter = require('express').Router();

sectionRouter.get('/getSections', checkAccessToken, courseMW, SectionController.getSections);
sectionRouter.post('/createSection', checkAccessToken, courseMW, SectionController.createSection);

module.exports = sectionRouter;