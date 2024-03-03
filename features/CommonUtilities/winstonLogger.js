const { winston } = require('winston');

const logger = winston.createLogger({
  level: 'verbose',
  format: winston.format.simple(),
  transports: [new winston.transports.Console({ level: 'info' })],
});
module.exports = new logger;