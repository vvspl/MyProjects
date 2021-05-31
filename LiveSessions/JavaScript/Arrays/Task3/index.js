// input array, callback
// output array

// callback
// element, index(opt) array(opt)
// boolean

// algo
// 1.create new array
// 2. iterate arr, apply callback for each element
// 3. if true, push result to new array
const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(arr[index], index, arr);
    if (callbackRes) {
      res.push(el);
    }
    res.push(el);
  }
};

// test 1
// const testArray = [1, 2, 4, -11, 16];
// const testCallback = el => el > 5;
// const res = filterArrayElements(testArray, testCallback);
// console.log(res);

// test2
// let arr = [34, 676, 35, 765, 345];
// function call(el) {
//   if (el>5) {
//     return true;
//   }
// }
// filterArrayElements(arr, call);
