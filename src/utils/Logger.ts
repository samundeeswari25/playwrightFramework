import winston from 'winston';
import fs from 'fs';

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

export const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(({ timestamp, level, message }) =>
      `${timestamp} [${level.toUpperCase()}] ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/automation.log'
    })
  ]
});