/* eslint-disable arrow-body-style */
/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (value) => {
    // put you code here
   return Promise.resolve(value);
  };
  
  /*
   * пример использования
   */
  makePromise(17).then(number => {
    console.log(number); // 17
  });
