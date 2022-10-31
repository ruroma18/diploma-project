const router = require('express').Router();
const authRouter = require('./authRouter');
const courseRouter = require('./courseRouter');
const materialRouter = require('./materialRouter');
const sectionRouter = require('./sectionRouter');
const taskRouter = require('./taskRouter');

router.use('/auth', authRouter);
router.use('/course', courseRouter);
router.use('/section', sectionRouter);
router.use('/material', materialRouter);
router.use('/task', taskRouter);


module.exports = router;