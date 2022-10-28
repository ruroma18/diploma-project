const authRouter = require('express').Router();
const AuthController = require('../controllers/authController');
const { checkRefreshToken, checkAccessToken } = require('../middleware/tokenMW');
const imgUpload = require('../utils/imgUpload');

authRouter.post('/register', imgUpload.imgUploadSingle, AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.get('/refresh', checkRefreshToken, AuthController.refresh);
authRouter.get('/getUser', checkAccessToken, AuthController.getUser);

module.exports = authRouter;
