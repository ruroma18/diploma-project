const { courseMW } = require('../middleware/courseMW');
const { checkAccessToken } = require('../middleware/tokenMW');
const SectionController = require('../controllers/sectionController');

const sectionRouter = require('express').Router();

sectionRouter.get('/getSection/:id', checkAccessToken, courseMW, SectionController.getSections);
sectionRouter.post('/createSection/:id', checkAccessToken, courseMW, SectionController.createSection);

module.exports = sectionRouter;