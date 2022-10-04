const path = require('path');

module.exports = {
  configPath: path.resolve(__dirname, 'config', 'postgresConfig.json'),
  modelsPath: path.resolve(__dirname, 'models'),
  seedersPath: path.resolve(__dirname, 'seeders'),
  migrationsPath: path.resolve(__dirname, 'migrations')
}