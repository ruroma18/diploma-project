const path = require('path');

module.exports = {
  configPath: path.resolve(__dirname, 'config', 'postgresConfig.json'),
  modelsPath: path.resolve(__dirname, 'db', 'models'),
  seedersPath: path.resolve(__dirname, 'db', 'seeders'),
  migrationsPath: path.resolve(__dirname, 'db', 'migrations')
}