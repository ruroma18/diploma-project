const router = require('express').Router();
const authRouter = require('./authRouter');
const courseRouter = require('./courseRouter');
const sectionRouter = require('./sectionRouter');

router.use('/auth', authRouter);
router.use('/course', courseRouter);
router.use('/section', sectionRouter);


module.exports = router;