const materialRouter = require('express').Router();
const { checkAccessToken } = require('../middleware/tokenMW');
const { sectionMW } = require('../middleware/sectionMW');
const MaterialController = require('../controllers/materialController');
const fileUpload = require('../utils/fileUpload');

materialRouter.get('/getMaterials', checkAccessToken, sectionMW, MaterialController.getMaterials);
materialRouter.post('/createMaterial',
  checkAccessToken,
  sectionMW,
  fileUpload.fileUploadSinge,
  MaterialController.createMaterials);

module.exports = materialRouter;