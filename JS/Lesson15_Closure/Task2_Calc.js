export function createCalculator() {
  let memoryNum = 0;

  function add(num) {
    memoryNum += num;
  }
  function decrease(num) {
    memoryNum -= num;
  }
  function reset() {
    memoryNum = 0;
  }
  function getMemo() {
    return memoryNum;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculator();
calculator1.add(5);
console.log(calculator1.getMemo());
calculator1.decrease(3);
console.log(calculator1.getMemo());

const calculator2 = createCalculator();
calculator2.add(3);
console.log(calculator2.getMemo());
calculator2.decrease(2);
console.log(calculator2.getMemo());
calculator2.reset();
console.log(calculator2.getMemo());
