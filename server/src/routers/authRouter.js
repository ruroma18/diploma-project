const authRouter = require('express').Router();
const AuthController = require('../controllers/authController');

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.post('/refresh', AuthController.refresh)

module.exports = authRouter;