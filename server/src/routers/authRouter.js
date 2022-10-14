const authRouter = require('express').Router();
const AuthController = require('../controllers/authController');
const { checkRefreshToken } = require('../middleware/tokenMW');

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.post('/refresh', checkRefreshToken, AuthController.refresh)

module.exports = authRouter;