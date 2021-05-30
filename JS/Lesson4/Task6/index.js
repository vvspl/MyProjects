/* eslint-disable no-plusplus */
let sum=0;
for(let i =0; i<=1000; i++){
 sum+=i;
}
const rest=(sum%1234);
const main=(sum/1234-rest);
console.log(!!(main>rest));