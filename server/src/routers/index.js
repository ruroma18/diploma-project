const router = require('express').Router();
const authRouter = require('./authRouter');
const courseRouter = require('./courseRouter');

router.use('/auth', authRouter);
router.use('/course', courseRouter);


module.exports = router;