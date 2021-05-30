// Деление входящей строки на подстроки длиной len, в конце при недостатке букв - такое же количество точек.
// Если не задана длина подстроки - автоматом разбивает по 10 символов
const splitString = (text, len = 10) => {
    if (typeof text !== 'string') return null;
    const Arr = [];
    let startPosition = 0;
  
    while (true) {
      let chunk = text.substr(startPosition, len);
      if (chunk.length === 0) {
        break;
      }
      if(chunk.length<len) {
          const numberOfPoints = len - chunk.length;
          for(let i=0; i<numberOfPoints; i+=1)
          chunk+='.';
      }
      Arr.push(chunk);
      startPosition += len;
    }
    console.log(Arr);
    return Arr;
  };
  
 splitString('l6iugu nyig9', 5);
