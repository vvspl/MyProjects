function positiveSum(arr) {
    let sum = 0;
    arr.forEach(el => {if (el>0) sum+=el});
    return sum;
  }
  
  positiveSum([1, -4,7,12]);

// function myLanguages(results) {
//     const arr = [];
//   const keys = Object.keys(results);
//     keys.forEach(el => { 
//         // let a = results[el];
//          if (results[el]>=60) arr.push(el);
//         });
//     return arr;
//   }
  
//   myLanguages({"Java": 10, "Ruby": 80, "Python": 65});

// function divisors(integer) {
//     const arr = [];
//     for (let i=2; i<integer; i++){
//       if (integer%i===0) arr.push(i);
//     }
//     if (arr.length ===0) return `${integer} is prime`;
//     return arr;
//   };

function divisors(integer) {
    const result = [];
    for (let number = 2; number <= integer / 2; number += 1) {
      if (integer % number === 0) {
        result.push(number);
      }
    }
    return result.length ? `${integer} is prime` : result;
  }
  console.log(divisors(12)); // should return [2,3,4,6]
  console.log(divisors(25)); // should return [5]
  console.log(divisors(13)); // should return "13 is prime"


