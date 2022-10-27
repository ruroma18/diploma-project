const {filePath} = require('../constants');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, filePath),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const fileUpload = multer({storage});

module.exports.fileUploadSinge = fileUpload.single('file');