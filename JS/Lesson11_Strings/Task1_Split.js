
// Деление входящей строки на подстроки длиной len, каждая новая строка начинается с новой строки и с заглавной буквы.
// Если не задана длина подстроки - автоматом разбивает по 10 символов
const splitText = (text, len = 10) => {
  if (typeof text !== 'string') return null;
  const Arr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    Arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return Arr.join('\n');
};

splitText('l6iugu nyig', 5);
