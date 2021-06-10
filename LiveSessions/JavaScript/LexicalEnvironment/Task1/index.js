/*
globallexEnv = {
  environmentRecord: {
    message: 'Test',
    weight: 50,
    run: func {....}
  },
  outerLexEnv: null

  forLexEnv = {
    environmentRecord: {
      index:5,
      message: 'hello',
    },
    outerLexEnv: globalLexEnv
  }

  createMessengerLexEnv = {
  environmentRecord: {
    message: 'Just learn it',
    weight: 50,
    run: func {....}
    outerLexEnv: ...
  }
  runLexEnv = {
    environmentRecord:{
      ...
    }
    outerLexEnv: globalLexEnv
  }
}
*/

/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

{
  let message = 'someMessage';
  console.log(message);
}

for (let index = 0; index < 5; index += 1) {
  let message = 'hello';
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger1.setSender('TestSender');
messanger2.sendMessage('Andrey');

messanger2.sendMessage('Andrey');
run();
