const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })

const {
  JWT_ACCESS_SECRET,
  JWT_ACCESS_TIME,
  JWT_REFRESH_SECRET,
  JWT_REFRESH_TIME

} = process.env;

module.exports = {
  configPath: path.resolve(__dirname, 'config', 'postgresConfig.json'),
  modelsPath: path.resolve(__dirname, 'db', 'models'),
  seedersPath: path.resolve(__dirname, 'db', 'seeders'),
  migrationsPath: path.resolve(__dirname, 'db', 'migrations'),
  imgPath: path.resolve(__dirname, '..', 'public', 'images'),
  filePath: path.resolve(__dirname, '..', 'public', 'files'),
  JWT_ACCESS_SECRET,
  JWT_ACCESS_TIME,
  JWT_REFRESH_SECRET,
  JWT_REFRESH_TIME,
  TEACHER: 'teacher',
  STUDENT: 'student',
}