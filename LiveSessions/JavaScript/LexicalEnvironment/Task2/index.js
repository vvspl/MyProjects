const createLogger = () => {
  const messages = [];
  // lex env:
  // {
    // warn
    // error
    // log
    // getRecords
    // messages
  // }

  // 3. too many arrays

  // input: string
  // output: underfined

  function warn(stringWarn) {
messages.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
  }
 
  function error(stringError) {
 messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }
  
  function log(stringLog) {
  messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // input: string
  // output: array
  function getRecords(text) {
    // 1. eslint doesnot work
    // 2. too much if
    // 3. duplicates
    // 4. redundant variables
    return (text ? messages.filter(message => message.type === text) : [...messages]).sort((a, b) => b.dateTime - a.dateTime);
  }

    
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// test data

const logger1 = createLogger();
console.log(logger1);
logger1.error('gsags');
logger1.error('bfds');
logger1.log('some log');

console.log(logger1.getRecords('error'));
