export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function setSender(nameSender) {
    sender = nameSender;
  }
  function setMessage(text) {
    message = text;
  }
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

// setSender('Friend');
// setMessage('Hello');
// sendMessage('Ann');

const messenger1 = createMessenger();
messenger1.sendMessage('Tom');

const messenger2 = createMessenger();
messenger2.sendMessage('Bob');
