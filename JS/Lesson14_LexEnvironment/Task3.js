let memoryNum = 0;

export function add(num) {
  memoryNum+= num;
}
export function decrease(num) {
  memoryNum-= num;
}
export function reset() {
  memoryNum = 0;
}
export function getMemo() {
  return memoryNum;
}
