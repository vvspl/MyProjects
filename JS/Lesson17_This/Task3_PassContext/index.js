
function defer(func, ms){
  return function (){
    // eslint-disable-next-line no-undef
    setTimeout(() => func(this,...args), ms);
  }
}
const ariphmetic = (a, b, c) =>{
  console.log((a+b)/c);
};


const someFunc = defer(ariphmetic, 1000);

someFunc(2, 10, 6);
someFunc(500, 20, 60);
someFunc(58, 45, 2, 1000);

//      Переброс контекста без this:
//       function defer(func, ms){
// 4//      return function (){
// 5//     setTimeout(() => func(...arguments), ms);
//         }
//       }
//      const ariphmetic = (a, b, c) =>{
//      console.log((a+b)/c);
//      };


// 20// const someFunc = defer(ariphmetic, 1000);

// someFunc(2, 10, 6);

// Разъяснение Александра:
// Механизм работы твоего кода выглядит так:
// В 20 строке вызывается функция defer.
// Функция defer возвращает функцию, которая находится в 4-й строке.
// То есть, defferedSum - это функция из 4-й строки, которая не 
// требует обязательных аргументов. Она просто использует все 
// полученные аргументы (любого количества) чтобы вызвать функцию 
// внутри себя (строка 5)
// Результат вызова функции defer  в 20 строке можно представить 
// таким образом:
// const defferedSum = function() {
//     setTimeout(() => sum(...arguments), 1000);
// }