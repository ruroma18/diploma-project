const {imgPath} = require('../constants');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, imgPath),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const imgUpload = multer({storage});

module.exports.imgUploadSingle = imgUpload.single('image');