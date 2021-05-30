export function createLogger() {
  const memory = [];
  let message;
  let dateTime;
  let type;

  function warn(str) {
    const logger = { message, dateTime, type };
    logger.message = str;
    logger.dateTime = new Date();
    logger.type = 'warn';
    memory.push(logger);
  }
  function error(str) {
    const logger = { message, dateTime, type };
    logger.message = str;
    logger.dateTime = new Date();
    logger.type = 'error';
    memory.push(logger);
  }
  function log(str) {
    const logger = { message, dateTime, type };
    logger.message = str;
    logger.dateTime = new Date();
    logger.type = 'log';
    memory.push(logger);
  }

  function getRecords(kind) {
    if (kind===undefined) return memory.sort((a, b)=>b.dateTime - a.dateTime);
    return memory.filter(obj=>obj.type===kind).sort((a, b)=>b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.warn('User try to restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on site');
console.log(logger1.getRecords('log'));
