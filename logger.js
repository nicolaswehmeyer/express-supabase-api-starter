import * as fs from 'fs'

function logToFile(message) {
  const logStream = fs.createWriteStream('api.log', { flags: 'a' });
  logStream.write(`${message}\n`);
  logStream.end();
}

const logger = {
  info: (message) => logToFile(`[INFO] ${message}`),
  warn: (message) => logToFile(`[WARN] ${message}`),
  error: (message) => logToFile(`[ERROR] ${message}`),
}

export default logger
